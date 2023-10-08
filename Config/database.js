
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const URL =`mongodb+srv:// `
mongoose.connect(`${URL}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('Data Base is connected'))
.catch(err => console.log(err)
)