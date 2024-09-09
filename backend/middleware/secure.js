const APIKEY = process.env.ZEN_APIKEY;

exports.secure = async (req, res, next) => {
  try {
    const authHeader = req.header("apikey");
    if (!authHeader || authHeader !== APIKEY) {
      return res.status(401).json({
        status: 401,
        msg: "Access Denied: API key is invalid or missing",
        success: false,
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
