import app from './app.js'
import morgan from 'morgan';
import dbconnect from './config.js';

app.listen(3001, () =>{
    console.log(`El servidor está en el puerto 3001`);
})

app.use(morgan('dev'));

dbconnect();

// import app from './app.js'
// import dbconnect from './config.js';
// import express from 'express';

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');//
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
// app.use(express.json());
// app.use(router);

// app.listen(3001, () =>{
//     console.log(`El servidor está en el puerto 3001`);
// })
// dbconnect();

//https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode 9:50