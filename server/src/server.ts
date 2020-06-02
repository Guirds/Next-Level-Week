import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

// Fornece os arquvios estáticos para a aplicação. http://localhost:3333/uploads/oleo.svg
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);
