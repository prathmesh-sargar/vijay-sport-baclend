const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = err.message || 'Internal server error';

  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((value) => value.message)
      .join(', ');
  }

  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid resource ID format';
  }

  res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = errorHandler;
