import { Schema, model, Document } from 'mongoose'

interface UserProps extends Document{
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

export default model<UserProps>('user', UserSchema)