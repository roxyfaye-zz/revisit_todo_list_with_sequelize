const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const application = express();
const models = require('./models');

application.engine('mustache', mustache());

application.set('view engine', 'mustache');

application.use(bodyParser.json);

application.use(bodyParser.urlencoded({ extended: true }));

application.get('/', async(request, response) => {
     var result = await models. todo. update(todos, {where: {id: request.params.id }})
     var todo = models.todo.all()(result => {
         response.json(result);
     });
      response.render('index');
});
application.post('/', (request, response) => {
    var todo = request.body.todo;
    models.todo.create(todo)
        .then(result => response.json(result));
});
application.post('/', async (request, response) => {
    
});

application.listen(3000);

