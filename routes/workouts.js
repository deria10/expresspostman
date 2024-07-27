// Mengimpor modul express untuk membuat router
const express = require('express')

// Membuat instance router dari express
const router = express.Router()

// Menangani permintaan GET ke root path '/' dengan mengirimkan pesan JSON sebagai respon
router.get('/', (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// Menangani permintaan GET ke path '/:id' dengan mengirimkan pesan JSON sebagai respon
// :id adalah parameter dinamis yang dapat menangkap nilai apa pun di URL
router.get('/:id', (req, res) => {
    res.json({mssg: "GET single workout"})
})

// Menangani permintaan POST ke root path '/' dengan mengirimkan pesan JSON sebagai respon
router.post('/', (req, res) => {
    res.json({mssg: "POST a new workout"})
})

// Menangani permintaan DELETE ke path '/:id' dengan mengirimkan pesan JSON sebagai respon
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE a workout"})
})

// Menangani permintaan PATCH ke path '/:id' dengan mengirimkan pesan JSON sebagai respon
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE a workout"})
})

// Mengekspor router agar dapat digunakan di file lain
module.exports = router
