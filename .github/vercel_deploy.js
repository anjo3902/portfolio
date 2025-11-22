#!/usr/bin/env node
/*
  Simple Vercel REST deployment script.
  - Reads ./build directory
  - Encodes files as base64 and posts to https://api.vercel.com/v13/deployments
  Requires env:
    VERCEL_TOKEN (Bearer token)
    VERCEL_PROJECT_ID (Vercel project id)
    VERCEL_TEAM_ID (optional)
    VERCEL_DEPLOY_NAME (optional - project name)

  Note: This approach may hit payload size limits for large builds. For
  small static sites it usually works. If you see failures, consider using
  the Vercel CLI or Git-based deployments.
*/

const fs = require('fs').promises;
const path = require('path');

async function walk(dir, base) {
  let entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    const rel = path.posix.join(base, ent.name);
    if (ent.isDirectory()) {
      const nested = await walk(full, rel);
      files.push(...nested);
    } else if (ent.isFile()) {
      files.push({ full, rel });
    }
  }
  return files;
}

async function main() {
  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  const teamId = process.env.VERCEL_TEAM_ID;
  const name = process.env.VERCEL_DEPLOY_NAME || undefined;

  if (!token) {
    console.error('VERCEL_TOKEN is required');
    process.exit(2);
  }
  if (!projectId) {
    console.error('VERCEL_PROJECT_ID is required');
    process.exit(2);
  }

  const buildDir = path.resolve(process.cwd(), 'build');
  try {
    await fs.access(buildDir);
  } catch (err) {
    console.error('Build directory not found at', buildDir);
    process.exit(3);
  }

  const entries = await walk(buildDir, '');
  const files = [];
  for (const e of entries) {
    const data = await fs.readFile(e.full);
    const b64 = data.toString('base64');
    files.push({ file: e.rel.replace(/\\/g, '/'), data: b64 });
  }

  const payload = {
    files,
    project: projectId,
    target: 'production',
  };
  if (name) payload.name = name;

  const apiUrl = 'https://api.vercel.com/v13/deployments' + (teamId ? `?teamId=${encodeURIComponent(teamId)}` : '');

  try {
    // Use global fetch (Node 18+) to avoid extra deps
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok) {
      console.error('Vercel API error:', res.status, json);
      process.exit(4);
    }

    // The API returns a deployment object; prefer url
    const url = json.url || (json.deployment && json.deployment.url) || '';
    if (url) {
      // print only the URL for the workflow to capture
      console.log(url.startsWith('http') ? url : `https://${url}`);
      process.exit(0);
    } else {
      console.error('No deployment URL returned', json);
      process.exit(5);
    }
  } catch (err) {
    console.error('Request failed', err);
    process.exit(6);
  }
}

main();
