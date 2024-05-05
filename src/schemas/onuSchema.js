import { z } from "zod";
export const crearOnuSchema = z.object({
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
    hilo_id: z
    .string({
        required_error: "Debe seleccionar el hilo"
    }),
    splitter_id: z
    .string({
        required_error: "Debe seleccionar el splitter"
    }),
    cliente_nombre: z
    .string({
        required_error: "El nombre del cliente es obligatorio"
    }),
    cliente_direccion: z
    .string({
        required_error: "La dirección del cliente es obligatoria"
    }),
    velocidad_mb: z
    .string({
        required_error: "La velocidad es obligatoria"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "La velocidad debe ser un número entero positivo",
    }),
    inicio_contrato: z
    .string({
        required_error: "La fecha de inicio de contrato es obligatoria"
    }),
    monto_pago: z
    .string({
        required_error: "El monto de pago es obligatorio"
    })
    .refine(value => /^\d+(\.\d+)?$/.test(value), {
        message: "El monto de pago debe ser un número entero positivo",
    }),
    icono: z
    .string({
        required_error: "El ícono es obligatorio"
    })
});