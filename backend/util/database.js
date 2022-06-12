const { Sequelize } = require('sequelize');
const config=require('../config/config.json');
const pool=Sequelize.createPool({
    host:config.host,
    user:config.user,
    database:config.database,
    password:config.password,
   });
module.exports=pool.promise();