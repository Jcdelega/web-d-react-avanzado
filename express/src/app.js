import 'dotenv/config.js'
// console.log(process.env.PORT)
// console.log(process.env.NAME)
import { musicData } from './music.js'
import express from 'express'

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello world from express')
})

app.get('/api/music', (req, res) => {
  res.send()
})

app.get('/api/music/genre/:genre', (req, res) => {
  const genre = req.params.genre
  res.send(musicData[genre])
})
app.get('/api/music/rock', (req, res) => {
  res.send(musicData.rock)
})
app.get('/api/music/hip_hop', (req, res) => {
  res.send(musicData.hip_hop)
})
app.get('/api/music/pop', (req, res) => {
  res.send(musicData.pop)
})
app.get('/api/music/electronic', (req, res) => {
  res.send(musicData.electronic)
})
app.get('/api/music/r_and_b_soul', (req, res) => {
  res.send(musicData.r_and_b_soul)
})
app.get('/api/music/latin_music', (req, res) => {
  res.send(musicData.latin_music)
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
