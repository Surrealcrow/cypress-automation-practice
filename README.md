# Proyecto de Automatización con Cypress

Este proyecto fue creado con el objetivo de practicar pruebas automatizadas end-to-end usando **Cypress**, una herramienta moderna y fácil de aprender para testers. Ideal para quienes están iniciando su carrera en QA.

---

## 📦 ¿Qué contiene este proyecto?

- Configuración base de Cypress
- Un ejemplo de prueba automatizada usando la página pública [SauceDemo](https://www.saucedemo.com/)
- Estructura lista para agregar más casos de prueba
- Compatible con Windows y Visual Studio Code

---

## 🛠 Requisitos para correr este proyecto

Antes de empezar, asegúrate de tener instalado:

- [Node.js (versión LTS)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## 🚀 Instalación paso a paso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU-USUARIO/cypress-automation-practice.git
   cd cypress-automation-practice
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Abrir Cypress**
   ```bash
   npx cypress open
   ```

4. Se abrirá el Test Runner. Haz clic en `example.cy.js` para ejecutar la prueba de ejemplo.

---

## 📁 Estructura de carpetas

```plaintext
cypress/
│
├── e2e/                   # Aquí van las pruebas
│   └── example.cy.js      # Prueba de ejemplo
│
└── support/               # Configuración general y hooks
    └── e2e.js
```

---

## 🧪 Prueba de ejemplo incluida

Archivo: `cypress/e2e/example.cy.js`

```javascript
describe('Página de prueba', () => {
  it('debería cargar correctamente', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[data-test="username"]').should('be.visible')
  })
})
```

---

## 📤 Subir el proyecto a GitHub (paso a paso completo)

### 1. Crear el repositorio en GitHub

- Ve a [https://github.com](https://github.com)
- Clic en `+` → **New repository**
- Ponle un nombre (`cypress-automation-practice`)
- ❌ No marques README, .gitignore ni licencia
- Crea el repositorio

### 2. Subir tu código local

```bash
git init
git add .
git commit -m "Primer commit - proyecto Cypress"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/cypress-automation-practice.git
git push -u origin main
```

> ⚠️ Si tu Git usa `master`, reemplaza `main` por `master` en los últimos dos comandos.

---

## 📌 ¿Qué sigue?

- Agregar más pruebas en `cypress/e2e/`
- Probar otras páginas de práctica (como formularios, logins, tiendas online ficticias)
- Documentar las pruebas con screenshots o videos
- Integrar Cypress con reportes visuales (Allure, Mochawesome)
- (Opcional) Hacer este mismo proyecto en Playwright para destacar habilidades avanzadas

---

## 🔗 Recursos útiles

- [Documentación oficial de Cypress](https://docs.cypress.io/)
- [Sitio de pruebas: SauceDemo](https://www.saucedemo.com/)
- [Lista de sitios públicos para practicar](https://github.com/shieldfy/API-Security-Checklist#use-public-dummy-sites-for-practice)

---

## 🧑‍💻 Créditos

Este proyecto fue creado como parte de una práctica de portafolio para testers en formación.
