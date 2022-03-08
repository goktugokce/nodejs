require('../src/db/mongoose')
const Task = require('../src/models/task')

/*Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const deleteAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = Task.countDocuments({completed : true})
    return count;
}

deleteAndCount('6225a8ef592fe70347562799',true).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})