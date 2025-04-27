# Sistema de Gestión de Empresas

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.4.

## Características

- 🏢 Gestión de Empresas
  - Crear nuevas empresas
  - Listar todas las empresas
  - Editar empresas existentes
  - Eliminar empresas
- 🔍 Búsqueda por RNC
- 💫 Interfaz moderna con DaisyUI y TailwindCSS
- 🚀 Diseño Responsivo

## Tecnologías Utilizadas

- Angular 19.2.0
- TailwindCSS 4.1.4
- DaisyUI 5.0.28
- SweetAlert2 11.19.1

## Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de Código

Angular CLI incluye potentes herramientas de generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component nombre-componente
```

Para ver la lista completa de esquemáticos disponibles (como `components`, `directives`, o `pipes`), ejecuta:

```bash
ng generate --help
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── create-company/    # Creación/edición de empresas
│   ├── manage-company/    # Listado y gestión de empresas
│   ├── home/             # Página de inicio
│   └── shared/           # Componentes y servicios compartidos
├── environments/         # Configuraciones de entorno
└── assets/              # Archivos estáticos
```

## Construcción

Para construir el proyecto ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los archivos de construcción en el directorio `dist/`. Por defecto, la construcción de producción optimiza tu aplicación para rendimiento y velocidad.

## Ejecutando pruebas unitarias

Para ejecutar pruebas unitarias con [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
ng test
```

## Ejecutando pruebas end-to-end

Para pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no incluye un framework de pruebas end-to-end por defecto. Puedes elegir uno que se ajuste a tus necesidades.

## Contribuir

1. Haz un Fork del repositorio
2. Crea tu rama de característica (`git checkout -b feature/NuevaCaracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Haz Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Crea un Pull Request

## Recursos Adicionales

Para más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página de [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles
