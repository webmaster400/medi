const jwtToken = async (statusCode, user, res) => {
  const token = await user.getToken();
  const option = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
    httpOnly: true,
  };
  res.status(statusCode).cookie("medical_cookie", token, option).json({
      msg:"you logged in successfully"
  });
};

module.exports = jwtToken
