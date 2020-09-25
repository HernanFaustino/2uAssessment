import express, { json } from 'express';
import morgan from 'morgan';

import invoiceRoutes from './routes/invoice';


const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());


// routes
app.use('/api/invoice', invoiceRoutes);


export default app;