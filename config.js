const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        const server = 'jnoriegav';
        const server_pwd = 'Mongodb.s4p3';
        const url_mongo = 'jnv-cluster.ruojgp0.mongodb.net';
        const app_name = 'jnv-cluster'
        await mongoose.connect(`mongodb+srv://${server}:${server_pwd}@${url_mongo}/?retryWrites=true&w=majority&appName=${app_name}`);
        // await mongoose.connect("mongodb+srv://jnoriegav:Mongodb.s4p3@jnv-cluster.ruojgp0.mongodb.net/?retryWrites=true&w=majority&appName=jnv-cluster");
        console.log("Conexión establecida correctamente");
    } catch (error) {
        console.error(`Error al conectar a MongoDB: ${error}`);
    }
};
module.exports = dbconnect;