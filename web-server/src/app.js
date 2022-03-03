const express = require('express');
const path = require('path');
const app = express();

const viewsPath = path.join(__dirname,'../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);


app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req,res) => {
  res.render('index',{
    title:'Weather App',
    name:'Goko'
  })
})

app.get('/about', (req,res) => {
  res.render('about', {
    title:'About Me',
    name:'Goktugokce'
  })
})

app.get('/help', (req,res) => {
  res.render('help', {
    title:'Help',
    name:'Goktugokce'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast : 'It is snowing',
    location : 'Philadelphia'
  })
})


app.listen(3000, () => {
  console.log('Server running on port 3000.');
});



