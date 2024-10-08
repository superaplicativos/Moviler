// /app-driver/src/helpers/SessionHelper.js

class SessionHelper {
    static setSession(req, user) {
        req.session.user = {
            id: user.id,
            role: 'driver',
        };
    }

    static getSession(req) {
        return req.session.user || null;
    }

    static destroySession(req) {
        req.session.destroy();
    }
}

module.exports = SessionHelper;
