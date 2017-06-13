var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get( (err, data) => {
        if (err) {
          console.error('GET MESSAGES CONTROLLER ERROR, ', err);
          throw(err);
        } else {
          res.statusCode = 200;
          res.send(data);
        }
      });
    }, // a which handles a get  =>request for all messages
    post: (req, res) => {} // a which handles posting a  =>message to the database
  },

  users: {
    // Ditto as above
    get: (req, res) => {},
    post: (req, res) => {}
  }
};

