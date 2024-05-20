export const tiposerror = ["valueMissing", "patternMismatch", "tooShort", "typeMismatch"];

// Mensajes de error
export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        tooShort: "Por favor, ingrese un nombre válido, de al menos 3 caracteres",
    },
    precio: {
        valueMissing: "El campo precio no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un precio con el formato 90.00",
    },
    imagen: {
        valueMissing: "El campo de imagen no puede estar vacío.",
        patternMismatch: "Por favor, ingrese una url valida",
        tooShort: "El campo no tiene caracteres suficientes.",
    },
};