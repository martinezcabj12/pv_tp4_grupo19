# Trabajo Practico N4

> `npm install

---

Integrantes:

- BRISA ANAHÍ BARRO [GitHub](https://github.com/BarroBrisa)
- DARIO ABEL MARTINEZ [GitHub](https://github.com/martinezcabj12)
- MARCELO FERNANDO ORTIZ [GitHub](https://github.com/marceortiz)
- GIANFRANCO PEDRAZZANI [GitHub](https://github.com/GianPedr)
- MATÍAS EMANUEL VARGAS [GitHub](https://github.com/MatiasVargasDev)

---

## Consignas

- Agregar un producto: desde un formulario, se completan los datos y se guarda el
  producto.
- Buscar un producto: mediante una barra de búsqueda (por descripción o ID).
- Modificar un producto: seleccionando uno de la lista, se pueden cambiar sus datos.
- Eliminar un producto: opción para borrar productos de la lista.

## Hooks Para Utilizar

- useState: Manejar estados de productos, edición y búsqueda.
- useEffect: Mostrar por consola los cambios que se producen en el array de productos
- useMemo: Para optimizar el filtrado de productos según el término de búsqueda,
  evitando cálculos innecesarios en cada render.
- useCallback: Para definir funciones como agregar, editar, eliminar y buscar productos
  sin que se vuelvan a recrear en cada render, mejorando el rendimiento.

## Componentes Sugeridos

- `<ProductForm />`: para agregar o modificar productos.
- `<ProductList />`: para mostrar la lista de productos.
- `<ProductItem />`: para representar cada producto individual.
- `<SearchBar   />`: para buscar productos.

> [!important]
> Los componentes deben estar organizados y seguir principios de reutilización.

## Estructura del Proyecto Terminado

```bash

# Pegar estructura con cada Actualizacion en la rama principal

```

---

### Script Descripcion

---

[Biome-JS Documentación](https://biomejs.dev/guides/getting-started/)

Para revisar el formato del código en cada proyecto

> npx biome format

Para Aplicar formateo en los ficheros

> npx biome format --fix
