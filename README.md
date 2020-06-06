# Cultura IT - Code Challenge Nodejs

Bienvenidos!

Estamos buscando desarrolladores nodejs para incorporar a nuestro equipo.
Con el fin de validar tus conocimientos, quién mejor que el código para comprobarlo. Por lo cual te proponemos que nos ayudes a resolver el siguiente problema; por favor tomate un tiempo para pensarlo y resolverlo.

## Heavy tasks

Se trata de un software que importa archivos y procesa resultados.
Es un web server que escucha cualquier URL un puerto determinado, donde al recibir un request a dicho puerto inicia las tareas de importar, guardar, actualizar.
Hoy por hoy ejecuta todo dicho procesamiento de forma sincronica, lo que no es un problema ya que tiene poca concurrencia.
Por cuestiones del negocio se solicita que ese web service soporte una mayor cantidad de peticiones, razon por la cual se desea hacer los cambios pertinentes para optimizar dicho procesamiento.

Esquema de concurrencia actual
```
importFileService() -> saveToDbService() -> ... uploadToSourceService()
````

Esquema de concurrencia posible
```
importFileService() -> saveToDbService()
                                        -> uploadToSourceService()
                                        -> uploadToSourceService()
                                        -> ...
````

Como se puede ser importFileService y saveToDbService son de ejecucion secuencial porque hay dependencias uno del otro, pero para el caso de la actualizacion a multiples recursos externos uploadToSourceService, se puede ejecutar totalmente en paralelo.

Tenes la libertad de elegir la estrategia que consideres adecuada y alcanzar el maximo nivel de paralelizmo (esto es muy importante) sin bloquear el event loop.

###### NOTAS:
Para evaluar el resultado se valorara lo siguiente:
1- Uso de standard library de nodejs.
2- Uso del lenguaje (elegancia en el codigo).

### Cómo presentar la solución
Cuando consideres que el problema está resuelto, debes subirlo a un repositorio de tu elección y enviarnos un mail a alamenza@culturait.com.ar con el link de descarga, además podes agregar cualquier comentario que creas correspondiente.


**Happy hacking!**
