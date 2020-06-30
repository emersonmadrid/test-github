const express = require('express');
const app = express();

require('dotenv').config();

const apiRouter = require('./routes/api');
app.use('/api',apiRouter);

const PORT = process.env.PORT||333;
app.listen(PORT,() =>{
 console.log(`Servidor escuchando en puerto ${PORT} !!!`);
})
