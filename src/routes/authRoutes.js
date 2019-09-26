import passport from 'passport';

export const Authroutes = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // the string ('google') will go and find the strategy upstair
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google')); // if someone need to authenticate with google use the (GoogleStrategy)

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};