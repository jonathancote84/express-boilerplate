const app=require('./app')
const { PORT } = reuquire('./config')


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})