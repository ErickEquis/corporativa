# Landing Page Corporativa - Angular 18

Una landing page corporativa profesional y elegante construida con Angular 18, diseñada para empresas establecidas que buscan proyectar confianza, experiencia y profesionalismo.

## 🏢 Características

### ✨ Diseño Corporativo Profesional
- Paleta de colores azul corporativo con detalles dorados
- Tipografía Inter para máxima legibilidad
- Diseño completamente responsive (móvil, tablet, escritorio)
- Animaciones sutiles y profesionales

### 📋 Componentes Incluidos

1. **Header / Hero**
   - Navbar fijo con scroll suave
   - Hero section con mensaje corporativo impactante
   - Call-to-actions estratégicos

2. **About (Nosotros)**
   - Historia y trayectoria de la empresa
   - Misión, visión y valores
   - Métricas clave destacadas

3. **Services (Servicios)**
   - 6 servicios profesionales detallados
   - Cards con hover effects elegantes
   - Iconos descriptivos

4. **Stats (Estadísticas)**
   - Sección con fondo degradado azul
   - 4 métricas corporativas destacadas
   - Diseño impactante y profesional

5. **Team (Equipo)**
   - Equipo directivo con avatars
   - Títulos y cargos profesionales
   - Enlaces a perfiles

6. **Partners (Aliados)**
   - Showcase de sectores atendidos
   - Grid responsive de partners

7. **Contact (Contacto)**
   - Formulario profesional completo
   - Información de contacto detallada
   - Validación integrada

8. **Footer**
   - Footer corporativo completo
   - Múltiples secciones organizadas
   - Certificaciones ISO
   - Enlaces legales

## 🚀 Tecnología

- **Angular 18** (última versión)
- **Standalone Components**
- **TypeScript 5.5**
- **SCSS** con variables CSS
- **Signals** de Angular
- **Responsive Design**

## 📦 Requisitos

- Node.js 20.19+
- npm 10+

## 🛠️ Instalación

1. Asegúrate de usar Node.js 20:
```bash
nvm use
```

2. Instala las dependencias:
```bash
npm install
```

## 🚀 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Navega a `http://localhost:4200/`

## 🏗️ Build

Para construir el proyecto para producción:

```bash
npm run build
```

## 🎨 Personalización

### Colores Corporativos

Edita `src/styles.scss` líneas 13-19:

```scss
:root {
  --primary-color: #003d82;      /* Azul corporativo principal */
  --primary-light: #0052ad;       /* Azul claro */
  --primary-dark: #002852;        /* Azul oscuro */
  --secondary-color: #d4af37;     /* Dorado elegante */
  --accent-color: #e8f4f8;        /* Azul muy claro */
}
```

### Contenido

#### Información de la empresa
- **Header/Hero**: `src/app/components/header/header.html`
- **About**: `src/app/components/about/about.html`

#### Servicios
Edita el array en `src/app/components/services/services.ts`:
```typescript
services: Service[] = [
  {
    id: 1,
    icon: '📊',
    title: 'Tu Servicio',
    description: 'Descripción detallada...'
  },
  // ...
];
```

#### Equipo Directivo
Edita el array en `src/app/components/team/team.ts`

#### Datos de Contacto
- Formulario: `src/app/components/contact/contact.html`
- Footer: `src/app/components/footer/footer.html`

## 🎯 Público Objetivo

Esta landing está diseñada específicamente para:

- ✅ Empresas consultoras
- ✅ Firmas de servicios profesionales
- ✅ Corporaciones establecidas
- ✅ Empresas B2B
- ✅ Consultorías estratégicas
- ✅ Firmas de auditoría
- ✅ Servicios corporativos

## 📱 Responsive

Breakpoints optimizados:
- 📱 Mobile: < 768px
- 💻 Tablet: 768px - 968px
- 🖥️ Desktop: > 968px

## 🎯 Características Corporativas

### Confianza y Credibilidad
- ✅ Badges de certificación (ISO 9001, ISO 27001)
- ✅ Años de experiencia destacados (desde 1990)
- ✅ Métricas de éxito (1000+ proyectos, 98% satisfacción)
- ✅ Testimonios de sectores importantes

### Profesionalismo
- ✅ Diseño elegante y sobrio
- ✅ Tipografía corporativa (Inter)
- ✅ Colores institucionales (azul y dorado)
- ✅ Fotografías profesionales sugeridas

### Call-to-Actions Estratégicos
- ✅ "Solicitar consultoría gratuita"
- ✅ "Agendar reunión"
- ✅ Formulario de contacto detallado

## 📄 Estructura

```
landing-corporativa/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/       # Navbar + Hero
│   │   │   ├── about/        # Nosotros
│   │   │   ├── services/     # Servicios
│   │   │   ├── stats/        # Estadísticas
│   │   │   ├── team/         # Equipo directivo
│   │   │   ├── partners/     # Aliados
│   │   │   ├── contact/      # Contacto
│   │   │   └── footer/       # Footer
│   │   ├── app.ts
│   │   └── app.html
│   ├── styles.scss           # Estilos globales
│   └── index.html
├── .nvmrc                    # Node.js 20
├── package.json
└── README.md
```

## 📧 Soporte

Para preguntas o soporte, contacta al equipo de desarrollo.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

**Desarrollado con ❤️ usando Angular 18**
*Landing Corporativa Profesional*

