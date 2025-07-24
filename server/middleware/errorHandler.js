const errorHandler = (err, req, res, next) => {
    // If the status code has already been set, use it. Otherwise, default to 500 (Internal Server Error)
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        message: err.message,
        // In production, you might not want to expose the stack trace
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };