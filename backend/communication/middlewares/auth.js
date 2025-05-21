const AuthMiddleware = (required_permission_level = 1) => (req, res, next) => {
    const perm_level = 0;
    // get user perm level from cookie
    if(perm_level < required_permission_level) {
        return res.fail('Insufficient permissions', { code: 403 });
    }

    req.session.user_id = 1;

    return next();
}

export default AuthMiddleware;
