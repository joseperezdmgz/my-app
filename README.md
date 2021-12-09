<h1 align="center">Aplicación de prueba Angular</h1>
<p align="center"><img src="https://viterbit-careers-site.cdn.viterb.it/ozpi8csg7sp/603e5ecef0a9c797521604.png"/></p>

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
  $ eve.holt@reqres.in
  ```

  password:

```bash
  $ cityslicka
```

- Una vez dentro podemos ver la información de los usuarios y movernos libremente por las páginas.

- Al intentar ir a la pantalla "login" te devolverá a "dashboard" hasta que pulses el botón de la barra de navegación para cerrar sesión. Lo mismo pasa si intentas acceder a "dashboard" sin estar logueado, te redigirá a la pantalla "login".

## Guía de instalación

---

- Instalar Angular con el comando:

```bash
$ sudo npm install -g @angular/cli
```

- Al comprobar la instalación con el comando:

```bash
$ ng version
```

- Dado que la versión de node que tenía instalada no era compatible con Angular, la cambié con nvm:

```bash
$ sudo nvm install v16.10
```

- Una vez hecho estos pasos, he usado el comando:

```bash
$ ng new my-app
```

- A la pregunta que hace la acepto para que instale un fichero predeterminado y elegimos la opción css.

- Arrancamos el servidor con el comando:

```bash
$ ng serve
```

## Información adicional

---

He usado boostrap para hacer las pantallas de "login" y las tarjetas de "dashboard".
