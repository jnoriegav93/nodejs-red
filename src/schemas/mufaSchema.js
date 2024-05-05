import { z } from "zod";
export const crearMufaSchema = z.object({
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
    capacidad: z
    .string({
        required_error: "La capacidad es obligatoria"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "La capacidad debe ser un número positivo",
    }),
    codigo: z
    .string({
        required_error: "El código es obligatorio"
    })
    .min(6, {
        message: "El código debe tener al menos 6 caracteres"
    }),
    hilo_id_entrada: z
    .string({
        required_error: "Debe seleccionar el hilo de entrada"
    }),
    hilo_id_salida: z
    .string({
        required_error: "Debe seleccionar el hilo de salida"
    })
});