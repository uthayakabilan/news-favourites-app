export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    });
    res.clearCookie("connect.sid");
    res.status(403).json({
      message: "Authentication failed, Please login again",
    });
  }
};
