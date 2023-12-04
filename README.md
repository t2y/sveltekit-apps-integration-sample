# sveltekit-apps-integration-sample

Consideration to integrate multiple sveltekit applications.

## How to build

Clone this repository.

```bash
$ git clone git@github.com:t2y/sveltekit-apps-integration-sample.git
$ cd sveltekit-apps-integration-sample/
$ npm install
```

Install dependencies and build an application for node servers.

```bash
$ cd packages/kit-demo1/
$ npm install
$ npm run build
$ cd ../kit-demo2/
$ npm install
$ npm run build
$ cd ../kit-manager/
$ npm install
$ npm run build
$ node build/index.js
Listening on 0.0.0.0:3000
Listening on 0.0.0.0:3005
```

Access to localhost:3000 for kit-manager.

* kit-manager proxies kit-demo1 via http://localhost:3000/kit-demo1
* kit-manager provides kit-demo2 via http://localhost:3000/kit-demo2/index.html

### kill the node.js process if exists

For some reason, a demo app might not be completed. Kill the process manually if it exists.

```bash
$ ps ax | grep kit-demo1
$ kill ${process-id}
```
