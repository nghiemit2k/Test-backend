import express from 'express';
import bodyParser from 'body-parser';
import registerRoute from './routes/index.js';
import cors from'cors';

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

// Routes
registerRoute(app);

app.get('/', (req, res) => {
  res.send('Hello World');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server is running on port ' + PORT);
});

