## Install

Use degit to create the project:

```bash
npx degit ThorQin/thor-web-vue my-project
```

## Build

```
npm run build
```

## Start a production web server
```
npm start
```

## Start a development web server with auto reload enable
```
npm run debug
```

- recommend use vscode javascript debug terminal to debug directly

## Generate a new server key
```
npm run genkey
```

## See api doc

- Start the server 
- Then access http://localhost:8080/api-doc to see the server api manual.

## Upgrade all modules

```bash
npm list --json | jq -r '.dependencies|keys|.[]' | awk '{system("npm i " $0)}' 
```

- Should be executed under linux or macos and require install `jq` first.
