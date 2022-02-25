const AuthAdmin = async (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).send("Request Forbident")
    } else {
        next()
    }
}

module.exports = AuthAdmin