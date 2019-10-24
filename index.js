const app = require('./app')
const port = process.env.PORT || 2323
app.listen(2323, () => {
    console.log(`Server has been STARTED port=${port}`)
})