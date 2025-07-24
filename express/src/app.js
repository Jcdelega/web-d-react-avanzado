import 'dotenv/config.js'
import musicData from './music.js'
import express from 'express'

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Welcome to the Music API! Try /api/music/rock or /api/music/rock?order=title')
})

app.get('/api/music', (req, res) => {
  res.send(musicData)
})

app.get('/api/music/genre/:genre', (req, res) => {
  const genre = req.params.genre
  res.send(musicData[genre])
})
app.get('/api/music/rock', (req, res) => {
  if (req.query.order === 'title') {
    const orderedSongs = musicData.rock.sort((a, b) => a.title - b.title)
    return res.send(orderedSongs)
  }
  res.send(musicData.rock)
})
app.get('/api/music/rock/:year/:country', (req, res) => {
  const { year, country } = req.params
  const filteredResults = musicData.rock.filter(song => Number(year) === song.year || country === song.country)
  if (filteredResults === 0) return `There is no results that matching with this: ${year} or this country: ${country}`
  res.send(filteredResults)
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

app.use(express.json())

app.post('/api/music', (req, res) => {
  const newSong = req.body

  console.log(newSong)
  res.status(201).send({
    mensaje: 'Nwe song received successfully',
    datos: newSong
  })
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
