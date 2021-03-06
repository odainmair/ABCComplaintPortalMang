import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandlerMW, NotFoundError, currentUserMW } from '@abccompany/common';
import { createComplaintRouter } from './routes/new';
import { showComplaintRouter } from './routes/show';
import { indexComplaintRouter } from './routes/index';
import { updateComplaintRouter } from './routes/update';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUserMW);

app.use(createComplaintRouter);
app.use(showComplaintRouter);
app.use(indexComplaintRouter);
app.use(updateComplaintRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandlerMW);

export { app };
