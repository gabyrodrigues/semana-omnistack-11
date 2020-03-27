const crypto = require('crypto'); //gera uma string aleatoria

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}