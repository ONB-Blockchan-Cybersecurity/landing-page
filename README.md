# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## Estructura del proyecto

Dentro del proyecto, encontrarás las siguientes carpetas y archivos:

```text
/
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images
│       └── about_me.webp
├── README.md
├── src
│   ├── components
│   │   ├── about
│   │   │   └── AboutMe.astro
│   │   ├── common
│   │   │   ├── Footer.astro
│   │   │   ├── Hero.astro
│   │   │   └── Navbar.astro
│   │   ├── home
│   │   │   ├── ContactForm.astro
│   │   │   └── Solutions.astro
│   │   └── webinar
│   │       ├── Audience.astro
│   │       ├── NextWebinar.astro
│   │       ├── PastWebinars.astro
│   │       └── Topics.astro
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   └── webinar.astro
│   └── styles
│       ├── about.css
│       ├── contact_form.css
│       ├── footer.css
│       ├── global.css
│       ├── hero.css
│       ├── navbar.css
│       ├── next_webinar.css
│       ├── solutions.css
│       └── topics.css
└── tsconfig.json
```

## Comandos

Todos los comandos se corren desde la raíz del proyecto, desde la terminal:

| Command                     | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `npm install`               | Installs dependencies                            |
| `npm start` o `npm run dev` | Starts local dev server at `localhost:4321`      |
| `npm run build`             | Build your production site to `./dist/`          |
| `npm run preview`           | Preview your build locally, before deploying     |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`   | Get help using the Astro CLI                     |
