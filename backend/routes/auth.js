const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: "Authentication token required" });
    }

    jwt.verify(token, 'umerDev', (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
    });
}


module.exports = authenticateToken;