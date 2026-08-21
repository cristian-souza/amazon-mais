# Prompt para Google Stitch — Landing Page Amazon+

> Copie o texto abaixo (a partir de "Crie...") e cole no Stitch. Dados de planos,
> endereço, redes sociais e telefone são reais (ver fontes abaixo); textos marcados
> como **[placeholder]** são ilustrativos porque não há conteúdo real definido para
> eles — revise antes de publicar.

**Fontes usadas para os dados reais:**

- Logo: **confirmada pelo cliente** (arquivo enviado diretamente na conversa). Difere
  do `src/images/logo.png` que estava no projeto — este último está desatualizado e
  não deve ser usado como referência. Ver descrição completa na seção "Logo" abaixo.
  ⚠️ Nota: a logo real traz o tagline "Sempre MAIS Internet", diferente do
  "Manacapuru Confia!" usado hoje no header do site (`index.html`). Mantive os dois no
  prompt abaixo — "Sempre MAIS Internet" como parte fixa do lockup da logo, e
  "Manacapuru Confia!" como slogan de marketing separado, como já é usado no site
  atual — mas confirme com o cliente se essa é a intenção certa.
- Telefone/WhatsApp `(92) 3199-2333`: encontrado na bio pública do Instagram
  (@amazonmais) e confirmado de forma independente em resultado de busca web —
  **confirme com a empresa antes de publicar**, pois não foi validado diretamente
  por vocês
- Instagram: `https://www.instagram.com/amazonmais/`
- Facebook: `https://www.facebook.com/amazonmais`
- Site institucional encontrado: `amazonmais.com.br` (não carregou conteúdo útil no
  momento da pesquisa — sem dados extras de "sobre nós"/história)
- Estrutura de seções calibrada com base em landing pages reais de provedores de
  internet por fibra de porte regional (ex.: CTA Internet, Swiss Fiber, WSNET), que
  seguem o padrão: Header → Hero → Diferenciais → Planos com CTA por card → CTA final
  → Footer com telefone/redes sociais clicáveis

---

Crie uma landing page (mobile-first, responsiva) para a **Amazon+**, um provedor de
internet residencial por fibra óptica que atua em Manacapuru, Amazonas, Brasil. Slogan
oficial: "Manacapuru Confia!".

**Atmosfera visual:** confiável e vibrante, não corporativo-genérico. Densidade média,
assimetria controlada (evite hero centralizado), micro-interações sutis nos cards e
botões. Evite clichês de IA: sem glow neon, sem roxo neon "AI aesthetic", sem gradiente
excessivo no texto, sem ícones de seta "role para baixo".

**Logo (identidade confirmada — usar exatamente esta descrição, anexando o arquivo
oficial da logo no Stitch como referência de imagem quando possível):**

- **Ícone:** símbolo de "#" (hashtag) estilizado, desenhado como traços de pincel/
  caligráficos com pontas afiladas — não é um hashtag geométrico reto, tem
  personalidade orgânica e fluida. Sempre em branco sobre fundo roxo (`#7A1E6C` ou
  variação mais escura).
- **Wordmark:** "amazon**+**" em branco, sans-serif arredondada e bold (peso pesado,
  cantos suavizados — família similar a Poppins/Nunito ExtraBold), tudo minúsculo
  exceto o "+" final, que fica no mesmo peso visual da palavra.
- **Tagline do lockup:** "Sempre MAIS Internet" — branco, peso bold, tamanho menor que
  o wordmark, com "MAIS" em caixa alta para dar ênfase.
- **Aplicação de fundo:** quando a logo aparece em bloco/selo (ex: og:image, redes
  sociais), o fundo é um roxo sólido profundo com textura sutil de listras diagonais
  mais escuras (leve variação tonal, não é gradiente chapado). No site, usar essa logo
  em branco sobre o gradiente roxo→verde já existente no header/footer, ou em versão
  monocromática escura sobre fundo claro quando necessário (ex: dentro do card branco
  de "Sobre Nós").
- **Não alterar:** não trocar o ícone "#" por outro símbolo, não engordar/afinar o
  traço do pincel, não separar o "+" do wordmark em cor diferente.

**Paleta de marca (usar exatamente estes tons, é a identidade já existente):**

- Roxo principal `#7A1E6C` — fundo de destaque, gradientes de header/footer
- Verde `#2E7D32` — accent de sucesso/CTA secundário, texto "MEGA"
- Vermelho `#E53935` — usar com moderação, alertas/urgência pontual
- Azul HBO `#1A237E` e Azul Disney `#0D47A1` — apenas nos selos de streaming
- Preto `#000000` para texto principal, branco `#FFFFFF` para superfícies de card
- Gradiente diagonal roxo→verde para header e footer (já validado na marca)

**Tipografia:** títulos em Poppins (bold, track levemente apertado), corpo de texto em
Open Sans. Hierarquia por peso e cor, não por tamanho exagerado.

**Contato real (usar em todos os CTAs de conversão, sem placeholder):**

- WhatsApp: `https://wa.me/559231992333`
- Telefone clicável: `tel:+559231992333` (exibir também como "(92) 3199-2333")

## Seções (nesta ordem)

### 1. Header

- Logo completa (ícone "#" de pincel + wordmark "amazon+", ver descrição acima) com o
  slogan de marketing "Manacapuru Confia!" abaixo, em versão compacta para caber no
  header sem competir com o menu
