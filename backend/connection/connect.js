const mongoose = require('mongoose');

const connect = async()=>{
    try{
        const response = mongoose.connect(`${process.env.DB_URL}`);
        if (response) {
            console.log('connected to DB');
            
        }
    } catch(error){
console.log('error in database');
    }
}
connect();