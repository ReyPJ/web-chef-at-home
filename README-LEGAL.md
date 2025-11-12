# 📋 Documentación Legal - Chef At Home

## 📍 Página de Política de Privacidad y Términos

Esta documentación explica cómo implementar y mantener la página de Política de Privacidad y Términos y Condiciones para Chef At Home, necesaria para cumplir con los requisitos de Meta/Facebook para WhatsApp Business API.

---

## 🎯 Archivos Creados

### 1. **Componente Principal**
```
src/pages/PrivacidadTerminos.jsx
```
- Página React con sistema de tabs
- Política de Privacidad completa
- Términos y Condiciones completos
- Diseño responsive mobile-first
- Navegación sticky para mejor UX

### 2. **Rutas Actualizadas**
```
src/App.jsx
```
- Agregada ruta: `/privacidad-terminos`
- Configuración para ocultar navbar y footer en la página legal

### 3. **Footer Actualizado**
```
src/components/Footer.jsx
```
- Link agregado: "Privacidad y Términos"
- Accesible desde todas las páginas del sitio

---

## 🌐 URLs de Acceso

### URL Local (Desarrollo)
```
http://localhost:5173/privacidad-terminos
```

### URL Producción
```
https://chef-at-home.com.mx/privacidad-terminos
```

**Esta es la URL que debes proporcionar a Meta/Facebook** para la aprobación de tu WhatsApp Business App.

---

## 🚀 Cómo Publicar en Producción

### Opción 1: Despliegue en Vercel (Recomendado)

1. **Asegúrate de que el código esté pusheado al repositorio:**
   ```bash
   git add .
   git commit -m "Add privacy policy and terms page"
   git push origin main
   ```

2. **Vercel detectará automáticamente los cambios** y desplegará la nueva versión.

3. **Verifica que funcione:**
   ```
   https://chef-at-home.com.mx/privacidad-terminos
   ```

### Opción 2: Build Manual

Si necesitas hacer el build manualmente:

```bash
# Instalar dependencias
pnpm install

# Crear build de producción
pnpm build

# Los archivos estarán en la carpeta 'dist/'
```

---

## 🔗 Configurar en Meta/Facebook

### Paso 1: Acceder al Facebook App Dashboard
1. Ve a https://developers.facebook.com/apps
2. Selecciona tu aplicación de WhatsApp Business
3. Ve a **WhatsApp > Getting Started** o **App Settings**

### Paso 2: Agregar URL de Política de Privacidad
1. Busca el campo **"Privacy Policy URL"**
2. Ingresa: `https://chef-at-home.com.mx/privacidad-terminos`
3. Guarda los cambios

### Paso 3: Agregar URL de Términos de Servicio (opcional)
1. Busca el campo **"Terms of Service URL"**
2. Puedes usar la misma URL: `https://chef-at-home.com.mx/privacidad-terminos`
   - Los usuarios pueden cambiar entre tabs para ver términos o privacidad
3. Guarda los cambios

### Paso 4: Verificar
Meta/Facebook verificará que:
- ✅ La URL esté públicamente accesible
- ✅ El contenido sea relevante para el servicio
- ✅ La página cargue correctamente
- ✅ No requiera autenticación

---

## 📝 Información Personalizable

Antes de publicar en producción, revisa y personaliza estos datos:

### Contacto de Privacidad
```jsx
privacidad@chef-at-home.com.mx
```
**Acción requerida:** Asegúrate de crear este email o cambiar por uno existente.

### Número de WhatsApp
En `PrivacidadTerminos.jsx`, busca:
```jsx
WhatsApp: +52 [número del bot]
```
**Acción requerida:** Reemplaza con tu número real de WhatsApp Business.

### Fechas de Vigencia
Actualiza las fechas en la sección "Hero Section":
```jsx
<p><strong>Última actualización:</strong> Enero 2025</p>
<p><strong>Efectiva desde:</strong> Enero 2025</p>
```

### Restaurantes Participantes
Si cambias el número de restaurantes, actualiza:
```jsx
"Menús de 5 restaurantes participantes"
```

---

## 🎨 Personalización de Diseño

### Colores
El diseño usa la variable CSS `gold` definida en tu tema. Si quieres cambiar colores:

```jsx
// Buscar y reemplazar en PrivacidadTerminos.jsx:
className="text-gold"           // Color dorado principal
className="bg-gold/10"          // Fondos con opacidad
className="border-gold/30"      // Bordes con opacidad
```

### Fuentes
Usa las mismas fuentes del sitio:
- `font-playball` - Títulos elegantes
- `font-lora` - Texto general

### Responsive
Los breakpoints son:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px

---

## ✅ Checklist de Implementación

### Antes de Publicar:
- [ ] Revisar toda la información de contacto
- [ ] Actualizar fechas de vigencia
- [ ] Verificar número de WhatsApp correcto
- [ ] Crear email `privacidad@chef-at-home.com.mx`
- [ ] Probar en móvil y desktop
- [ ] Verificar todos los links internos
- [ ] Hacer build de producción
- [ ] Publicar en servidor

### Configuración de Meta/Facebook:
- [ ] Agregar URL de Privacy Policy en Facebook App
- [ ] Agregar URL de Terms of Service (opcional)
- [ ] Verificar que la URL sea accesible públicamente
- [ ] Esperar aprobación de Meta (puede tardar 1-3 días)

