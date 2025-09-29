# HpApp

El proyecto fue hecho con [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Descripción:
Es una web muy sensilla, hecha con angular para el consumo de una API que provee información del mundo de Harry Potter, con sus libros, casas, personajes y hechizos.

## Funcionamiento:
Basicmente se hicieron peticiones a la API "https://potterapi-fedeperin.vercel.app/es" y en la pestaña personajes se implemento verlos todos o bien a traves de un filtro de texto, regresar el personaje que coincida con el nombre tipado, para la sección de libros, se muestra información como fecha de lanzamiento, portada y título en una serie de paneles, lo mismo aplica para la sección de casas. Por ultimo se muestra la sección de Hechizos, en una tabla con paginación.


## Comentarios:
Al principio elabore un archivo html y un js, así de sencillo, elabore las peticiones a la API con fetch y piinté los personajes.
Posteriormente decidí incorporar Angular en su versión 16 y hacer las peticiones a traves de HttpClient, añadí unos pocos estilos sólo para la distribución de la información, el despliegue lo hice directo en github pages, pues ya antes había usado esta herramienta para despliegues.

## Despliegue y Repo:
[Link a página: ]https://ingrid-s.github.io/hp-app/#
[Link a repo: ]https://github.com/Ingrid-s/hp-app
