import express, { json, urlencoded, Application } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { routeNotFound, errorHandler } from './middleware/errorHandlers';

config();
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.use(
  json(),
  urlencoded({ extended: false }),
  morgan('dev'),
  cors()
);
app.get('/', (req, res) => {
  res
    .status(200)
    .json({
      message: "Welcome to json Order API"
    })
});
app.use(routeNotFound, errorHandler);

app.listen(PORT, () => {
  console.log(`App listing at http://localhost:${PORT}`);
});

export default app;
