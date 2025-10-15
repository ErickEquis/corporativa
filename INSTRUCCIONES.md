# 🏢 Instrucciones - Landing Page Corporativa

## ✅ Proyecto Creado

Se ha generado una **landing page corporativa profesional** con Angular 18, ideal para:
- Empresas de consultoría
- Servicios profesionales B2B
- Firmas corporativas establecidas
- Consultorías estratégicas

## 🎨 Características del Diseño

### Tema Corporativo
- **Colores**: Azul profesional (#003d82) + Dorado elegante (#d4af37)
- **Tipografía**: Inter (corporativa y legible)
- **Estilo**: Formal, confiable, profesional

### Componentes Incluidos (8 secciones):

1. **📄 Header/Hero** - Navbar fijo + mensaje principal corporativo
2. **🏢 About** - Historia, misión, visión, valores (30+ años)
3. **💼 Services** - 6 servicios empresariales detallados
4. **📊 Stats** - Métricas clave (1000+ proyectos, 98% satisfacción)
5. **👔 Team** - Equipo directivo profesional
6. **🤝 Partners** - Aliados y sectores atendidos
7. **📧 Contact** - Formulario profesional completo
8. **⚖️ Footer** - Footer corporativo con certificaciones ISO

## 🚀 Cómo Iniciar

### Paso 1: Entrar al directorio
```bash
cd landing-corporativa
```

### Paso 2: Instalar dependencias
```bash
npm install
```

### Paso 3: Iniciar servidor
```bash
npm start
```

### Paso 4: Abrir navegador
```
http://localhost:4200
```

## ⚙️ Personalización Rápida

### 🎨 Cambiar colores corporativos
Archivo: `src/styles.scss`
```scss
:root {
  --primary-color: #003d82;      /* Tu azul corporativo */
  --secondary-color: #d4af37;     /* Tu color de acento */
}
```

### 🏢 Cambiar nombre de la empresa
Buscar y reemplazar "CORPORACIÓN" y "Corporación Empresarial" en:
- `src/app/components/header/header.html`
- `src/app/components/footer/footer.html`
- `src/index.html` (título y meta tags)

### 💼 Modificar servicios
Archivo: `src/app/components/services/services.ts`
```typescript
services: Service[] = [
  {
    id: 1,
    icon: '📊',
    title: 'Tu Servicio',
    description: 'Descripción...'
  },
  // ... agregar o modificar
];
```

### 👔 Actualizar equipo directivo
Archivo: `src/app/components/team/team.ts`
```typescript
teamMembers: TeamMember[] = [
  {
    name: 'Dr. Nombre Apellido',
    position: 'Director General',
    initials: 'NA',
    color: '#003d82'
  },
  // ... agregar más miembros
];
```

### 📧 Cambiar datos de contacto
Archivos:
- `src/app/components/contact/contact.html`
- `src/app/components/footer/footer.html`

Buscar y reemplazar:
- Email: `contacto@corporacion.com.mx`
- Teléfono: `+52 (55) 1234-5678`
- Dirección: `Av. Reforma 2654, CDMX`

## 🎯 Diferencias vs Landing Anterior

| Aspecto | Landing Genérica | Landing Corporativa |
|---------|------------------|---------------------|
| **Público** | Startups, SaaS | Empresas establecidas |
| **Tono** | Moderno, dinámico | Formal, profesional |
| **Colores** | Gradientes vibrantes | Azul corporativo + dorado |
| **Contenido** | Innovación, agilidad | Experiencia, confianza |
| **Secciones** | Features, testimonios | Servicios, equipo directivo |
| **CTA** | "Comenzar ahora" | "Solicitar consultoría" |

## 📋 Elementos Corporativos Clave

✅ **Credibilidad**
- "Desde 1990" (trayectoria)
- "1000+ proyectos completados"
- "98% satisfacción del cliente"
- Badges de certificación ISO

✅ **Profesionalismo**
- Equipo directivo con títulos (Dr., Lic., Ing., Mtra.)
- Formulario de contacto detallado
- Sección de aliados estratégicos
- Footer con información legal completa

✅ **Confianza**
- Lenguaje formal y profesional
- Servicios detallados y específicos
- Información de contacto completa
- Horarios de atención

## 💡 Próximos Pasos Recomendados

1. ✅ **Personalizar contenido** con tu información real
2. ✅ **Agregar imágenes** profesionales del equipo
3. ✅ **Actualizar logos** de partners reales
4. ✅ **Configurar formulario** para enviar a tu email/CRM
5. ✅ **Optimizar SEO** (meta tags, títulos)
6. ✅ **Agregar Google Analytics**
7. ✅ **Configurar dominio** corporativo

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Ejecutar tests |

## 🎨 Paleta de Colores

```
Azul Corporativo Principal: #003d82
Azul Claro:                 #0052ad
Azul Oscuro:                #002852
Dorado Elegante:            #d4af37
Azul Muy Claro (Accent):    #e8f4f8
```

## 📱 Responsive Design

- ✅ Mobile First
- ✅ Tablet optimizado
- ✅ Desktop completo
- ✅ Menú hamburguesa en móvil
- ✅ Grids adaptativos

---

**¿Necesitas ayuda?**
Revisa el archivo `README.md` para documentación completa.

**¡Tu landing corporativa está lista! 🎉**

