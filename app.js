const express = require('express')
const app = express()
const morgan = require("morgan");
const { db} = require('./models');
const bodyParser = require('body-parser')




app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki',require('./routes/wiki'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.redirect('/wiki')
})


db.authenticate() 
  .then(() => { 
    console.log('It Works!'); 
})

const PORT = 5431;

const init = async () => {
  await db.sync({force: true})
    // make sure that you have a PORT constant
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}!`);
    });
  }
  
  init();

  module.exports =  app;
  

