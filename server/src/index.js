import express from 'express';
import path from 'path';
import Chirps from './routes/chirps';
import cors from 'cors';

let app = express();

app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname, '../../client')));

app.use('/api', Chirps);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})