# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Serafim Company — landing page institucional para agência de estratégia digital e IA voltada a e-commerce. Desenvolvida com Next.js 15, Tailwind CSS e Framer Motion.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion + Lenis (smooth scroll)
- **Fontes:** Space Grotesk + Inter (Google Fonts)
- **Linguagem:** TypeScript

## Estrutura

```
app/
├── layout.tsx        # Root layout com metadados e providers
├── page.tsx          # Página principal (seções em ordem)
└── globals.css       # Estilos globais

components/
├── sections/         # Seções da página (Nav, Hero, About, Services...)
├── motion/           # Componentes de animação (CustomCursor...)
└── providers/        # Providers globais (LenisProvider)

lib/
└── motion-presets.ts # Presets de animação reutilizáveis

public/               # Assets estáticos
hooks/                # React hooks customizados
```

## Git Workflow

1. Criar branch: `git checkout -b feat/...` ou `fix/...`
2. Commit e push: `git push -u origin <branch>`
3. Abrir PR para `main`
