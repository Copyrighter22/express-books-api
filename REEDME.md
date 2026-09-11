# API de Gestión de Libros (Express & Joi)

API REST desarrollada con Node.js y Express para la gestión de un catálogo de libros en memoria, utilizando validaciones mediante Joi.

## 🚀 Endpoints Disponibles

*   **GET /api/books** - Obtiene el listado completo de libros (soporta filtros por `?genre=` y ordenación por `?sort=year`)[cite: 2, 4].
*   **GET /api/books/:id** - Obtiene un libro específico por su ID[cite: 2, 4].
*   **POST /api/books** - Crea un nuevo libro con ID autoincremental tras validar los campos con Joi[cite: 2, 4].
*   **PUT /api/books/:id** - Actualiza de forma parcial los datos de un libro existente[cite: 2, 4].
*   **DELETE /api/books/:id** - Elimina un libro del sistema por su ID[cite: 2, 4].

## 🛠️ Tecnologías Utilizadas
*   Node.js[cite: 2]
*   Express[cite: 2]
*   Joi (para validaciones de esquemas)[cite: 4]