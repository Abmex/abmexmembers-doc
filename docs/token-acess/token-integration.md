---
sidebar_position: 1
---

# Token para integração

`POST /member-area-dev.herokuapp.com/memberArea/generateToken - FORMATO DA REQUISIÇÃO`

Esta rota retorna um token que permite um usuário acessar os endpoints de integração da Área de Membros.

```ts
{
  "email": "string",
  "name": "string"
}
```

> Para usar as demais rotas da abmexmembers é necessário gerar um novo token. → [Token de autenticação](token-auth)