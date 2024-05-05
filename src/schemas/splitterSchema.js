import { z } from "zod";
export const crearSplitterSchema = z.object({
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
    poste_id: z
    .string({
        required_error: "Debe seleccionar el poste"
    }),
    hilo_entrada_id: z
    .string({
        required_error: "Debe seleccionar el hilo de entrada"
    }),
    codigo: z
    .string({
        required_error: "El código es obligatorio"
    })
    .min(6, {
        message: "El código debe tener al menos 6 caracteres"
    }),
    capacidad: z
    .string({
        required_error: "La capacidad es obligatoria"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "La capacidad debe ser un número positivo",
    }),
    nro: z
    .string({
        required_error: "El nro es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El nro debe ser un número positivo",
    }),
    zona: z
    .string({
        required_error: "La zona es obligatoria"
    }),
    tipo: z
    .string({
        required_error: "El tipo es obligatorio"
    }),
    pon: z
    .string({
        required_error: "El pon es obligatorio"
    }),
    nivel: z
    .string({
        required_error: "El nivel es obligatorio"
    }),
    icono: z
    .string({
        required_error: "El ícono es obligatorio"
    })
});