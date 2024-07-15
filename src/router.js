const express = require('express');
const router = express.Router();
const messagesController = require('./controllers/messagesControllers');
const messagesMiddleware = require('./middlewares/messagesMiddleware');

router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

router.get('/messages', messagesController.getAll);
router.post('/messages', messagesMiddleware.validateBody, messagesController.createMessage);
router.delete('/messages/:id', messagesController.deleteMessage);

module.exports = router;
