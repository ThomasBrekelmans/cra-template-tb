# TB's template for Create React App

This project was bootstrapped with [Create React App](https://create-react-app.dev/docs/getting-started).

You have used a [custom CRA template](https://create-react-app.dev/docs/custom-templates/), which has extended the official [TypeScript CRA template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript) with:

-   [Emotion](https://emotion.sh/docs/introduction#react) based CSS-in-JS for writing styles\
    _(importing CSS files and using CSS modules is still possible, but not recommended)_
-   [Stylelint](https://stylelint.io/) for CSS-in-JS (and regular) styles
-   [Prettier](https://prettier.io/docs/en/index.html) config and support, alongside pre-existing [ESLint](https://eslint.org/) with [CRA plugins and config](https://www.npmjs.com/package/eslint-config-react-app)
-   automatic TypeScript import sorting and grouping using [import-sort](https://github.com/renke/import-sort) (with [import-sort-style-module-scoped](https://github.com/cliffkoh/import-sort-style-module-scoped))
-   automatic linting and formatting of staged files during pre-commit through [husky (v4)](https://github.com/typicode/husky/tree/master), [lint-staged](https://github.com/okonet/lint-staged), eslint, prettier and import-sort
-   pre-configured/recommended extensions, settings and debug config for [Visual Studio Code](https://code.visualstudio.com/)
-   Tweaked browserslist

See the generated `package.json` for more information and all tool configuration/settings.\
See the generated `.vscode` folder for the VS Code extensions, settings and debug/launch configuration.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the [jest](https://jestjs.io/docs/en/getting-started) based test runner in the interactive watch mode.\
See the Create React App docs section about [running tests](https://create-react-app.dev/docs/running-tests) for more information.
See the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) docs for more information about writing (React) tests.

_Note `@testing-library/jest-dom`, `@testing-library/react` and `@testing-library/user-event` are already configured, integrated and ready to use._

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

_Note: serve is also built-in: `npm run build:serve`_

#### React profiling

Profiling using the React DevTools is now [opt-in](https://create-react-app.dev/docs/production-build#profiling) for production builds (and automatic for development builds).

Run `npm run build -- --profile` to opt-in.

### `npm run build:serve`

Uses serve to make a local static server for the build folder.\
_Run this after `npm run build`._

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `npm run build:analyze`

Uses [source-map-explorer](https://github.com/danvk/source-map-explorer#readme) to generate a file size report on the production build source (maps) in the build folder.\
_Run this after `npm run build`._

This creates a temporary file that is opened in the browser automatically.

### `npm run browserslist:check`

See which browsers match with the `"production"` `"browserslist"` config in `package.json`.

### `npm run browserslist:update`

Updates the caniuse-lite version in your npm lock file.\
See [browserslist recommendations](https://github.com/browserslist/browserslist#browsers-data-updating) for more info on when and why to run this.

## Code authoring tools

Prettier is responsible for formatting your code in all .js, .jsx, .ts, .tsx, .css, .html, .json and .md files.

ESLint is responsible for ensuring implementation best-practices when writing TypeScript/JavaScript code,
and similarly Stylelint for CSS(-in-JS).

import-sort only re-orders your TypeScript imports.

All of these are separate tools, that run in separate processes.\
By installing and using the recommended VS Code extensions and settings we ensure these tools run as you type (eslint) and save (import-sort and prettier) your code.

For people who do not use VS Code, these tools are also running automatically on all of the staged files before committing (though the husky and lint-staged powered git pre-commit hook).

## Debugging in VS Code

Simply press `F5` (to run the `Debug: Start Debugging` command in VS Code).\
_The launch/debug config is already there for you to use out-of-the-box._

Which runs the default in VS Code if you have not modified your keybindings.\
This opens a dedicated Chrome instance/window that is automatically coupled to your debugger inside VS Code. If you stop your debug session, the Chrome window is also closed automatically.\
_But your browser console output is still saved to the VS Code debug console._

You can add a breakpoint inside VS Code and/or type `debugger;` anywhere in your (TypeScript) code and the VS Code debugger will stop there as expected.

## VS Code extension recommendations

### Required

The extensions below are "required" for an optimal developer experience when using the frameworks/libraries in this template _(IMHO)_.

#### "amatiasq.sort-imports"

Run import-sort automatically on save.

#### "dbaeumer.vscode-eslint"

Run eslint automatically on type.

#### "esbenp.prettier-vscode"

Run prettier automatically on save.

#### "hex-ci.stylelint-plus"

Run stylelint automatically on type.

#### "jpoissonnier.vscode-styled-components"

Syntax highlighting for CSS inside `css and styled` template strings.

The TypeScript compiler also warns about using the incorrect CSS property names or values.

#### "msjsdiag.debugger-for-chrome"

Necessary to use the VS Code debugger with a dedicated Chrome window that is automatically coupled to your debug session.

### Strongly recommended

The extensions below are strongly recommended as well, but are not specific to this CRA template.

#### "streetsidesoftware.code-spell-checker"

Helps to detect spelling errors in code, like in this file or in string in TypeScript.

#### "tyriar.sort-lines"

Allows for sorting (selected) lines alphabetically on-demand.\
_F9 is the default key binding._
