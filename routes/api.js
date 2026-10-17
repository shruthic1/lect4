import express from 'express';
var router = express.Router();

/* GET /api/time -> returns JSON */
router.get('/time', function(req, res) {
  res.json({ now: new Date().toISOString() });
});

/* POST /api/echo -> echoes back the JSON body you send */
router.post('/echo', function(req, res) {
  res.json({ youSent: req.body });
});

export default router;
