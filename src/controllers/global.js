import express from "express"
const router = express.Router()

router.get("/global", (req, res) => {
    res.render("global")
})

export default router