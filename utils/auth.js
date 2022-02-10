const withAuth = (req, res, next) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> develop
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

<<<<<<< HEAD
module.exports = withAuth;
=======
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
>>>>>>> develop
