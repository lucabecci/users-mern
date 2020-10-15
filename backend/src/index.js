const app = require('./app')
require('dotenv').config()
require('./database/database')
async function main() {
    await app.listen(4000)
    console.log('Server on port: 4000')
}
main()