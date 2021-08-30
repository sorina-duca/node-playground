const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true,
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number, required: true
    },
})

const me =  new User({
    name: 'Sorina',
    age: 36
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log(error)
})