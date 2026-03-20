# Plano do Site - Oleonex

## Cliente
**Oleonex** - Soluções em Oleoquímicos
Astorga/PR - Brasil

## Direção Estética: "Organic Chemistry"
Design institucional refinado que evoca estruturas moleculares e química orgânica:
- Formas orgânicas (blob shapes) inspiradas no material gráfico existente
- Gradiente verde-para-teal como assinatura visual (#7CC143 → #00A19A)
- Tipografia moderna e profissional
- Motivos moleculares/circulares ecoando o logo
- Imagens hero com clip-paths orgânicos
- Animações suaves ativadas por scroll

---

## Paleta de Cores (extraída da identidade visual)
| Token | Hex | Uso |
|-------|-----|-----|
| --primary-green | #7CC143 | Gradiente início, destaques |
| --primary-teal | #00A19A | Gradiente fim, links, botões |
| --dark | #2D3436 | Textos, header |
| --text | #333333 | Corpo de texto |
| --light | #F8F9FA | Fundos alternados |
| --white | #FFFFFF | Fundos principais |
| --accent | #0ABAB5 | Hover, interações |

## Tipografia
- **Display**: "Outfit" (Google Fonts) - geométrica, moderna, profissional
- **Body**: "DM Sans" (Google Fonts) - limpa, legível, amigável

---

## Estrutura de Páginas

### 1. HOME (index.html)
- **Header**: Logo + nav sticky + language switcher PT/EN + botão WhatsApp
- **Hero**: Fullscreen com blob shape, gradiente overlay, headline impactante
- **Sobre Preview**: Breve intro + números/estatísticas animadas
- **Linhas de Produto**: 4 cards com blob shapes, imagens, hover effects
- **Diferenciais**: Grid de features/benefícios com ícones
- **CTA**: Seção de chamada para contato
- **Footer**: Contato, links, redes sociais

### 2. SOBRE (sobre.html)
- **Hero**: Banner com imagem industrial + título
- **História**: Timeline da empresa
- **Missão/Visão/Valores**: Cards com ícones
- **Estrutura**: Fotos da fábrica/equipe
- **Certificações**: Grid de selos

### 3. PRODUTOS (produtos.html)
- **Hero**: Banner com gradiente
- **4 Linhas de Produto**: Cards grandes com imagem, descrição, link
- Cada card leva para página de detalhe

### 4. PÁGINAS DE LINHA (nex-agro.html, nex-saneantes.html, etc.)
- **Hero**: Banner específico da linha com blob shape
- **Descrição da Linha**: Texto institucional
- **Grid de Produtos**: Cards com nome, tipo químico, função, aplicação
- **CTA**: Solicitar ficha técnica / Fale conosco

### 5. CONTATO (contato.html)
- **Hero**: Banner com mapa
- **Formulário**: Nome, email, telefone, assunto, mensagem
- **Dados de Contato**: Telefones, emails, endereço
- **Mapa**: Google Maps embed

### 6. FAQ (faq.html)
- **Hero**: Banner simples
- **Accordion**: Perguntas e respostas expandíveis
- **CTA**: Link para contato

---

## Linhas de Produto

### NEX Agro (9 produtos)
Aditivos de alto desempenho para uso industrial agrícola.
- NEX AMPHO CB (Betaína 30%)
- NEX MID DC 60, 80, 90 (Amida)
- NEX LESS 27 e 70-170 (Lauril Éter Sulfato de Sódio)
- NEX LAS 90 (Ácido Sulfônico 90%)
- NEX QUAT 1629 e 1650 (Quaternário de Amônio)
- NEX FI 37 (Formol Inibido 37%)
- NEX APV (Álcool Polivinílico - PVOH)
- NEX OM (Óleo Mineral USP)
- NEX GBD (Glicerina Bidestilada USP)

### NEX Saneantes (9 produtos)
Aditivos para higiene e limpeza profissional.
- NEX LAS 90, NEX MID DC 60/80/90, NEX BP
- NEX ACT, NEX LESS 27/70, NEX AMPHO CB
- NEX QUAT, NEX QUAT 1650, NEX GBD

### NEX Cosméticos (9 produtos)
Insumos para cuidados pessoais, capilares e corporais.
- NEX ACE, NEX MID DC 80/90, NEX BP
- NEX ACT, NEX LESS 27/70, NEX AMPHO CB
- NEX AG, NEX QUAT 1629/1650, NEX GBD

### NEX Pet (7 produtos)
Insumos para higiene e cuidado animal.
- NEX ACT, NEX MID DC 80/90, NEX BP
- NEX LESS 70, NEX QUAT 1629/1650, NEX AMPHO CB

---

## Requisitos Técnicos
- **Stack**: HTML5 + Tailwind CSS (CDN) + Vanilla JS
- **Bilíngue**: PT/EN com switcher no header
- **Responsivo**: Mobile-first (breakpoints: 640, 768, 1024, 1280px)
- **WhatsApp**: Botão flutuante fixo com pulse animation
- **SEO**: Meta tags, Open Graph, structured data
- **Performance**: Lazy loading de imagens, CSS crítico inline
- **Animações**: Intersection Observer para scroll reveals
- **Acessibilidade**: ARIA labels, contraste, navegação por teclado

## Elementos Visuais Únicos
1. **Blob Shapes**: clip-path orgânicos para imagens (inspirado nos PDFs)
2. **Molecular Dots**: Decorações circulares animadas (do logo)
3. **Gradient Lines**: Divisores com gradiente verde-teal
4. **Hover Cards**: Elevação + borda gradiente nos cards de produto
5. **Scroll Reveals**: Fade-in + slide-up em cascata
6. **Counter Animation**: Números animados na seção de stats
