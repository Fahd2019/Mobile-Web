
const mongoose   =  require('mongoose');
// const config     =  require('../../config/env/development.js');
// const jwt        =  require('jsonwebtoken');

/**
* Models
*/

const User       =  mongoose.model('User');

let getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Oops! Something went wrong, please try again later.';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }
    return message;
};

exports.create = function(req, res) {
      let user = new User(req.body);

      user.save(function (err, user) {
          if(err) {
              console.log(err);
              return res.status(400).send({message: getErrorMessage(err)});
          } else {
              return res.redirect('/orders');
          }
      });
};

exports.list = function(req, res) {
    User.find({"_id": { "$ne": req.user._id }}, '-salt -password -__v -provider').exec(function(err, users) {
        if(err) {
            console.log(err);
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else res.json(users);
    });
};

exports.login = function(req, res) {
    let email     = req.body.email;
    let password  = req.body.password;

    User.findOne({"email": email}, function(err, user){
        if (err) {
            console.log(err);
            return res.send({message: getErrorMessage(err)});
        }
        return res.send(user)
    });
};

exports.renderLogin = function(req, res) {
    return res.render("signin");
};

exports.renderSignup = function(req, res) {
    return res.render("signup");
};
