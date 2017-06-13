var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      let queryString = 'SELECT * from messages';
      db.connection.query(queryString, (err, messages) => {
        if (err) {
          console.error('Messages model get() error: ', err);
          callback(err, null);
        } else {
          console.log('messages OF model GET MESSAGES: ', messages);
          callback(null, messages);
        }
      });
    }, // produces all the messages
    post: (err, data) => {} // can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: (err, data) => {},
    post: (err, data) => {}
  }
};

