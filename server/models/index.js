var db = require('../db');

module.exports = {
  messages: {
    get: (callback) => {
      let queryString = 'SELECT messages.id, messages.room, users.name, messages.text FROM messages INNER JOIN users WHERE messages.user = users.id';
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
    post: (err, data) => {
      // can be used to insert a message into the database
      
    } 
      
  },

  users: {
    // Ditto as above.
    get: (callback) => {
      let queryString = 'SELECT users.id, users.name FROM users';
      db.connection.query(queryString, (err, users) => {
        if (err) {
          console.error('USERS MODEL GET() ERROR: ', err);
          callback(err, null);
        } else {
          console.log('USERS OF MODEL GET USERS: ', users);
          callback(null, users);
        }
      });
    },
    post: (user, callback) => {
      let queryString = 'insert into users (name) values (?);'

      db.connection.query(queryString, [user.username], (err, userId) => {
        if (err) {
          console.error('USERS MODEL POST() ERROR: ', err.code);
          if (err.code === 'ER_DUP_ENTRY') {
            break;
          } else {
            callback(err, null);
          }
        } else {
          console.log('USERS OF MODEL POST USERS POSTED!!!!: ', userId);
          callback(null, userId);
        }
      })
    }
  }
};

