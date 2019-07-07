# docker-compose-node
docker compose sample project using node.js application.

RUN project
```
docker-compose up
```

## TEST
### 1. node.js application server
```
docker build --tag=node-api
docker run -p 3000:80 --name node-api node
```
open http://localhost:3000 on the browser

### 2. node.js web server
```
docker build --tag=node-web
docker run -p 5000:80 --name node-web node
```
open http://localhost:5000 on the browser

### 3. php web server
open http://localhost:4000 on the browser
