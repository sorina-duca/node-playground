const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    autoIndex: true,
    useUnifiedTopology: true,
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 18) {
                throw new Error('You must be over 18');
            }
        },
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid!');
            }
        },
    },
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

// new Task({
//     description: 'breathing exercises',
//     completed: false,
// })
//     .save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

const me = new User({
    name: 'Andy',
    age: '34',
    email: 'sdgdfbg@gmail.com',
});

me.save()
    .then(() => {
        console.log(me);
    })
    .catch((error) => {
        console.log(error);
    });
