import { z } from "zod";
export const crearHiloSchema = z.object({
    geom: z
    .string({
        required_error: "Las coordenadas son obligatorias"
    })
    .refine(value => {
        // Verificar que la cadena tenga el formato correcto
        const regex = /^\{\"lat\": (-?\d+\.\d+), \"lon\": (-?\d+\.\d+)\}$/;
        return regex.test(value);
        }, {
            message: "La cadena de texto no cumple con el formato necesario: {\"lat\": ###.##, \"lon\": ###.##33}"
        }).transform((value) => {
        // Transformar la cadena a un objeto con las propiedades 'lat' y 'lon'
        const match = value.match(/^\{lat: (\d+\.\d+), lon: (\d+\.\d+)\}$/);
        if (match) {
            return { lat: parseFloat(match[1]), lon: parseFloat(match[2]) };
        }
        return null;
    }),

    codigo: z
    .string({
        required_error: "El código es obligatorio"
    })
    .min(6, {
        message: "El código debe tener al menos 6 caracteres"
    }),
    tipo: z
    .string({
        required_error: "El tipo es obligatorio"
    }),

    nivel: z
    .string({
        required_error: "El nivel es obligatorio"
    }),

    condicion: z
    .string({
        required_error: "La condición es obligatoria"
    }),

    capacidad: z
    .string({
        required_error: "La capacidad es obligatoria"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "La capacidad debe ser un número entero positivo",
    }),

    longitud: z
    .string({
        required_error: "La longitud es obligatoria"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "La longitud debe ser un número entero positivo",
    }),

    color_hex: z
    .string({
        required_error: "El color del hilo es obligatorio"
    })
    .refine(value => /^#[0-9a-fA-F]{6}$/.test(value), {
        message: "El código de color no cumple con el formato: # + 6 hexadecimales, ej. #a5c5be",
    })
});