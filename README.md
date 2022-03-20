## Web project powered by thor-web framework

```npm run build``` to build whole project

```npm start``` to start the web server

```npm run debug``` to debug the web server (recommend use vscode javascript debug terminal to debug directly)

```npm run genkey``` to generate a new server key

## api doc

access http://localhost:8080/api-doc to see the server api manual.

## upgrade all modules

```bash
npm list --json | jq -r '.dependencies|keys|.[]' | awk '{system("npm i " $0)}' 
```
