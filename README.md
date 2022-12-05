# Prueba tecnica
Este proyecto es parte de una prueba tecnica.
Para hacer uso de este proyecto se necesita instalar nodejs para la
instalación de dependencias del proyecto, puedes decargarlo desde la
página oficial [NodeJS](https://nodejs.org/en/).

### Correr el proyecto
Para poder inicializar las dependencias, iremos a donde se encutra 
la carpeta del proyecto utilizando una terminal, para abrirla usaremos
el comando: 

- Windows: CTRL + R > escribimos cmd en el recuadro te texto.
- Linux: CTRL + ALT + T
- Mac: Haz clic en el ícono de Launchpad  en el Dock, escribe Terminal en el campo de búsqueda y haz clic en Terminal.

Una vez estes en la carpeta, escribe el comando:
```npm install```

Si no da ningun error, puedes correr el comando:
```npm run dev```
nos dara una direccion para poder ver el proyecto en el navegador

## Sobre el proyecto - carpetas
**public**: la carpeta public se utiliza para almacenar ficheros estáticos que no serán procesados por el framework.

**node_modules**: contiene las dependencias del proyecto para que este funcione,
a este no se le debe de dar seguimiento a la hora de subirlo a un repositorio remoto.

**src**: en ella se almacena el código fuente (source) del nuestro proyecto, en ella se encutran archivos sin procesar y donde se estará trabajando.

### carpeta src
**assets**: utiliza para guardar archivos estáticos como imágenes, audio, tipografías, video, etc.

**components**: son archivos que contienen el HTML, CSS y Javascript que está relacionado con una determinada parte de la página. En este caso, son componentes globales para la aplicación.

**hooks**: componentes funcionales (funciones) que crean un estado local y permite divir la logica de los componentes .jsx

**data**: en ella se encutran archivos .js que sirven como datos que se pueden enviar a los diferentes componentes del proyecto, ya sea a manera de prueba o para crear una forma dinamica de editar la informacón.

**layout**: hace referencia a una forma base que tendra la pagina y que sera compartida con las demás, proprcionando siempre un mismo diseño.

**pages**: se encutran todas la páginas del sitio web, son carpetas las cuales tienen su propia ramas de carpetas con archivos propios de esa página: .js, .jsx, .css, carpetas; components, hooks, data, etc.

**router**: aquí esta el enrutador para visitar las demás paginas.

**App.jsx**: se utiliza para dejar más limpio el archivo main.jsx, debido que aquí se crear apartados para establecer el sistema de rutas, contexto de la aplicación, etc.

**App.css**: estilos generales de la aplición en el puento más alto para ser compartidos por todas las carpetas.

**main.jsx**: aquí se ejecuta el uso de React para la aplicación.