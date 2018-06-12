import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();

app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', routes);

export default app;