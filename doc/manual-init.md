# Example lit elements

## Document for start project with typescript and lit element

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Install type script

----
To start a new project Run their scripts:

```bash
mkdir typescript-project
cd typescript-project
npm i typescript --save-dev
npx tsc --init
```

You can see Nodejs make multi-files on your project directory check your `tsconfig.json` and change

- `sourceMap` to `true`
- `outDir` to `./dist` : the `outDir` is your compile javascript source directory project
- `rootDir` to `./src` : the `rootDir` is your typescripts source directory project

We should start coding in the `./src` directory then follow the below commands for the first start:

in the `./src/index.ts` you should put this code:

```node
console.log('Hello World');
```

Run this command to compile your `typescript` to `javascript`

```node
npx tsc
```

After the run, you can see node make a folder by the `dist` name and compile your typescript code to javascript code

### Run `javascript`

----
For run javascript files you should add `package.json` params as follows:

  1. `name`: `1-typescript-seed`
  2. `version`: `1.0.0`
  3. `main`: `./dist/index.js`
  4. `type`: `module`
  5. `author`: `Your name`,
  6. `license`: `ISC`,
  7. `description`: `Test typescript`

For example my `package.json` to be:

```Json
{
  "name": "1-typescript-seed",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "type": "module",
  "devDependencies": {
    "typescript": "^4.2.3"
  },
  "author": "Godgiven",
  "license": "ISC",
  "description": "test typescript"
}
```

At the end you should run the below command:

```bash
node ./dist/index.js
```

You Can see output similar the below:

```bash
$ node ./dist/index.js
hello World
```

### Serve your project

----
 [Official website @web/dev-server](https://modern-web.dev/docs/test-runner/overview/)
 You run your project with node but you cant watch that in the browser for the fix that, follow the below steps.

#### 1.install `@web/dev-server`

Run this command

```bash
 npm i --save-dev @web/dev-server
```

When this pakage was installed you sould make a config server file we make `dev-server.mjs` as follow:

```JSON
 export default {
  open: false,
  nodeResolve: true,
  watch: true,
  appIndex: 'demo.html',
  // in a monorepo you need to set set the root dir to resolve modules
  rootDir: '.',
  // debug: false,
  // hostname: "localhost",
  // port:"8080",
};
```

We make a `demo.html` with this code

```html
 <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="dist/index.js" type="module"></script>
  <title>1-typescript-seed</title>
</head>
<body>
  <h1> Check your console ... </h1>
</body>
</html>
```

And after, `run` this command:

```bash
yarn web-dev-server --watch --config dev-server.mjs
```

That result similar to the below:

```bash
Web Dev Server started...

  Root dir: 'Your project directory'
  Local:    http://localhost:8000/
  Network:  http://'Your ip':8000/
  
```

`Open the URL in your browser` and `watch your browser console` to watch the result

### config the `.gitignore`

----
We make `.gitignore` as below:

```text
node_modules/
dist/
```

### make scripts in the `package.json`

----
`Package.json` has various sections, `scripts` is one of them, which allows you to write `npm script` which we can run using `npm run <script-name>`. or `yarn <script-name>`

1. We make a script for `compile typescript to javascript` with the `build` name
2. We make a script for `serve on the browser` with the `serve` name

But until `we should run one by one` script `for handel that` we install the `npm-run-all` package for install that follow below steps.

#### install `npm-run-all`

To install `npm-run-all` run this command

```bash
yarn add npm-run-all --dev
```

After the install package you can add `script` for run `multi script` in the `package.json scripts` for example you can run:

```bash
yarn npm-run-all --parallel lint build serve
```

### At the end `package.json`

`package.json` to be as follow:

```JSON
{
  "name": "1-typescript-seed",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "type": "module",
  "scripts": {
    "build": "tsc --build --preserveWatchOutput",
    "prepare": "yarn build",
    "serve": "web-dev-server --watch --config dev-server.mjs",
    "watch": "npm-run-all --parallel watch:* serve",
    "watch:ts": "yarn build --watch",
    "clean": "tsc --build --clean"
  },
  "devDependencies": {
    "@web/dev-server": "^0.1.8",
    "npm-run-all": "^4.1.5",
    "typescript": "^4.2.3"
  },
  "author": "Godgiven",
  "license": "ISC",
  "description": "test typescript"
}
```

Now you can run this command for Watch your project

```bash
yarn watch
```
### Install `litElement`

[polymer/lit-element best reference](https://github.com/polymer/lit-element)
To install `litElement` in the first run this command:

```bash
yarn install lit-element
yarn i -D @webcomponents/webcomponentsjs
```

After that, you should add the below options to the `tsconfig.json`

1. `target`: `ES2017`
1. `moduleResolution`: `node`
1. `experimentalDecorators`:`true`

### Start project

Now that install lit-element was ended, you can use that then go to your destination file and add this code.

```Typescript
import { LitElement, html, property, PropertyValues } from 'lit-element'
class hello extends LitElement {
  // type: String, Specifies how to convert between property and attribute.
  // attribute: 'my-prop', Specifies corresponding observed attribute.
  // reflect: true, Specifies whether to reflect property to attribute on changes.
  // hasChanged(newValue, oldValue) { ... }, Specifies how to evaluate whether the property has changed.
  @property({
    type: String,
    reflect: true,
    hasChanged (newValue, oldValue): boolean {
      console.log('hasChanged %s => %s', oldValue, newValue)
      return newValue !== oldValue
    }
  })
  name = 'World';

  constructor () {
    super()
    console.log('constructor')
  }

  connectedCallback () {
    super.connectedCallback()
    console.log('connectedCallback')
  }

  attributeChangedCallback (name: string, old: string|null, value: string|null) {
    super.attributeChangedCallback(name, old, value)
    console.log('attributeChangedCallback')
  }

  // requestUpdate() {

  // }

  shouldUpdate (_changedProperties: PropertyValues) {
    console.log('shouldUpdate')
    return super.shouldUpdate(_changedProperties)
  }

  update (_changedProperties: PropertyValues) {
    console.log('updated')
    super.update(_changedProperties)
  }

  render () {
    console.log('render')
    return html`
      <p>Hello ${this.name}!</p>
    `
  }

  firstUpdated (_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
    console.log('firstUpdated')
  }

  updated (_changedProperties: PropertyValues) {
    super.updated(_changedProperties)
    console.log('updated')
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    console.log('disconnectedCallback')
  }
}
customElements.define('hello-world', hello)
```

Now you can watch your project for that use `yarn watch`
