const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')

const keys = require('./config/keys')

mongoose.connect(keys.mongoURI).then(() => console.log('MongoDB connected')).catch(error => console.log(`Error ${error}`))
app.use(require('morgan')('dev'))

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app