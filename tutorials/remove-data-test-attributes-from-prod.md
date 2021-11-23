### 1) install package to remove data-test attributes in prod
```bash
npm install --save-dev babel-plugin-react-remove-properties
```

if you are using `bit.dev` then install as the following: 

```bash
bit install babel-plugin-react-remove-properties
```

### Eject

Because we built our app with create-react-app, we need to run `npm run eject` so that we can gain full control to the configs in `package.json`

run `npm run eject` 
and you may have to commit your files first. 

here is the offical docs for this setup

[Babel-plugin-react-remove-properties docs](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

we are interested in this part.

```json
 "env": {
    "production": {
      "plugins": [
        ["react-remove-properties", {"properties": ["data-test"]}]
      ]
    }
  }
```

lets add that to our babel config in `package.json`

so we should have it look like this:

```json
  "babel": {
    "env": {
      "production": {
        "plugins": [
          ["react-remove-properties", {"properties": ["data-test"]}]
        ]
      }
    },
    "presets": [
      "react-app"
    ]
  }
```

now lets build the production app, and serve it and test if the data-attributes still exist

```bash
npm run build

serve -s build

npx serve -s build
```

and now check in the developer console if you can spot any data-test attributes
