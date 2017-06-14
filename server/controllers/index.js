var models = require('../models');

module.exports = {
  messages: {
    get: (req, res) => {
      models.messages.get( (err, messages) => {
        if (err) {
          console.error('GET MESSAGES CONTROLLER ERROR: ', err);
          throw(err);
        } else {
          res.statusCode = 200;
          res.send(messages);
        }
      });
    }, // a which handles a get  =>request for all messages
    post: (req, res) => {
      console.log('POST REQEST BODY IN CONTROLLER: ', req.body);
      models.messages.post( (err, messages) => {
        if (err) {
          console.error('POST MESSAGES CONTROLLER ERROR: ', err);
          throw(err);
        } else {
          
        }
      })
    } // a which handles posting a  =>message to the database
  },

  users: {
    // Ditto as above
    get: (req, res) => {
      models.users.get( (err, users) => {
        if (err) {
          console.error('GET USERS CONTROLER ERROR: ', err);
          throw(err);
        } else {
          res.statusCode = 200;
          res.send(users);
        }
      })
    },
    post: (req, res) => {
      let user = {};
      user.username = req.body.username;
      models.users.post( user, (err, results) => {
        if (err) {
          console.error('POST USERS CONTROLLER ERR: ', err);
          throw(err);
        } else {
          res.statusCode = 201;
          res.end();
        }
      })
    }
  }
};

