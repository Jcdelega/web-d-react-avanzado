import 'dotenv/config.js'
import musicData from './music.js'
import express from 'express'
import fs from 'fs'

const app = express()

const PORT = process.env.PORT

const readData = (filePath) => {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return data
  } catch (error) {
    console.log(`Error reading or parsing the path ${filePath}: ${error}`)
  }
}

app.get('/api/music', (req, res) => {
  res.send(readData('./src/db.json'))
})

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`)
})
