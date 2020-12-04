# sample-node-app

This is a sample nodejs app in a docker container you can use to generate attacks against Sqreen

## build

```
docker build . -t sample-node
```

## run

This starts a web application listening on the port 8080.

It only have a `GET /` endpoints that returns `hello world`
```
docker run -p 8080:8080 -e SQREEN_APP_NAME=<the app name you chose> -e SQREEN_TOKEN=<your sqreen token> -ti sample-node
```

## Trigger an attack

You can trigger an In-App WAF attack using
```
curl -A Arachni/v1.5 http://localhost:8080/
```
