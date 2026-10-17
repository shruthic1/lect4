import express from 'express';
var router = express.Router();

/* GET /hello -> plain text */
router.get('/', function(req, res) {
  res.send('Hello from my custom route!');
});

/* GET /hello/:name -> uses a URL parameter */
router.get('/:name', function(req, res) {
  res.send(`Hello, ${req.params.name}!`);
});

export default router;
