import express from 'express';
import morgan from 'morgan'; 
import authRoutes from './routes/authRoutes.js';
import hiloRoutes from './routes/hiloRoutes.js';
import mufaRoutes from './routes/mufaRoutes.js';
import onuRoutes from './routes/onuRoutes.js';
import posteRoutes from './routes/posteRoutes.js';
import splitterRoutes from './routes/splitterRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/api', 
        authRoutes,
        hiloRoutes,
        mufaRoutes,
        onuRoutes,
        posteRoutes,
        splitterRoutes
    );
export default app;


// 1:46:20 https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode


