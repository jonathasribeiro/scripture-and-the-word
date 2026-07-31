# Scripture and the Word / A Bíblia é ou contém a Palavra de Deus?

**Português** | **English** below.

## Links

- **Site (Netlify):** https://scripture-and-the-word.netlify.app
- **Repositório:** https://github.com/jonathasribeiro/scripture-and-the-word

## Objetivo / Aim

Aplicação web acadêmica, bilíngue (pt-BR / en-US), que investiga a relação entre Jesus Cristo como Logos eterno e as Escrituras inspiradas.

A biblical, bilingual academic site investigating the relation between Jesus Christ as the eternal Logos and the inspired Scriptures.

## Tese / Thesis

Jesus Cristo é a Palavra eterna de Deus em sentido pessoal e absoluto. As Escrituras são inspiradas, autoritativas e testemunham de Cristo. Escritura escrita, pregação, revelação e a Pessoa do Logos não são categorias idênticas.

Conclusão: é legítimo chamar a Bíblia de Palavra de Deus em sentido **derivado, instrumental e testemunhal**; no sentido **pessoal, pleno e eterno**, a Palavra de Deus é **Jesus Cristo**.

## Tecnologias

- React + TypeScript + Vite
- Tailwind CSS v4
- Lucide React
- React Router
- i18next / react-i18next
- Deploy estático (Netlify)

## Desenvolvimento local

```bash
cd scripture-and-the-word
npm install
npm run dev
```

Build e lint:

```bash
npm run build
npm run lint
```

## Estrutura de dados

Conteúdo editorial em `src/data/*.ts` (TypeScript tipado). Locales de interface em `src/locales/pt-BR.ts` e `src/locales/en-US.ts`.

### Adicionar fonte

Edite `src/data/resources.ts`. Se não houver URL pública, use `url: null` e `searchQuery` para o botão “Pesquisar obra” (Google Scholar).

### Adicionar imagem

Edite `src/data/images.ts` com crédito, licença, `sourceUrl` e `imageUrl` de instituições confiáveis. **Não** redistribua arquivos sem verificar licença. A presença da imagem não implica endosso da instituição.

### Adicionar idioma

1. Crie `src/locales/xx-YY.ts` com as mesmas chaves.
2. Registre em `src/i18n.ts`.
3. Estenda o seletor em `LanguageSwitcher` / `useLanguage`.

### Alterar cânones

Edite `src/data/canons.ts` (`canonTraditions`, `canonBooks`) e `src/data/deuterocanon.ts`.

## Publicar no Netlify

Build command: `npm run build` · Publish directory: `dist` · Ver `netlify.toml`.

Site em produção: https://scripture-and-the-word.netlify.app

## Aviso acadêmico

Este projeto é confessante e documental. Citações e datas devem ser verificadas em fontes primárias e edições críticas antes de uso acadêmico formal. Divergências entre estudiosos são indicadas quando pertinentes. Não invente citações, consensos ou atribuições.

---

## English

### Live site

https://scripture-and-the-word.netlify.app

### Local run

```bash
npm install && npm run dev
```

### Thesis

Christ is the eternal Word in the personal sense; Scripture is inspired and witnesses to him. Calling the Bible the Word of God is legitimate in a derived, instrumental, testimonial sense.

### Netlify

Build: `npm run build` · Publish: `dist` · See `netlify.toml`.

### Academic notice

Verify all citations against primary sources before formal scholarly use.
