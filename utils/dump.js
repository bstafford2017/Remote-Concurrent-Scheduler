const mysqldump = require('mysqldump')
const log = require('./log')

function dump() {
    mysqldump({
        connection: {
            host     : '127.0.0.1',
            user     : 'root',
            password : 'root',
            database : 'rcs'
        },
        dumpToFile: 'logs/full-database.sql.gz',
        compressFile: true
    }).catch(err => {
        console.error(err)
    })
}

module.exports = dump