import mongoose from 'mongoose';


export const dbConnection = async () => {
    try{
        mongoose.connect(process.env.MONGO_DB_CNN)
        console.log('Online DB');

    }catch(error){
        throw new Error('Error on start db', error)
    }
}