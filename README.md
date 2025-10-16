# Automation Project with Puppeteer

## Description

This is a web automation project using Puppeteer, a Node.js library that provides a high-level API for controlling Chrome or Chromium browsers using the DevTools protocol.

## Features

- Web browser automation
- Screen capture
- PDF generation
- Web content scraping
- Automated user interface testing
- Programmatic navigation

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Operating system: Windows, macOS, or Linux

## Installation

### 1. Clone the repository

```bash
git clone <url-del-repositorio>
cd puppeteer_tests
```

### 2. Install dependencies

```bash
npm install
```

Or if you prefer to use yarn:

```bash
yarn install
```

### 3. Install Puppeteer

```bash
npm install puppeteer
```

Puppeteer descargará automáticamente una versión compatible de Chromium durante la instalación.

## Configuration

### Environment Variables

Create a file `.env` at the root of the project with the following variables:

```env
# Browser settings
HEADLESS=true
VIEWPORT_WIDTH=1920
VIEWPORT_HEIGHT=1080

# Test URLs
BASE_URL=https://example.com

# Timeout settings (in milliseconds)
DEFAULT_TIMEOUT=30000
NAVIGATION_TIMEOUT=60000
```

### Project Structure

```
proyecto-puppeteer-automation/
├── src/
│   ├── scripts/         # Automation scripts
│   ├── utils/           # Utilities and helpers
│   └── config/          # Configuration files
├── tests/               # Automated tests
├── screenshots/         # Screenshots generated
├── reports/             # Reports and PDFs generated
├── .env                 # Environment variables
├── package.json
└── README.md
```

## Usage

### Available Commands

```bash
# Run automation scripts
npm start

# Run a specific script
npm run script:nombre-del-script

# Run tests
npm test

# Run in development mode (with detailed logs)
npm run dev

# Clean generated files
npm run clean
```

### Basic Example

```javascript
const puppeteer = require('puppeteer');

(async () => {
  // Launch browser
  const browser = await puppeteer.launch({
    headless: false, // Change to true for non-interface mode
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });

  // Create new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'screenshots/example.png' });

  // Close browser
  await browser.close();
})();
```

## Package.json scripts

Be sure you have these scripts in your `package.json`:

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

## Main Departments

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

## Advanced Settings

### Browser Launch Options

```javascript
const browser = await puppeteer.launch({
  headless: true,              // Run without graphical interface
  slowMo: 250,                 // Slow down actions (ms)
  devtools: false,             // Open DevTools
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

### Configuration for Servers

To run on Linux servers without a graphical interface:

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

## Troubleshooting

### Common Problems

1. **Error: Chromium cannot be found**
   ```bash
   npm install puppeteer --force
   ```

2. **Permission issues in Linux**
   ```bash
   sudo apt-get install -y libxss1 libgconf-2-4 libxtst6 libxrandr2 libasound2 libpangocairo-1.0-0 libatk1.0-0 libcairo-gobject2 libgtk-3-0 libgdk-pixbuf2.0-0
   ```

3. **Timeouts in navigation**
   - Increase timeout: `page.setDefaultTimeout(60000)`
   - Wait for specific elements: `await page.waitForSelector('selector')`

### Logs and Debugging

```javascript
// Enable Puppeteer logs
const page = await browser.newPage();
page.on('console', msg => console.log('PAGE LOG:', msg.text()));
page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
```

## Contribute

1. Fork the project
2. Create your feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit your changes (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push to branch (`git push origin feature/nueva-funcionalidad`)
5. Create a Pull Request

## Licencia

This project is licensed under the MIT License - see the file [LICENSE.md](LICENSE.md) for details.

## Additional Resources

- [Official Puppeteer documentation](https://pptr.dev/)
- [Puppeteer API Reference](https://pptr.dev/api)
- [Puppeteer examples](https://github.com/puppeteer/puppeteer/tree/main/examples)
- [Best practices](https://pptr.dev/guides)

## Author

GitTestingPat

## Project Status

🚧 **Under Development** - This project is currently in early development.