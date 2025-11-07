# Configuración de la Página de Banquetes

## Funcionalidades Implementadas

### 1. Hero Slider Premium
- Slider automático con 5 imágenes
- Navegación con flechas y dots
- Transiciones suaves con animaciones
- Texto overlay elegante con tipografía Playball

### 2. Navbar Sticky
- Navbar personalizado que aparece debajo del hero
- Scroll suave a secciones con IDs
- Botón de contacto destacado
- Logo clickeable para volver al home

### 3. Sección About
- Layout de 2 columnas con imagen y texto
- Estadísticas del negocio
- Decoraciones doradas con efectos

### 4. Servicios
- 6 servicios con iconos de react-icons
- Cards con hover effects premium
- Grid responsive

### 5. Galería con Lightbox
- 12 imágenes en grid responsive
- Lightbox modal al hacer click
- Iconos de react-icons (search y close)
- Efecto hover con zoom

### 6. Menú
- Contenido real del PDF del menú
- Highlights con iconos de react-icons
- Categorías: Entradas, Platos Fuertes, Guarniciones

### 7. Formulario de Contacto Funcional
- Validación completa de campos
- Formato automático de teléfonos mexicanos (XXX) XXX-XXXX
- Validación de 10 dígitos
- Validación de fecha futura
- Integración con Resend para envío de emails
- Estados de éxito y error
- Diseño premium con iconos de react-icons

## Configuración de Resend

### Paso 1: Crear cuenta en Resend
1. Ve a https://resend.com
2. Crea una cuenta o inicia sesión
3. Ve a API Keys en el dashboard

### Paso 2: Obtener API Key
1. Click en "Create API Key"
2. Dale un nombre (ej: "Chef At Home Production")
3. Copia la API key generada

### Paso 3: Configurar variables de entorno
1. Crea un archivo `.env` en la raíz del proyecto:
```bash
cp .env.example .env
```

2. Edita `.env` y agrega tu API key:
```
RESEND_API_KEY=re_tu_api_key_aqui
```

### Paso 4: Verificar dominio (Opcional pero recomendado)
1. En Resend, ve a "Domains"
2. Agrega tu dominio (chefathome.com)
3. Configura los registros DNS como te indica Resend
4. Una vez verificado, actualiza el email en `api/send-email.js`:
```javascript
from: 'Chef At Home Banquetes <banquetes@chefathome.com>'
```

### Paso 5: Actualizar email de destino
En `api/send-email.js`, línea 20, cambia el email de destino:
```javascript
to: ['tu-email-real@ejemplo.com']
```

## Deployment

### Opción 1: Vercel (Recomendado)
1. Sube tu proyecto a GitHub
2. Importa en Vercel
3. Agrega la variable de entorno `RESEND_API_KEY` en Settings > Environment Variables
4. Deploy!

### Opción 2: Netlify
1. Netlify detectará automáticamente las funciones en `/api`
2. Agrega `RESEND_API_KEY` en Site settings > Environment variables
3. Deploy!

## Testing Local

Para probar el formulario localmente, necesitas un servidor que soporte funciones serverless.

Con Vercel CLI:
```bash
pnpm install -g vercel
vercel dev
```

## Estructura de Archivos

```
src/
├── components/
│   ├── BanquetesHero.jsx       # Hero slider
│   ├── BanquetesNavbar.jsx     # Navbar sticky
│   ├── BanquetesAbout.jsx      # Sección sobre nosotros
│   ├── BanquetesServices.jsx   # Servicios
│   ├── BanquetesGallery.jsx    # Galería con lightbox
│   ├── BanquetesMenu.jsx       # Menú
│   └── BanquetesContact.jsx    # Formulario de contacto
├── pages/
│   └── Banquetes.jsx           # Página principal
└── App.jsx                     # Router con navbar condicional

api/
└── send-email.js               # Función serverless para Resend
```

## Personalización

### Cambiar imágenes del slider
Edita `src/components/BanquetesHero.jsx`, líneas 7-31

### Cambiar textos del menú
Edita `src/components/BanquetesMenu.jsx`, líneas 4-32

### Cambiar servicios
Edita `src/components/BanquetesServices.jsx`, líneas 8-38

### Cambiar imágenes de la galería
Edita `src/components/BanquetesGallery.jsx`, líneas 8-20

## Iconos Usados (react-icons)

- **Servicios**: GiAmpleDress, MdCelebration, MdBusinessCenter, MdRestaurantMenu, BiCoffee, FaGlassCheers
- **Menú**: IoCheckmarkCircle
- **Contacto**: MdEmail, MdPhone, MdAccessTime
- **Galería**: IoSearchSharp, IoClose

## Notas Importantes

1. El navbar principal de Home se oculta automáticamente en /banquetes
2. El navbar de banquetes es sticky y solo aparece después del hero
3. Todos los emojis fueron reemplazados por iconos profesionales
4. El formulario valida teléfonos mexicanos (10 dígitos)
5. Las fechas del evento deben ser futuras
6. El formulario solo funciona con Resend configurado

## Soporte

Si tienes problemas con Resend:
- Verifica que tu API key sea correcta
- Revisa los logs en Resend dashboard
- Asegúrate de que el dominio esté verificado para emails en producción
