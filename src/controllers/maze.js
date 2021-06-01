import express from "express"
const router = express.Router()

router.get("/maze", (req, res) => {
    res.render("maze")
})

export default router