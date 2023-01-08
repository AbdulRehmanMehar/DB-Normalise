const http = require('http');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const { statuses_model: Statuses, cuisines_model: Cuisines } = require('./models');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Cuisines.hasOne(Statuses, {
  foreignKey: 'id',
  otherKey: 'id'
});
Statuses.belongsTo(Cuisines, {
  foreignKey: 'id',
  otherKey: 'id'
});

app.get('/', (req, res) => {
  res.send('up!');
});

app.get('/statuses', async (req, res) => {
  const statuses = await Statuses.findAll();
  res.json(statuses)
});

app.post('/statuses/create', async (req, res) => {
  const { name } = req.body;
  const statuses = await Statuses.create({
    name: name || 'Cuisine Status',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  res.json(statuses)
});

app.get('/cuisine', async (req, res) => {
  const cuisines = await Cuisines.findAll({
    include: [
      Statuses
    ]
  });
  res.json(cuisines)
});

app.post('/cuisine/create', async (req, res) => {
  const { name, icon, statusId } = req.body;
  const cuisine = await Cuisines.create({
    name: name || 'Cuisine',
    icon: icon || 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png',
    statusId: statusId || 1,
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  res.json(cuisine);
});



const server = http.createServer(app);
server.listen(process.env.PORT || 3000);