const admin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send("Invalid token");
  next();
};

module.exports = admin;