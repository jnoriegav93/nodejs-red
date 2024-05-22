import { z } from "zod";
export const crearPosteSchema = z.object({
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
        const match = value.match(/^\{\"lat\": (\d+\.\d+), \"lon\": (\d+\.\d+)\}$/);
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
    propietario: z
    .string({
        required_error: "El nombre del propietario es obligatorio"
    }),
    tipo: z
    .string({
        required_error: "El tipo es obligatorio"
    }),
    material: z
    .string({
        required_error: "El material es obligatorio"
    }),
    f12: z
    .string({
        required_error: "El f12 es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f12 debe ser un número positivo",
    }),
    f12b: z
    .string({
        required_error: "El f12b es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f12b debe ser un número positivo",
    }),
    f24: z
    .string({
        required_error: "El f24 es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f24 debe ser un número positivo",
    }),
    f24b: z
    .string({
        required_error: "El f24b es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f24b debe ser un número positivo",
    }),
    f48: z
    .string({
        required_error: "El f48 es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f48 debe ser un número positivo",
    }),
    f48b: z
    .string({
        required_error: "El f48b es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f48b debe ser un número positivo",
    }),
    f96: z
    .string({
        required_error: "El f96 es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f96 debe ser un número positivo",
    }),
    f96b: z
    .string({
        required_error: "El f96b es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f96b debe ser un número positivo",
    }),
    f144: z
    .string({
        required_error: "El f144 es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f144 debe ser un número positivo",
    }),
    f144b: z
    .string({
        required_error: "El f144b es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El f144b debe ser un número positivo",
    }),
    icono: z
    .string({
        required_error: "El ícono es obligatorio"
    })
});