const connectToMongo=require('./DB')
connectToMongo();



const express = require('express')
// var cors = require('cors')
const app = express()
const port = 5000
// app.use(cors())
app.use(express.json())



app.use('/api/auth/ngo',require('./routes/authN'))
app.use('/api/auth/res',require('./routes/authR'))





app.listen(port, () => {
  console.log(`iNoteBook app listening on port ${port}`)
})