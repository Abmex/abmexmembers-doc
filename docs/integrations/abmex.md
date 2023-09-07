---
title: Integração com a abmex
sidebar_position: 2
---

### Vincule produtos da abmex na abmexmembers

`POST /member-area-dev.herokuapp.com/product/link/abmex - FORMATO DA REQUISIÇÃO`

**Via Body na requisição:**

> Esta rota faz uma requisição na plataforma integrada e busca as informações do produto a ser vinculado.  
> 
> `product_reference` → id do produto na plataforma integrada;

```ts
{
  "product_reference": number,
}
```

**OBS:** Ao vincular o produto, automaticamente vincula todos os planos desse produto na abmexmembers.