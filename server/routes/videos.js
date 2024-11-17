import express from "express"
const router = express.Router()
import fs from "fs"
import { fileURLToPath } from 'url'
import path from 'path'
const PathJSON = path.join(fileURLToPath(import.meta.url), '../../data/video_data.json')

router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const currentVideos = JSON.parse(fs.readFileSync(PathJSON));
        const filteredVideoData = currentVideos.map(video => ({
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }));
        res.status(200).json(filteredVideoData);
    } catch (error) {
        res.status(500).json({ message: "Failed to load video data" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const currentVideos = JSON.parse(fs.readFileSync(PathJSON))
        const videoId = req.params.id
        const video = currentVideos.find(video => video.id === videoId)
        res.status(200).json(video)
    } catch (error) {
        res.status(500).json({ message: "Failed to load video data" })
    }
})

router.post('/', async (req, res) => {
    try {
        const requestBody = req.body
        const currentVideos = JSON.parse(fs.readFileSync(PathJSON))

        if (!requestBody.title || !requestBody.description) {
            return res.status(400).json({
                message: "Invalid request body"
            })
        }

        const newVideo = {
            id: crypto.randomUUID(),
            title: requestBody.title,
            channel: "Nicolas Mendez",
            image: "http://localhost:5050/images/sea.jpg",
            description: requestBody.description,
            views: 0,
            likes: 0,
            duration: "7:00",
            video: "http://localhost:5050/12217946_3840_2160_30fps.mp4",
            timestamp: Date.now(),
            comments: []
        };

        currentVideos.push(newVideo);
        fs.writeFileSync(PathJSON, JSON.stringify(currentVideos, null, 2))

        const updatedVideos = JSON.parse(fs.readFileSync(PathJSON))
        res.status(201).json(updatedVideos)
    } catch (error) {
        res.status(500).json({ message: "Failed to process request", error })
    }
})

export default router