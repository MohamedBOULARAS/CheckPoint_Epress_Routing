const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Home Page'
    });
});
app.get('/about', (req, res) => {
    res.render('about.pug', {
        title: 'About Page'
    });
});

app.use('/services/:d/:h', (req,res,next)=>{
    if(req.params.d < 1||req.params.d > 5){
      res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday 9 am to 5 pm</h3>")
    }else if (req.params.h < 9 || req.params.h > 17){
      res.send("<h3>dear customer, our application is only available at the following time slot | from Monday to Friday 9 am to 5 pm</h3>")
    }
    next()
  })
  app.get('/contact/:d/:h',(req,res,next)=>{
    res.render('contact')
  })

app.listen(8699, () => {
    console.log('Server is running on 8699');

})
