import mongoose from 'mongoose';

const dbconnect = async () => {
    try {
        const server = 'jnoriegav';
        const server_pwd = 'Mongodb.s4p3';
        const url_mongo = 'jnv-cluster.ruojgp0.mongodb.net';
        const app_name = 'jnv-cluster';
        await mongoose.connect(`mongodb+srv://${server}:${server_pwd}@${url_mongo}/?retryWrites=true&w=majority&appName=${app_name}`);
        console.log("Conexión establecida correctamente");
    } catch (error) {
        console.error(`Error al conectar a MongoDB: ${error}`);
    }
};

export const TOKEN_SECRET = "r3d-2024";
export default dbconnect;

// https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode 1:21:00