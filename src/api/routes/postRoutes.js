const express = require('express')


const postRouter = express.Router();


postRouter.get('/', (request, response)=>{
    return response.status(200).json({message:"Welcome to post router"})
})


module.exports = postRouter

