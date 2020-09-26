import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import invoiceRoutes from './routes/invoice';
import { io } from './utils/sockets';


const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

const server = app.listen(8001, () => {
  console.log("Listening on port: " + 8001);
});
io.attach(server);


// routes
app.use('/api/invoice', invoiceRoutes);


export default app;