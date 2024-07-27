// Memuat variabel lingkungan dari file .env ke dalam process.env
require('dotenv').config()

// Mengimpor modul express untuk membuat aplikasi web
const express = require('express')

// Mengimpor rute workout dari file workouts di dalam folder routes
const workoutRoutes = require('./routes/workouts')

// Membuat instance dari express
const app = express()

// Menggunakan middleware bawaan express untuk menguraikan JSON
app.use(express.json())

// Middleware yang mencatat path dan metode request untuk setiap permintaan yang masuk
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Menggunakan rute workout yang dimulai dengan '/ukm/backend'
app.use('/ukm/backend', workoutRoutes)

// Menangani permintaan GET ke root path '/' dengan mengirimkan pesan JSON sebagai respon
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// Menjalankan server pada port yang ditentukan di file .env
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
