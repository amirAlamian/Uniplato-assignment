export const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json(err);
  } else {
    if (err.code === 'P2021') {
      return res.status(500).send('Please run the database seeder');
    }

    console.log(err);
    return res.status(500).send('Internal server error');
  }
};
