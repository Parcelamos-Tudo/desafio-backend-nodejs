# Desafio Backend NodeJs - Parcelamos Tudo

Obrigado pelo interesse em fazer parte no nosso time! Para participar do processo de seleção, é necessário que todos os interessados pela vaga façam esse desafio.

O desafio consiste em **2** etapas, sendo a primeira uma parte mais lógica e a segunda uma parte o debug de uma aplicação. A resolução será avaliada conforme o seu nível de senioridade. Nossa intenção é ver como você pensa e resolve desafios e bugs.

Boa sorte 😄

> **Atenção**
> Antes do desafio tenha o nodejs (>=v16), docker e docker-compose instalado.

## Desafio 1

O primeiro desafio consiste em resolver problemas simples de lógica.

## Desafio 2

O segundo desafio você precisa fazer com que os seguintes endpoint tenham seus respectivos retornos:

**Primeiro endpoint**

Request:

```sh
$ curl http://localhost:9999/
```

Response:

```text
"Hello from api"
```

**Segundo endpoint**

Request:

```sh
$ curl --request POST --url http://localhost:9999/ --header 'Content-Type: application/json' --data '{"password":"senha123"}'
```

Response:

```text
{"success":true,"message":"Access authorized"}
```

> Para subir tudo, rode `docker-compose up -d --build`
