const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://yogeshbeniwal:RKfR7TrxNw3UGfDQ@cluster0.5qosd.mongodb.net/new-wallet', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});


const {  Schema } = require('zod');


//const userschema

const userSchema =new mongoose.Schema(
    {

        username:
        {
            type:String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLength: 3,
            maxLength: 30
        },
        password:
        {
                type:String,
                required:true,
                minLength:7

        },
        firstname:
        {
            type: String,
            required: true,
           trim: true,
           maxLength: 50

        },
        lastname:
        {   
            type: String,
            required: true,
            trim: true,
            maxLength: 50
        }
    }
);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});



const User= mongoose.model('User',userSchema);
const Account= mongoose.model('Account',accountSchema);
module.exports={
    User,Account
}