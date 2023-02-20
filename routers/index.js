const codePromo = require('./codePromo.route')
const addPoint = require('./addPoint.route')
const getTokenBO = require('./getTokenBO.route')
const account = require('./account.route')
const randomCode = require('./randomCode.route')
const checkAuth = require('./checkAuth.route')
const getMemberBO = require('./getMemberBO.route')
const findMemo = require('./findMemo.route')
const deposit = require('./depositToken.router')
const getTimeZone = require('./getTimeZone.route')
const changePass = require('./changePass.router')
const ipfp = require('./ipfp.route')
const getClientIPFP = require('./getClientIPFP.route')
const findCodeClient = require('./findCodeClient.route')
const client = require('./client.route')

module.exports = (app) => {{
    app.use('/code', codePromo)
    app.use('/add-point', addPoint)
    app.use('/get-token-bo', getTokenBO)
    app.use('/account', account)
    app.use('/generate-code', randomCode)
    app.use('/checkAuth', checkAuth)
    app.use('/getMemberBO', getMemberBO)
    app.use('/find-memo', findMemo)
    app.use('/deposit', deposit)
    app.use('/get-time-zone', getTimeZone)
    app.use('/change-pass', changePass)
    app.use('/ipfp', ipfp)
    app.use('/get-client-ipfp', getClientIPFP)
    app.use('/get-code-client', findCodeClient)
    app.use('/client', client)
}}