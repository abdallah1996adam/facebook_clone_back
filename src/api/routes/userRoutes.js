const express = require('express')


const userRouter = express.Router();


userRouter.get('/', (request, response)=>{
    return response.status(200).json({message:"welcome to user router"})
})



module.exports = userRouter;