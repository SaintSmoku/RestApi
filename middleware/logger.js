export const logger = (req, res, next) => {
    req.userID = "skjnfgknsekflkvesnjvk1b32drb";
  console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`);
  next();
}