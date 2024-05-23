const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
		unique: true
    },
    email: {
        type: String,
        required: true,
		unique: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: "",
		unique: false
    }
})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

module.exports = mongoose.model('User', userSchema);
