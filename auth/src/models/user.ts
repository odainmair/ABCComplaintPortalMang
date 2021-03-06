import mongoose from 'mongoose';
import {PasswordHashing} from '../services/passwodHashing'
// An interface that describes the properties
// that are required to create a new user
interface UserAttrs {
    email:string;
    name:string;
    education:string;
    gender:string;
    phoneNumber:string;
    address:string;
    password:string;
    isAdmin:boolean;
}


// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:UserAttrs):UserDoc;
}


// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document{
    email:string;
    name:string;
    education:string;
    gender:string;
    phoneNumber:string;
    address:string;
    password:string;
    isAdmin:boolean;
}


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true

    }, 
    name:{
        type:String,
        required:true

    },
    education:{
        type:String,
        required:true

    },
    gender:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    isAdmin:{
        type:Boolean,
        required:true

    },
    password:{
        type:String,
        required:true
    }
},{
    toJSON: {
        transform(doc,ret) {
            ret.id=ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;     
        }

    }
})

userSchema.pre('save',async function (done) {
    if (this.isModified('password')){
        const hashed =await PasswordHashing.toHash(this.get('password'));
        this.set('password',hashed)
    }
    done();
})

userSchema.statics.build = (attrs:UserAttrs)=>{
    return new User(attrs);
}
const User =mongoose.model<UserDoc,UserModel>('User',userSchema);



export {User};