import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';

import User from '../dao/models/User.js';

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Email or password is incorrect' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            return done(err);
          }

          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Email or password is incorrect' });
          }
        });
      })
      .catch((err) => done(err));
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});