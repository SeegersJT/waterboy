const ErrorHandlingMiddleware = (err, req, res, next) => {
    console.log('Hit the middleware');
    return res.fail(err, { message: 'An error has ocurred', code: 500 });
};

export default ErrorHandlingMiddleware;
