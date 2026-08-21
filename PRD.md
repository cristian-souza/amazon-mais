# PRD — Amazon+ (Landing Page)

## 1. Visão geral

Landing page institucional/comercial do provedor de internet **Amazon+**, atuante em
Manacapuru (AM), com o slogan "Manacapuru Confia!". O objetivo da página é apresentar
a marca e os planos de internet residencial com bônus de streaming (Deezer, HBO Max,
Disney+), permitindo que o visitante compare os planos disponíveis.

Não há back-end, formulário de contratação, autenticação ou banco de dados — é um site
estático (HTML/CSS/JS puro, sem framework e sem build step).

## 2. Stack atual

- **HTML5** — `index.html` (documento único, sem SPA/roteamento)
- **CSS puro** — `src/css/style.css` (variáveis CSS, flexbox, media queries; sem
  framework como Tailwind/Bootstrap)
- **JavaScript vanilla** — sem framework, dois arquivos:
  - `src/js/menu.js` — toggle do menu mobile (hamburger)
  - `src/js/carousel.js` — carrossel dos cards de plano (autoplay + botões)
- **Fontes/ícones externos via CDN**: Google Fonts (Poppins, Open Sans) e Font Awesome
  6.5.2
- Sem `package.json`, sem gerenciador de dependências, sem testes automatizados, sem
  CI/CD configurado

## 3. Estrutura de páginas/seções (o que já existe)

Tudo em uma única página (`index.html`):

1. **Header**
   - Logo "amazon+" com slogan
   - Menu hamburger (mobile) com toggle via `menu.js`
   - Navegação: Home / Planos / Sobre Nós / Contato — **todos os links são `href="#"`,
     sem destino real** (não há outras páginas nem âncoras funcionais)

2. **Hero**
   - Título de boas-vindas e texto de apoio (animação de pulso via CSS)

3. **Seção de Planos** (`.plans`)
   - Título "Internet + Diversão"
   - Carrossel horizontal com 3 cards de plano:
     | Plano | Velocidade | Preço | Streamings inclusos |
     |---|---|---|---|
     | MUSIC | 900 MEGA | R$ 129,90* | Deezer |
     | PIPOCA | 900 MEGA | R$ 144,90* | Deezer + HBO Max |
     | CINEMA | 900 MEGA | R$ 159,90\* | Deezer + HBO Max + Disney+ |
   - Navegação do carrossel por botões `<` `>` e autoplay a cada 5s (pausa ao
     interagir e retoma)
   - Aviso "\*Consulte nossas condições de contratação"

4. **Footer**
   - Ícones de redes sociais (Instagram, Facebook, WhatsApp) — **links `href="#"`,
     sem destino real**
   - Endereço físico: R. Carolina Fernandes, 642, São José — CEP 69400-797,
     Manacapuru
   - Copyright 2025

## 4. Responsividade

Duas breakpoints já implementadas:

- `≤768px`: menu vira hamburger fixo, navegação vira drawer lateral animado, layout
  do footer empilha
- `≤480px`: ajustes finos de tamanho de fonte/ícones

## 5. Estado do trabalho em andamento (não commitado)

Há alterações não commitadas em `index.html`, `src/css/style.css` e `src/js/menu.js`
(mexendo em atributos ARIA do menu e ajustes de estilo do plano de velocidade),
sugerindo que a responsividade/acessibilidade do menu e o card de planos estão sendo
refinados no momento.

## 6. Lacunas identificadas (gaps a decidir/priorizar)

- **Links mortos**: menu de navegação e ícones sociais não apontam para lugar algum
- **Sem CTA de conversão**: não há botão "Assinar"/"Contratar" nos cards de plano, nem
  formulário de contato/lead
- **Páginas referenciadas no menu não existem** (Planos, Sobre Nós, Contato são apenas
  âncoras `#` na mesma página)
- **`favicon.ico` referenciado mas ausente** em `src/images/`
- **Sem SEO básico**: falta meta description, Open Graph/Twitter cards, atributos
  `lang` já ok, mas falta `<meta name="description">`
- **Sem analytics/rastreamento** (GA4, Meta Pixel, etc.) — relevante se o objetivo for
  captar leads
- **Sem testes automatizados** nem linting configurado
- **Imagens dos botões de streaming (`stream-btn`) sem link/ação** — são apenas `<img>`
  estáticas, não clicáveis
- **Preço fixo hardcoded no HTML** — qualquer alteração de plano exige editar o HTML
  diretamente (sem CMS/dados externos)

## 7. Próximos passos sugeridos (para validar com o time)

1. Definir se as seções "Planos", "Sobre Nós" e "Contato" viram páginas reais ou
   âncoras internas (scroll to section)
2. Adicionar CTA de conversão nos cards (WhatsApp, formulário, telefone)
3. Corrigir/adicionar o favicon ausente
4. Adicionar meta tags de SEO e Open Graph
5. Decidir se vale migrar preços/planos para uma fonte de dados (JSON) em vez de HTML
   hardcoded, caso os planos mudem com frequência
