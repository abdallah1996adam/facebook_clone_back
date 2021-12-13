import dotenv from "dotenv"

dotenv.config()

const config = {
    server_port:process.env.SERVER_PORT,
    mongo_url:process.env.MONGO_URL
}

export default config