---
sidebar_position: 2
---

# Token para autenticação

`POST /api/memberArea/auth/login - FORMATO DA REQUISIÇÃO`

Esta rota retorna um token que permite um usuário acessar os demais endpoints da Área de Membros.

**Via Header na requisição:**

> `member-area` → dominio da área de membros do usuário.

```ts
{
  "email": "string",
  "password": "string"
}
```