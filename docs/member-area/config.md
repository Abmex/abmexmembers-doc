---
title: Configuração Inicial
sidebar_position: 1
---

### Criação de uma área de membros

`POST /member-area-dev.herokuapp.com/memberArea - FORMATO DA REQUISIÇÃO`

Esta rota enviará suas credenciais de acesso para o seu e-mail, o qual permitirá que você faça requisições às outras rotas do abmexmembers.


> Token de integração deve ser usado para criar área de membros. → [Token de integração](/abmexmembers-doc/docs/token-acess/token-integration)


```ts
{
  "domain": "string",
  "memberAreaName": "string"
}
```

