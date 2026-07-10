# ONA Blockchain Security

Landing y páginas informativas para ONA Blockchain Security, construidas con Astro.

## Páginas

- Inicio: propuesta de valor, soluciones y formulario de contacto.
- Webinars: membresía, temario, audiencia y webinars anteriores.
- Nosotros: perfil profesional y especialidades.
- Login y registro: pantallas de acceso simuladas para ONA Academy.

## Comandos

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  components/  Componentes reutilizables por sección
  layouts/     Layout base con navegación, footer y estilos globales
  lib/         Utilidades compartidas
  pages/       Rutas del sitio
  styles/      Estilos por componente o sección
public/
  images/      Imágenes públicas usadas por las páginas
```

## Despliegue

La configuración de Astro usa `/landing-page/` como `base` cuando corre en GitHub Actions, y `/` en desarrollo local.
