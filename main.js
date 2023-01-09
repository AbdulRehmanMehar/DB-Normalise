const http = require('http');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const { 
  meals_model: Meals, 
  statuses_model: Statuses, 
  cuisines_model: Cuisines, 
  meal_items_model: MealCuisines,
  categories_model: Category,
} = require('./models');

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

Meals.belongsToMany(Cuisines, {
  through: MealCuisines,
  foreignKey: 'mealId',
  otherKey: 'cuisineId'
});

Cuisines.belongsToMany(Meals, {
  through: MealCuisines,
  foreignKey: 'cuisineId',
  otherKey: 'mealId'
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.redirect('/meals')
});

app.get('/meals', async (req, res) => {
  const meals = await Meals.findAll({
    include: [Cuisines]
  });

  const cuisines = await Cuisines.findAll();
  const categories = await Category.findAll();
  const statuses = await Statuses.findAll();
  res.render('meals', { meals, cuisines, statuses, categories });
});

app.post('/meals', async (req, res) => {
  
  const { title, price,  description, cuisines, statusId, categoryId } = req.body;

  console.log(title, price, description, cuisines);

  const meal = await Meals.create({
    title,
    price,
    description,
    categoryId,
    statusId,
  });

  meal.setmeal_items_model(cuisines);




  res.json(meal)
});

app.get('/statuses', async (req, res) => {
  const statuses = await Statuses.findAll();
  res.json(statuses);
});

app.get('/statuses/create', async (req, res) => {
  const { name } = req.body;
  const statuses = await Statuses.create({
    name: name || 'Cuisine Status',
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
  res.json(statuses)
});

app.get('/categories/create', async (req, res) => {
  const { name } = req.body;
  const statuses = await Category.create({
    name: name || 'Cuisine Category',
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

app.get('/cuisine/create', async (req, res) => {
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