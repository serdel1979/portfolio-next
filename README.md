# 🚀 Guía de Despliegue Estático - Next.js

## 📋 Pasos para Despliegue

### 1️⃣ Configurar next.config.js

Agrega la siguiente configuración en tu archivo `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // tus otras configuraciones...
}

module.exports = nextConfig


# Desarrollo
npm run dev

# Build para producción
npm run build

# Ver build localmente
npx serve out/