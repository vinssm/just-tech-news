const withAuth = (req, res, next) => {
<<<<<<< HEAD
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
=======
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
>>>>>>> feature/single-post
