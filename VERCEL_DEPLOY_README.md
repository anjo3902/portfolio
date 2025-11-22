Vercel REST deployment (no CLI)

The workflow `.github/workflows/deploy-backend-and-frontend.yml` can deploy your backend to Vercel using a REST API flow (no Vercel CLI required). To use it, set the following repository secrets:

- `VERCEL_TOKEN` - a Vercel Access Token (create from your Vercel account settings).
- `VERCEL_PROJECT_ID` - the Vercel Project ID for the backend (found in Project Settings → General → Project ID).
- `VERCEL_TEAM_ID` (optional) - the Team ID when deploying to a team account.
- `VERCEL_DEPLOY_NAME` (optional) - the name to assign to the deployment.
- `BACKEND_URL` (optional fallback) - a pre-existing backend URL to use instead of deploying.

How it works:
- The workflow runs `.github/vercel_deploy.js` which packages `./build` and POSTs it to Vercel's deployments API.
- The script prints a deployment URL which the workflow captures and injects into the frontend build as `REACT_APP_CONTACT_ENDPOINT`.

Notes:
- This REST approach uploads files directly as base64 in the request body and can hit size limits for large builds. If you see failures, use the Vercel CLI or set `BACKEND_URL` to a pre-hosted backend.
- The deployment URL becomes baked into the static frontend during build time. If you change the backend later, re-run the workflow to rebuild.
