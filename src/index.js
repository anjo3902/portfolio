import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

// Global diagnostics: log unhandled errors and promise rejections so we can
// debug blank pages in production where an unhandled exception is thrown.
if (typeof window !== "undefined") {
	window.addEventListener("error", (e) => {
		// eslint-disable-next-line no-console
		console.error("Unhandled global error:", e.error || e.message, e);
	});
	window.addEventListener("unhandledrejection", (e) => {
		// eslint-disable-next-line no-console
		console.error("Unhandled rejection:", e.reason, e);
	});
}
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
