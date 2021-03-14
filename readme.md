# Example lit elements
## Document for start project with typescript and lit element

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
### Install type script 
----
for start a new project Run thire scripts:
````
mkdir typescript-project
cd typescript-project
npm i typescript --save-dev
npx tsc --init
````

You can see nodejs make multi files on the your project directory check your `tsconfig.json` and change
- `sourceMap` to `true`
- `outDir` to `./dist` : the `outDir` is your compile javascript source directory project
- `rootDir` to `./src` : the `rootDir` is your typescripts source directory project

We shuld start coding in the `./src` directory then follw below commands for first start:

in the `./src/index.ts` you shuld put this code:
````
console.log('Hello World');
````
Run this command for compile your `typescript` to `javascript`
`````
npx tsc
`````
aftrer the run you can see node make a folder by the `dist` name and compile your typescript code to javascript code
### Run javascript
----
For run javascript files you should add `package.json` params as follows:
 `name`: `your project name`
 `version`: `1.0.0`
 `main`: `./dist/index.js`
 `type`: `module`
 `author`: `Your name`,
 `license`: `ISC`,
 `description`: `Test typescript`
 
 For example my `package.json` to be:
 ````
 {
  "name": "type-script",
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
 ````
 
 At the end you shuld run below command:
 ````
 node ./dist/index.js
 ````
 You Can see output similar tha below:
 ````
 $ node ./dist/index.js
hello World
 ````

