const express= require('express')
const app= express()
const port = 3000;
const apiRouter = require('./routes/api')
const db= require('./models')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use('/api',apiRouter)

app.get('/',(req,res)=>{
    res.send('Hello World!!!')
});

app.listen(port,()=>{
    console.log(`App running on ${port}`)
})