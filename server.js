const express = require('express');
const app = express();
const cors = require('cors');


app.set('port', process.env.PORT || 3001);
app.locals.title = 'Ninja Turtles';
app.locals.turtles = [
  { id: 1, name: 'Michelangelo', type:'party dude' },
  { id: 2, name: 'Raphael', type: 'tough guy' },
  { id: 3, name: 'Donatello', type: 'smarty pants' },
  { id: 4, name: 'Leonardo', type: 'the leader' }
];
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('<h1 class="test">A site about turtles that eat pizza.</h1>');
});

app.get('/api/v1/turtles', (req, res) => {
    const { turtles } = app.locals;
    return res.status(200).json(turtles)
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on PORT ${app.get('port')}`);
});
