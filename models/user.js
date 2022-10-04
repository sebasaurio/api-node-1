import {Schema, model} from 'mongoose'

const userSchema = Schema({
    name: {type: String, required: [true, 'Name is required']},
    email: {type: String, required: [true, 'Email is required'], unique: true},
    password: {type: String, required: [true, 'Password is required'], },
    img: {type: String },
    role: {type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROLE']},
    status: {type: Boolean, default: true},
    asGoogle: {type: Boolean, default: false}
})

userSchema.methods.toJSON = function(){
    const{__v, password, ...userData} = this.toObject();
    return userData;
}

export default model('User', userSchema)
