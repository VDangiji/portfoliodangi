# Copilot Instructions for protofolio (React Portfolio)

## Project Overview
- This is a single-page React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The entry point is `src/index.js`, which renders the `App` component into the DOM.
- All source code lives in the `src/` directory. Static assets are in `public/`.

## Key Files & Structure
- `src/App.js`: Main React component. Extend this to add new features or pages.
- `src/index.js`: App entry point; renders `<App />` inside `#root`.
- `src/App.test.js`: Example test using React Testing Library.
- `src/reportWebVitals.js`: Optional performance reporting (see comments in file).
- `public/index.html`: HTML template. Do not add script tags here; use React for UI.

## Developer Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (interactive watch mode)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Eject (advanced):** `npm run eject` (irreversible; exposes config)

## Patterns & Conventions
- Use functional React components and hooks (no class components by default).
- CSS is imported per-component (e.g., `import './App.css'`).
- Testing uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest. See `src/setupTests.js` for setup.
- Static assets (images, icons) should be placed in `public/` or imported in JS from `src/`.
- No custom routing, state management, or backend integration is present by default.

## External Dependencies
- Core: `react`, `react-dom`, `react-scripts`
- Testing: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `web-vitals`

## Examples
- To add a new page or section, create a new component in `src/` and import/use it in `App.js`.
- To add global styles, edit `src/index.css`.
- To add a favicon or manifest, update files in `public/`.

## Additional Notes
- This project follows standard Create React App conventions. See the [README.md](../README.md) for more details and links to official documentation.
- No project-specific patterns or custom build steps are present as of now.
