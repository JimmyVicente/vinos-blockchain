const mongoose = require('mongoose');

async function connect() {
    var MONGO_URI = process.env.MONGO_URI_DEVELOP;
    if(process.env.MODE == "PRODUCTION") MONGO_URI = process.env.MONGO_URI_PRODUCTION;
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Base de datos conectada');
}

module.exports = { connect };