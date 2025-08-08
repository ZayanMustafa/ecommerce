# 🌱 EcoGadget - Sustainable E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-blue)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB)](https://reactjs.org/)

A modern e-commerce platform specializing in eco-friendly smart home gadgets, built with Next.js and Tailwind CSS.

![EcoGadget Screenshot](https://via.placeholder.com/800x500/2DD4BF/FFFFFF?text=EcoGadget+Screenshot)

## 🚀 Live Demo
[View Live Demo](https://ecogadget-demo.vercel.app) (if deployed)

## ✨ Features

### 🛍️ Core Functionality
- **Product Catalog** with filtering
- **Shopping Cart** with persistent storage
- **Checkout Process** (3-step flow)
- **Order Management** (Admin)
- **User Authentication**

### 🛠️ Technical Highlights
- Next.js App Router
- Tailwind CSS with custom theme
- Framer Motion animations
- Responsive design (mobile-first)
- Zustand state management
- Form validation

## 📦 Project Structure
src/
├── app/
│ ├── (public)/
│ │ ├── cart/
│ │ ├── checkout/
│ │ ├── products/
│ │ └── ...
│ ├── (auth)/
│ ├── (admin)/
│ ├── layout.js
│ └── ...
├── components/
│ ├── ui/ (Button, Input, Card, etc.)
│ ├── sections/ (Hero, ProductGrid, etc.)
│ └── ...
├── context/ (State management)
├── styles/
└── public/


## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ZayanMustafa/ecommerce.git
cd ecommerce

npm install
# or
yarn install

cp .env.example .env.local

npm run dev
# or
yarn dev

