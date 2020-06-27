import express from 'express';
import { router as controllerRouter } from './controllers/decorators/controller';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['laskfjgf'] }));
app.use(controllerRouter);
app.use(router);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
