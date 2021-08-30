const { MongoClient, ObjectId } = require('mongodb')


const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteMany({
        description: 'write Layal'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('tasks').updateMany({
    //     // completed: false
    // }, { $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })


})



//     db.collection('users').updateOne({
//         _id: ObjectId("612749282cc3efc6eba89da6")
//     }, {
//         // $set: {
//         //     name: 'Sandra'
//         // }
//         $inc: {
//             age: 1
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error);
//     })