- Menu: Home / Planos / Sobre Nós / Contato
- Telefone clicável visível no canto (padrão comum em sites de provedores):
  "(92) 3199-2333" → `tel:+559231992333`
- Botão CTA no header: **"Assine Agora"** → `https://wa.me/559231992333`
- Menu hamburguer em mobile (<768px), navegação colapsa em drawer lateral

### 2. Hero

- Headline: "Internet rápida e diversão sem limites em Manacapuru"
- Subheadline: "Planos de até 900 MEGA com Deezer, HBO Max e Disney+ inclusos."
- CTA primário único: **"Fale com um consultor"** → `https://wa.me/559231992333`
- Layout assimétrico (split screen: texto de um lado, composição visual/ilustração do
  outro — não centralizado)

### 3. Diferenciais (comum em sites de provedores de internet — 3 a 4 blocos curtos,

sem cards idênticos e quadrados, usar ícones + texto qualitativo, sem números
inventados)

- Ex.: "100% Fibra Óptica", "Suporte local em Manacapuru", "Instalação rápida",
  "Streaming incluso no plano"
- Nenhuma estatística específica (não inventar "99,9% de uptime" nem "+XX mil
  clientes") — apenas atributos qualitativos até a empresa validar números reais

### 4. Sobre Nós [placeholder — não há texto de história real disponível (o site

institucional não retornou conteúdo); use algo genérico e curto, sinalizando que
deve ser revisado pelo cliente]

- Breve texto institucional: empresa local, foco em Manacapuru, confiança da comunidade
- Não invente números/datas específicas (fundação, quantidade de clientes) — mantenha
  o texto qualitativo até que o cliente forneça dados reais

### 5. Planos (Internet + Diversão)

Três cards de plano, dados reais do projeto — não altere valores:

| Plano  | Ícone/tema        | Velocidade | Preço           | Streamings inclusos        |
| ------ | ----------------- | ---------- | --------------- | -------------------------- |
| MUSIC  | onda sonora       | 900 MEGA   | R$ 129,90\*/mês | Deezer                     |
| PIPOCA | pipoca            | 900 MEGA   | R$ 144,90\*/mês | Deezer + HBO Max           |
| CINEMA | projetor de filme | 900 MEGA   | R$ 159,90\*/mês | Deezer + HBO Max + Disney+ |

- Destaque o card **PIPOCA** com selo "Mais Popular" para quebrar a simetria e guiar
  a escolha (em vez de 3 cards idênticos)
- Cada card tem CTA próprio: **"Quero esse plano"** → WhatsApp
  `https://wa.me/559231992333?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20[NOME_DO_PLANO]`
  (substituir `[NOME_DO_PLANO]` por MUSIC/PIPOCA/CINEMA em cada botão)
- Nota de rodapé da seção: "\*Consulte nossas condições de contratação"
- Em mobile, cards em carrossel horizontal com swipe/scroll-snap (mantém o
  comportamento já usado no site atual)

### 6. CTA final (padrão comum antes do footer em sites de provedores)

- Faixa de destaque em largura total, fundo em gradiente da marca
- Texto curto: "Pronto para ter a melhor internet de Manacapuru?"
- Botão único: **"Falar no WhatsApp"** → `https://wa.me/559231992333`

### 7. Footer

- Logo em versão reduzida (ou monocromática em branco sobre o gradiente do footer)
- Ícones de redes sociais reais e clicáveis:
  - Instagram → `https://www.instagram.com/amazonmais/`
  - Facebook → `https://www.facebook.com/amazonmais`
  - WhatsApp → `https://wa.me/559231992333`
- Telefone clicável: "(92) 3199-2333" → `tel:+559231992333`
- Endereço: "R. Carolina Fernandes, 642, São José — CEP: 69400-797, Manacapuru"
- Copyright: "© 2026 Amazon Mais. Todos os direitos reservados."

### 8. Botão flutuante de WhatsApp (padrão do setor)

- Ícone flutuante fixo no canto inferior direito, visível em toda a rolagem da página
  (desktop e mobile), levando para `https://wa.me/559231992333`

## Componentes e comportamento

- **Botões:** preenchimento sólido no roxo da marca para CTA primário, contorno/ghost
  para CTA secundário. Feedback tátil (leve translação para baixo) no clique. Sem glow.
- **Cards de plano:** cantos arredondados, sombra suave tingida na cor de fundo,
  elevação maior no hover/foco. Selo "Mais Popular" no card PIPOCA.
- **Navegação mobile:** menu hamburguer com transição suave, sem sobreposição de texto.
- **Sem rolagem horizontal indevida** fora do carrossel de planos.
- Todos os alvos de toque com no mínimo 44px em mobile (inclusive telefone/WhatsApp).

## Restrições

- Não usar nomes de marca genéricos ("Acme", "Lorem Ipsum") em nenhum texto.
- Não inventar depoimentos de clientes, números de assinantes ou prêmios — não existem
  dados reais para isso no momento.
- Manter os valores de planos (preços/velocidades) exatamente como especificado acima.
- Usar exatamente a logo descrita (ícone "#" de pincel + wordmark "amazon+" + tagline
  "Sempre MAIS Internet"); não trocar o ícone por outro símbolo nem inventar elementos
  gráficos adicionais.
- Usar exatamente os links de Instagram, Facebook, WhatsApp e telefone informados
  acima — são dados reais e não devem ser tratados como placeholder.
- A seção "Sobre Nós" continua sendo placeholder qualitativo (sem história real
  disponível) — sinalizar claramente para revisão do cliente antes da publicação.
