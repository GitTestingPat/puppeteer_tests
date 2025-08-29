# Proyecto de Automatización con Puppeteer

## Descripción

Este es un proyecto de automatización web utilizando Puppeteer, una biblioteca de Node.js que proporciona una API de alto nivel para controlar navegadores Chrome o Chromium mediante el protocolo DevTools.

## Características

- Automatización de navegadores web
- Captura de pantallas
- Generación de PDFs
- Scraping de contenido web
- Pruebas automatizadas de interfaz de usuario
- Navegación programática

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Sistema operativo: Windows, macOS, o Linux

## Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd proyecto-puppeteer-automation
```

### 2. Instalar dependencias

```bash
npm install
```

O si prefieres usar yarn:

```bash
yarn install
```

### 3. Instalar Puppeteer

```bash
npm install puppeteer
```

Puppeteer descargará automáticamente una versión compatible de Chromium durante la instalación.

## Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Configuración del navegador
HEADLESS=true
VIEWPORT_WIDTH=1920
VIEWPORT_HEIGHT=1080

# URLs de prueba
BASE_URL=https://example.com

# Configuración de timeouts (en milisegundos)
DEFAULT_TIMEOUT=30000
NAVIGATION_TIMEOUT=60000
```

### Estructura del Proyecto

```
proyecto-puppeteer-automation/
├── src/
│   ├── scripts/          # Scripts de automatización
│   ├── utils/           # Utilidades y helpers
│   └── config/          # Archivos de configuración
├── tests/               # Tests automatizados
├── screenshots/         # Capturas de pantalla generadas
├── reports/            # Reportes y PDFs generados
├── .env                # Variables de entorno
├── package.json
└── README.md
```

## Uso

### Comandos Disponibles

```bash
# Ejecutar scripts de automatización
npm start

# Ejecutar un script específico
npm run script:nombre-del-script

# Ejecutar tests
npm test

# Ejecutar en modo desarrollo (con logs detallados)
npm run dev

# Limpiar archivos generados
npm run clean
```

### Ejemplo Básico

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // Lanzar navegador
  const browser = await puppeteer.launch({
    headless: false, // Cambiar a true para modo sin interfaz
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });

  // Crear nueva página
  const page = await browser.newPage();

  // Navegar a una URL
  await page.goto('https://example.com');

  // Tomar captura de pantalla
  await page.screenshot({ path: 'screenshots/example.png' });

  // Cerrar navegador
  await browser.close();
})();
```

## Scripts de Package.json

Asegúrate de tener estos scripts en tu `package.json`:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest",
    "clean": "rimraf screenshots/* reports/*"
  }
}
```

## Dependencias Principales

```json
{
  "dependencies": {
    "puppeteer": "^21.0.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "jest": "^29.0.0",
    "rimraf": "^5.0.0"
  }
}
```

## Configuración Avanzada

### Opciones de Lanzamiento del Navegador

```javascript
const browser = await puppeteer.launch({
  headless: true,              // Ejecutar sin interfaz gráfica
  slowMo: 250,                 // Ralentizar acciones (ms)
  devtools: false,             // Abrir DevTools
  defaultViewport: {
    width: 1920,
    height: 1080
  },
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage'
  ]
});
```

### Configuración para Servidores

Para ejecutar en servidores Linux sin interfaz gráfica:

```javascript
const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--window-size=1920,1080'
  ]
});
```

## Solución de Problemas

### Problemas Comunes

1. **Error: No se puede encontrar Chromium**
   ```bash
   npm install puppeteer --force
   ```

2. **Problemas de permisos en Linux**
   ```bash
   sudo apt-get install -y libxss1 libgconf-2-4 libxtst6 libxrandr2 libasound2 libpangocairo-1.0-0 libatk1.0-0 libcairo-gobject2 libgtk-3-0 libgdk-pixbuf2.0-0
   ```

3. **Timeouts en navegación**
   - Aumentar el timeout: `page.setDefaultTimeout(60000)`
   - Esperar elementos específicos: `await page.waitForSelector('selector')`

### Logs y Debugging

```javascript
// Habilitar logs de Puppeteer
const page = await browser.newPage();
page.on('console', msg => console.log('PAGE LOG:', msg.text()));
page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
```

## Contribuir

1. Fork el proyecto
2. Crea tu rama de features (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## Recursos Adicionales

- [Documentación oficial de Puppeteer](https://pptr.dev/)
- [Puppeteer API Reference](https://pptr.dev/api)
- [Ejemplos de Puppeteer](https://github.com/puppeteer/puppeteer/tree/main/examples)
- [Mejores prácticas](https://pptr.dev/guides)

## Autor

Tu Nombre - [@tu_usuario](https://github.com/tu_usuario)

## Estado del Proyecto

🚧 **En Desarrollo** - Este proyecto está actualmente en desarrollo inicial.