### Testing:
- [ ] Probar navegación entre tabs
- [ ] Verificar scroll suave a secciones
- [ ] Probar botón "Volver al inicio"
- [ ] Verificar responsive en móvil
- [ ] Probar todos los enlaces de contacto

---

## 🔄 Mantenimiento Futuro

### Cuándo Actualizar la Política

Debes actualizar la Política de Privacidad cuando:
- ✓ Cambies qué datos recopilas
- ✓ Cambies cómo usas los datos
- ✓ Agregues nuevos terceros con quien compartes datos
- ✓ Cambies los métodos de retención de datos
- ✓ Cambies información de contacto
- ✓ Haya cambios en leyes mexicanas de privacidad

### Cómo Actualizar

1. **Edita el archivo:**
   ```
   src/pages/PrivacidadTerminos.jsx
   ```

2. **Actualiza la fecha:**
   ```jsx
   <p><strong>Última actualización:</strong> [Nueva Fecha]</p>
   ```

3. **Notifica a usuarios activos:**
   - Envía mensaje por WhatsApp sobre cambios importantes
   - Publica aviso en el sitio web

4. **Vuelve a publicar:**
   ```bash
   git add src/pages/PrivacidadTerminos.jsx
   git commit -m "Update privacy policy - [descripción del cambio]"
   git push origin main
   ```

---

## 📧 Gestión de Solicitudes ARCO

Los usuarios tienen derecho a ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición).

### Proceso Recomendado:

1. **Recibir solicitud** en `privacidad@chef-at-home.com.mx`

2. **Verificar identidad del solicitante:**
   - Pedir número de WhatsApp registrado
   - Solicitar identificación oficial

3. **Procesar en máximo 20 días hábiles:**
   - **Acceso:** Enviar copia de datos en formato PDF/JSON
   - **Rectificación:** Actualizar datos incorrectos
   - **Cancelación:** Eliminar cuenta y datos
   - **Oposición:** Dejar de usar datos para fines específicos

4. **Confirmar al usuario** vía email

5. **Registrar la solicitud** en un log interno

---

## 🔒 Cumplimiento Legal

### Leyes Mexicanas Aplicables:

1. **LFPDPPP** - Ley Federal de Protección de Datos Personales en Posesión de los Particulares
2. **Reglamento de la LFPDPPP**
3. **Lineamientos del INAI**

### Organismos Reguladores:

- **INAI** - Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales
- Sitio: https://home.inai.org.mx
- Los usuarios pueden presentar quejas ante el INAI si consideran vulnerados sus derechos

### Requisitos de Meta/Facebook:

- ✅ URL pública y accesible sin login
- ✅ Contenido específico al servicio (no genérico)
- ✅ Mención de uso de WhatsApp Business
- ✅ Clara explicación de qué datos se recopilan
- ✅ Explicación de con quién se comparten datos
- ✅ Información de contacto válida

---

## 🛠️ Troubleshooting

### La página no carga
```bash
# Verificar que el archivo exista
ls src/pages/PrivacidadTerminos.jsx

# Verificar que la ruta esté registrada
cat src/App.jsx | grep privacidad-terminos

# Limpiar cache y rebuild
rm -rf dist/ node_modules/.vite
pnpm install
pnpm dev
```

### Los estilos no se ven bien
```bash
# Verificar que Tailwind esté funcionando
cat tailwind.config.js

# El archivo debe incluir:
content: ["./src/**/*.{js,jsx}"]
```

### Link en Footer no funciona
```bash
# Verificar import de Link en Footer.jsx
cat src/components/Footer.jsx | grep "react-router-dom"

# Debe tener: import { Link } from "react-router-dom"
```

### Meta rechaza la URL

Verificar:
- [ ] ¿La URL está en HTTPS? (no HTTP)
- [ ] ¿La página carga sin errores 404/500?
- [ ] ¿El contenido es visible sin JavaScript? (React requiere JS, pero Meta puede verificarlo)
- [ ] ¿No hay bloqueos de robots.txt?

---

## 📱 Cómo Vincular desde el Bot de WhatsApp

Si quieres que el bot envíe el link de privacidad:

```javascript
// En tu código del bot de WhatsApp:
const privacyLink = "https://chef-at-home.com.mx/privacidad-terminos";

// Mensaje automático al usuario nuevo:
await sendMessage(userPhone,
  `Bienvenido a Chef At Home! 🍽️\n\n` +
  `Al usar nuestro servicio, aceptas nuestra Política de Privacidad:\n` +
  `${privacyLink}`
);
```

---

## 📞 Soporte

Si tienes preguntas sobre la implementación:

- **Documentación React Router:** https://reactrouter.com
- **Documentación Tailwind CSS:** https://tailwindcss.com
- **Guía de Privacy Policy de Meta:** https://developers.facebook.com/docs/whatsapp/overview/business-policy

---

## 📄 Licencia

Esta página legal ha sido creada específicamente para Chef At Home y debe ser adaptada según las necesidades reales del negocio. Consulta con un abogado especializado en derecho digital y protección de datos para verificar el cumplimiento completo con las leyes mexicanas.

---

**Última actualización de este README:** Enero 2025
**Versión:** 1.0.0

¡Éxito con tu aplicación de WhatsApp Business! 🚀
