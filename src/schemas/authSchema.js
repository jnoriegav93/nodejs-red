import { z } from "zod";

export const registerSchema = z.object({
    username: z
    .string({
        required_error: 'El nombre de usuario es obligatorio'
    }),
    email: z
    .string({
        required_error : 'El correo es obligatorio'
    }).
    email({
        message: "Correo inválido"
    }),
    password: z
    .string({
        required_error: "La clave es obligatoria"
    })
    .min(6, {
        message: "La clave debe tener al menos 6 caracteres"
    })
})

export const loginSchema = z.object({
    email: z
    .string({
        required_error : 'El correo es obligatorio'
    }).
    email({
        message: "Correo inválido"
    }),
    password: z
    .string({
        required_error: "La clave es obligatoria"
    })
    .min(6, {
        message: "La clave debe tener al menos 6 caracteres"
    })
})