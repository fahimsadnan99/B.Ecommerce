const erros = (err, req, res, next) => {
    return res.status(500).send( "Error " + err.message)
}

module.exports = erros