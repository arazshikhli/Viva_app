const expres = require('express');
const config = require('config');
const mongoose = require('mongoose')

const app = expres();
app.use('/api/auth', require('./routes/auth.routes'));
app.use('api/store', require('./routes/store.routes'));


const PORT = config.get('port') || 5001
const URL = config.get('mongoUri')
async function start() {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, () => {
            console.log(`App has been startded at ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

start()
