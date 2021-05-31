import app from "./server.js"

const port = Number(process.env.PORT || 9000)
app.listen(port, () => {
    console.log(" Express server started on port %d ", port)
})

