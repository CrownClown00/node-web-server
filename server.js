const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
})

app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.render('matienence.hbs'{
      pageTitle:'Matienence Page'
    })
})

app.get('/', (request,response)=>{
  response.render('home.hbs',{
    pageTitle:'Home page',
    welcomeMessage:'Hey folks',

  });
});

app.get('/about',(request,response)=>{
  response.render('about.hbs',{
    pageTitle:'About Page',

  });
})

 app.get('/bad',(request,response)=>{
   response.send({
     error:"404 page"
   })
 })

 app.listen(port, ()=>{
   console.log(`port is ${port}`);
 });
