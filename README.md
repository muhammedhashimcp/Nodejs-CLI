https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs

steps

npm init

Open the index.js file in your text editor and copy the following code.
```
#!/usr/bin/env node

console.log( "Hello!" );
```

ext, open the package.json file in the root of the project in your text editor. Change the main value to bin/index.js. Add a new key for bin with the following text.


 "bin": {
   "hello": "./bin/index.js"
 }

```
node .

```
You can do that with the npm install command.

npm install -g .