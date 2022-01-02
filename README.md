<h1 align="center">Aplicación de prueba Angular</h1>

## Tabla de contenidos:

---

- [Descripción y contexto](#descripción-y-contexto)
- [Guía de usuario](#guía-de-usuario)
- [Guía de instalación](#guía-de-instalación)
- [Información adicional](#información-adicional)

## Descripción y contexto

---

Esto es una prueba realizada en Angular. Tenemos la información en una Api, nos logueamos y podemos ver a los demás usuarios en la siguiente pantalla.

## Guía de usuario

---

- Buscamos un usuario en [reqres](https://reqres.in/)

- Introducimos el email y la contraseña,
  por ejemplo:  
   email:

  ```bash
   eve.holt@reqres.in
  ```

  password:

```bash
   cityslicka
```

- Una vez dentro podemos ver la información de los usuarios y movernos libremente por las páginas.

- Al intentar ir a la pantalla "login" te devolverá a "dashboard" hasta que pulses el botón de la barra de navegación para cerrar sesión. Lo mismo pasa si intentas acceder a "dashboard" sin estar logueado, te redigirá a la pantalla "login".

## Guía de instalación

---

- Instalamos Angular con el comando:

```bash
 sudo npm install -g @angular/cli
```

- Comprobamos la instalación con el siguiente comando:

```bash
 ng version
```

- Dado que la versión de node que tenía instalada no era compatible con Angular, la cambié con nvm:

```bash
 sudo nvm install v16.10
```

- Una vez hecho estos pasos, he usado el comando para crear un nuevo proyecto con el nombre por defecto "my-app":

```bash
 ng new my-app
```

- A la pregunta que hace, la aceptamos para que instale un fichero predeterminado y elegimos la opción css.

- Arrancamos el servidor con el comando:

```bash
 ng serve
```

- En este punto ya debería estar funcionando. Ahora nos dirigimos al siguiente [enlace](http://localhost:4200/) y mostrará nuestra web.

## Información adicional

---

Para hacer las tarjetas de "login" y "dashboard" se ha empleado Boostrap.
