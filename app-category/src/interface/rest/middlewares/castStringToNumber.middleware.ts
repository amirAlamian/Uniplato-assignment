export const castStringToNumber = function (req, res, next) {
  if (req.params) {
    for (const param in req.params) {
      const casted = parseInt(req.params[param]);

      if (!isNaN(casted)) {
        req.params[param] = casted;
      }
    }
  }

  next();
};
