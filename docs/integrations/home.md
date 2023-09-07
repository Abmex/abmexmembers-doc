---
title: Integração com a abmexmembers
sidebar_position: 1
---

## Introdução

Esse guia vai explicar como integrar a sua plataforma com a abmexmembers.

### Crie uma integração

`POST /member-area-dev.herokuapp.com/integrations - FORMATO DA REQUISIÇÃO`

**Via Body na requisição:**

>  Esta rota cria uma integração que pemite a um usuário vincular produtos e gerenciar planos na sua área de membros.   
> 
> `owner_id_platform` → id do usuário na plataforma que será integrada (abmex p.e);


```ts
{
  "integration_name": string,
  "api_key": string,
  "owner_id_platform": number,
}
```



