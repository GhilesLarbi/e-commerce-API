const isAdmin = (req, res, next) => {
    if (req.isAdmin) {
        next();
    } else {
        const err = new Error('The user is not authorized');
        err.name = 'UnauthorizedError';
        next(err);
    }
};

module.exports = isAdmin;

