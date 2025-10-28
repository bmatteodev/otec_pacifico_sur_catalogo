# OTEC Pacífico Sur - Catálogo de Capacitaciones

Sitio web del catálogo de cursos para OTEC Pacífico Sur, un centro de capacitación profesional certificado bajo la NCh 2728 por CERTHIA y acreditado por SENCE.

🌐 **[Ver sitio en vivo](https://otec-pacifico-sur-catalogo-ffhnq3zk3-bastian-matteos-projects.vercel.app)**

![OTEC Pacífico Sur](https://img.shields.io/badge/OTEC-Pac%C3%ADfico%20Sur-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?logo=vite)

## 🎯 Características

- **Búsqueda inteligente**: Sistema de búsqueda que ignora acentos y mayúsculas
- **Filtros avanzados**: Filtra cursos por categoría y modalidad
- **Diseño responsive**: Optimizado para desktop, tablet y móvil
- **Animaciones fluidas**: Transiciones suaves con Framer Motion
- **Modal de detalles**: Información completa de cada curso
- **Integración WhatsApp**: Contacto directo con botón flotante
- **Diseño profesional**: Colores corporativos y marca de agua con logo

## 🚀 Tecnologías

- **React 18** - Framework de JavaScript
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos modernos

## 📋 Requisitos previos

- Node.js 18 o superior
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/otec-pacifico-sur.git
cd otec-pacifico-sur
```

2. Instala las dependencias:
```bash
npm install
```

3. Coloca el logo de la OTEC:
```bash
# Copia tu logo en la carpeta public/
cp /ruta/a/tu/logo.png public/logo.png
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 📁 Estructura del proyecto

```
otec-pacifico-sur/
├── public/
│   ├── logo.png              # Logo de la OTEC
│   └── temarios/             # PDFs de temarios de cursos
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Cabecera con logo
│   │   ├── Hero.jsx          # Sección hero con estadísticas
│   │   ├── Filters.jsx       # Búsqueda y filtros
│   │   ├── CourseCard.jsx    # Tarjeta de curso
│   │   ├── CourseGrid.jsx    # Grid de cursos
│   │   ├── CourseModal.jsx   # Modal con detalles
│   │   ├── FloatingWhatsApp.jsx  # Botón flotante de WhatsApp
│   │   ├── WhatsAppIcon.jsx  # Icono de WhatsApp
│   │   └── Footer.jsx        # Pie de página
│   ├── data/
│   │   └── courses.json      # Base de datos de cursos
│   ├── utils/
│   │   └── searchUtils.js    # Utilidades de búsqueda
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 📚 Gestión de cursos

Los cursos se gestionan a través del archivo `src/data/courses.json`. Para agregar un nuevo curso:

```json
{
  "id": 5,
  "name": "Nombre del Curso",
  "category": "Sector Industrial",
  "duration": 40,
  "modality": "Presencial",
  "description": "Descripción breve del curso",
  "codigoSence": "1237856405",
  "temarioUrl": "/temarios/nombre-curso.pdf"
}
```

### Categorías disponibles:
- Sector Industrial
- Sector Minero

### Modalidades disponibles:
- Presencial
- Semi presencial
- E-learning asincrónico
- E-learning sincrónico con relator

## 🎨 Personalización

### Colores corporativos

Los colores se definen en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#1E40AF',  // Azul principal
    light: '#3B82F6',    // Azul claro
  },
  secondary: {
    DEFAULT: '#F97316',  // Naranjo principal
    light: '#FB923C',    // Naranjo claro
  }
}
```

### Número de WhatsApp

Para cambiar el número de contacto, actualiza en:
- `src/components/FloatingWhatsApp.jsx`
- `src/components/CourseModal.jsx`

Busca `56975135223` y reemplázalo por tu número.

## 📦 Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🚀 Deployment

### Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build el proyecto:
```bash
npm run build
```

2. Arrastra la carpeta `dist/` a [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

1. Instala gh-pages:
```bash
npm install -D gh-pages
```

2. Agrega al `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📞 Contacto

**OTEC Pacífico Sur**
- Teléfono: +56 9 7513 5223
- Email: contacto@otecpacificosur.cl
- Ubicación: Quintero, Valparaíso, Chile

## 📄 Certificaciones

- ✅ Certificados bajo la **NCh 2728** por **CERTHIA**
- ✅ Acreditados por **SENCE**

## 📝 Licencia

Este proyecto es propiedad de OTEC Pacífico Sur.

## 🤝 Contribuciones

Para sugerencias o mejoras, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ para OTEC Pacífico Sur