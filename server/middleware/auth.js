const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  let decodedData;

  try {
    decodedData = await jwt.verify(token, "SECRET_KEY");
    if (decodedData) {
      req.userID = decodedData.id;
    }
    req.user;

    next();
  } catch (err) {
    console.log("in error");
  }
};
