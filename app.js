const express= require('express')
const app= express()
const cors = require('cors')
const port = 4000;
const apiRouter = require('./routes/api')
const db= require('./models')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());

app.use('/uploads',express.static('uploads'))

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