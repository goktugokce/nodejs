const express = require('express');
const app = express();
const path = require('path');



app.use(express.static(path.join(__dirname, '../public')))
app.use('/about', express.static(path.join(__dirname, '../public/about.html')))


app.get('/weather', (req, res) => {
  res.send({
    forecast : 'It is snowing',
    location : 'Philadelphia'
  })
})


app.listen(3000, () => {
  console.log('Server running on port 3000.');
});

//app.com
//app.com/help
//app.com/about


