/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    { id: "intro", label: "Início", type: "doc" },
    {
      "Token de Acesso": [
        {
          id: "token-acess/token-integration",
          label: "Token de integração",
          type: "doc",
        },
        {
          id: "token-acess/token-auth",
          label: "Token de autenticação",
          type: "doc",
        },
      ],
    }
  ],
};

module.exports = sidebars;
