This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), as such most of the Documentation in the [Create-React-App User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) does apply, we've taken some of the documentation we deemed important or different and included it below.

## Features

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [React Router v4](https://reacttraining.com/react-router/)
- [Recompose](https://github.com/acdlite/recompose)
- [Redux Actions](https://github.com/acdlite/redux-actions)
- [Flow](https://flow.org/)
- [Axios](https://github.com/mzabriskie/axios)
- [Storybook](https://storybook.js.org/)
- [Storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots)
- [Jest](https://facebook.github.io/jest/)
- [Enzyme](https://github.com/airbnb/enzyme)
- [SCSS](http://sass-lang.com/)
- [Sass Resources Loader](https://github.com/shakacode/sass-resources-loader)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Webpack](https://webpack.github.io/)

## Directory Structure

```bash
├── blueprints                                        # Blue print folders
│   ├── component                                     # Blue print for component `redux g component <component name>`
│   ├── container                                     # Blue print for container `redux g container <container name>`
│   ├── saga                                          # Blue print for saga `redux g saga <saga name>`
│   └── scene                                         # Blue print for scenes `redux g scene <scene name>`
├── config                                            # Contains config for Webpack, jest, etc, created by ejecting create-react-app
├── build                                             # Output for build command
├── public                                            # Contains build-essential non-js files, created by ejecting create-react-app
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── scripts                                           # Contains npm scripts for build/start/test, created by ejecting create-react-app
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src                                               # app src file
│   ├── __tests__                                     # root tests folder
│   │   ├── __snapshots__                             # storyshots snapshots folder
│   │   └── storyshots.test.js                        # Initialization for storyshots
│   ├── assets                                        # Images etc..
│   ├── components                                    # React Components
│   │   ├── stories.js                                # exports all stories
│   │   └── <component name>                          # root folder for component
│   │       ├── <component name>Component.js          # component file
│   │       ├── <component name>Component.test.js     # component test file
│   │       └── <component name>Component.story.js    # component story file
│   ├── containers                                    # React Components
│   │   ├── stories.js                                # exports all stories
│   │   └── <container name>                          # root folder for container
│   │       ├── <container name>Container.js          # container file
│   │       ├── <container name>Container.test.js     # container test file
│   │       └── <container name>Container.story.js    # container story file
│   ├── redux                                         # Redux files
│   │   ├── reducers                                  # redux reducers
│   │   │   ├── index.js                              # combines reducers
│   │   │   └── <reducer name>                        # root folder for reducer
│   │   │       ├── <reducer name>Reducer.test.js     # reducer test file
│   │   │       └── <reducer name>Reducer.js          # reducer file
│   │   ├── sagas                                     # redux saga files
│   │   │   ├── index.js                              # combines all sagas
│   │   │   └── <saga name>                           # Saga container
│   │   │       ├── <saga name>Saga.test.js           # Saga test file
│   │   │       └── <saga name>Saga.js                # Saga
│   │   └── store.js                                  # creates and configures the redux store
│   ├── scenes                                        # Scenes (maps to routes, similar to views)
│   │   ├── stories.js                                # Imports and exports all other stories. 
│   │   └── <scene name>                              # root folder for scene
│   │       ├── <scene name>Scene.js                  # scene file
│   │       ├── <scene name>Scene.story.js            # scene story file
│   │       ├── <scene name>Scene.test.js             # scene test file
│   ├── services
│   │   └── <service name>Service
│   │       ├── <service name>Service.js
│   │       └── <service name>Service.test.js
│   ├── style
│   │   ├── resources                                 # all mixins and variables should be in this folder
│   │   │   ├── _variables.scss                       # all scss variables
│   │   └── main.scss                                 # main.scss has all global styles applied directly the html page.
├── storybook                                         # storybook config
├── package.json                                      # npm package file
└── yarn.lock                                         # Locks all libraries in place. 
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `yarn storybook`

Starts Storybook, [more info](#storybook) below.
Open [http://localhost:6006](http://localhost:6006) to see it in your browser.

## Changing the Page `<title>`

You can find the source HTML file in the `public` folder of the generated project. You may edit the `<title>` tag in it to change the title from “React App” to anything else.

Note that normally you wouldn’t edit files in the `public` folder very often. For example, [adding a stylesheet](#adding-a-stylesheet) is done without touching the HTML.

If you need to dynamically update the page title based on the content, you can use the browser [`document.title`](https://developer.mozilla.org/en-US/docs/Web/API/Document/title) API. For more complex scenarios when you want to change the title from React components, you can use [React Helmet](https://github.com/nfl/react-helmet), a third party library.

## Adding a Stylesheet

This project uses a Webpack setup that enables SCSS files to be used as CSS Modules. It also incorporates [sass resource loader](https://github.com/shakacode/sass-resources-loader), so you don't have to import global variable files into each stylesheet. Simply keep your global sass files in `/src/style/resources` and webpack will do the rest.

### `Button.scss`

```css
.button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import styles from './Button.scss'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className={styles.button} />;
  }
}
```

## Adding Images, Fonts, and Files

With Webpack, using static assets like images and fonts works similarly to CSS.

You can **`import` a file right in a JavaScript module**. This tells Webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. SVG files are excluded due to [#1153](https://github.com/facebookincubator/create-react-app/issues/1153).

Here is an example:

```js
import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

This works in CSS too:

```css
.Logo {
  background-image: url(./logo.png);
}
```

Webpack finds all relative module references in CSS (they start with `./`) and replaces them with the final paths from the compiled bundle. If you make a typo or accidentally delete an important file, you will see a compilation error, just like when you import a non-existent JavaScript module. The final filenames in the compiled bundle are generated by Webpack from content hashes. If the file content changes in the future, Webpack will give it a different name in production so you don’t need to worry about long-term caching of assets.

## Running Tests

This project uses [Jest](https://facebook.github.io/jest/) as its test runner.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.

We recommend that you use a separate tool for browser end-to-end tests if you need them. They are beyond the scope of Create React App.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

We recommend to put the test files (or `__tests__` folders) next to the code they are testing so that relative imports appear shorter. For example, if `App.test.js` and `App.js` are in the same folder, the test just needs to `import App from './App'` instead of a long relative path. Colocation also helps find tests more quickly in larger projects.

### Command Line Interface

When you run `yarn test`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests, just like `yarn start` recompiles the code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands from the “Watch Usage” note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `yarn test`, Jest will only run the tests related to files changed since the last commit. This is an optimization designed to make your tests runs fast regardless of how many tests you have. However it assumes that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can also press `a` in the watch mode to force Jest to run all tests.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/expect.html#tohavebeencalled) to create “spies” or mock functions.

### Coverage Reporting

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `yarn test -- --coverage` (note extra `--` in the middle) to include a coverage report like this:

![coverage report](http://i.imgur.com/5bFhnTS.png)

Note that tests run much slower with coverage so it is recommended to run it separately from your normal workflow.

### Snapshot Testing

We enable snapshot testing through the storybook addon: [Storyshots](https://github.com/storybooks/storybook). It automatically generates snapshots of the UI components and compares them so that you're notified of when the UI changes. You'll have to update these storyshots after examining them to make sure things didn't change unexpectedly.

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest) which works with Create React App out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## Storybook

>React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively.

[Storybook](https://storybook.js.org/) is a way to build and test component in isolation from eachother and from state. Basically it's a component-sandbox environment where you can adjust and solidify individual components without the hassle of finding them in the app itself.
