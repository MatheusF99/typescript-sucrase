import { Schema, model } from 'mongoose'

interface UserProps{
    email?: string
    firtname: string
    lastname: string
}

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
},{
    timestamps: true,
})

export default model('user', UserSchema)