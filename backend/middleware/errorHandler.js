const { logEvents } = require('./logger')

const errorHadler = (err, req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500 //

    res.status(status)

    res.json({massage: err.massage})
}

module.exports = errorHadler