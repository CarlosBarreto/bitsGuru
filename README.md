# El Gurú de Bits

Un oráculo digital y místico que ofrece sabiduría para la era de la información, combinando el simbolismo del tarot con el poder de la inteligencia artificial.

---

## 🔮 Sobre el Proyecto

**El Gurú de Bits** es un sitio web interactivo que simula una tirada de tarot cibernético. El usuario recibe una tirada de cartas con nombres y descripciones temáticas, formula una pregunta, y recibe a cambio una respuesta enigmática y metafórica generada por una IA (Google Gemini) que actúa como un oráculo digital.

Este proyecto está dividido en dos componentes principales:
1.  **Frontend**: Un sitio web moderno y responsivo construido con **Astro**.
2.  **Backend**: Una API RESTful creada con **PHP** vainilla para servir los datos y conectarse con la IA.

## ✨ Características

- **Tirada de Tarot Cibernético**: Obtiene una tirada aleatoria de 3 cartas con nombres y descripciones que fusionan lo esotérico y lo tecnológico.
- **Oráculo con IA**: Envía una pregunta junto con tus cartas y recibe una respuesta única generada por la API de Google Gemini.
- **Interfaz Minimalista**: Un diseño con temática mística y tecnológica, enfocado en la experiencia de usuario.
- **Depuración de Prompts**: Muestra el prompt exacto que se envía a la IA, facilitando la depuración y el ajuste de la personalidad del Gurú.

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
    - [Astro](https://astro.build/)
    - JavaScript (Vanilla)
    - HTML & CSS

- **Backend**:
    - [PHP](https://www.php.net/) (sin frameworks)
    - [Composer](https://getcomposer.org/) para gestión de dependencias.
    - `vlucas/phpdotenv` para el manejo de variables de entorno.

- **API de IA**:
    - [Google Gemini](https://ai.google.dev/)

## 📂 Estructura del Proyecto

```
/El Gurú de Bits
├── backend-php/                # Proyecto de la API en PHP
│   ├── app/Controllers/        # Lógica de los endpoints
│   ├── public/                 # Punto de entrada (index.php, .htaccess)
│   ├── vendor/                 # Dependencias de Composer
│   ├── .env                    # (Local) Variables de entorno (API Key)
│   ├── .env.example            # Plantilla para las variables de entorno
│   └── composer.json           # Definición de dependencias
│
└── frontend-astro/             # Proyecto web con Astro
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── layouts/              # Layout base de las páginas
    │   ├── pages/                # Páginas del sitio (index.astro, oraculo.astro)
    │   └── utils/                # Módulos de JS (api.js)
    ├── astro.config.mjs
    └── package.json
```

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [PHP](https://www.php.net/downloads.php) (versión 7.4 o superior)
- [Composer](https://getcomposer.org/download/)
- (Opcional pero recomendado) [XAMPP](https://www.apachefriends.org/index.html) para un entorno de servidor Apache + PHP sencillo.

### 1. Configuración del Backend (API)

Primero, configura el servidor que potenciará la aplicación.

```bash
# 1. Navega al directorio del backend
cd backend-php

# 2. Instala las dependencias de PHP
composer install

# 3. Crea tu archivo de variables de entorno a partir de la plantilla
# (En Windows, puedes usar copy .env.example .env)
cp .env.example .env
```

4.  **Añade tu API Key**: Abre el archivo `.env` que acabas de crear y pega tu clave de la API de Google Gemini en la variable `GEMINI_API_KEY`.

### 2. Configuración del Frontend

Ahora, configura la interfaz web.

```bash
# 1. Desde la raíz del proyecto, navega al directorio del frontend
cd ../frontend-astro

# 2. Instala las dependencias de Node.js
npm install
```

### 3. Ejecutar la Aplicación

Necesitas tener ambos servidores (backend y frontend) corriendo simultáneamente.

- **Para iniciar el Backend (API):**
  
  **Opción A (Recomendada con XAMPP):**
  1.  Asegúrate de que el servicio de Apache en XAMPP esté corriendo.
  2.  Crea un [Enlace Simbólico](https://www.howtogeek.com/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/) desde `C:\xampp\htdocs\guru-api` hasta la carpeta `backend-php/public` de este proyecto. Esto permite que Apache sirva tu API sin tener que mover los archivos.
  3.  La API estará disponible en `http://localhost/guru-api/`.

  **Opción B (Servidor de desarrollo de PHP):**
  ```bash
  # Desde la carpeta backend-php/public
  php -S localhost:8000
  ```
  La API estará disponible en `http://localhost:8000/`.

- **Para iniciar el Frontend:**

  ```bash
  # Desde la carpeta frontend-astro
  npm run dev
  ```
  El sitio web estará disponible en `http://localhost:4321` (o la URL que indique la consola).

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
