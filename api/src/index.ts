import { AppDataSource } from "./data-source"
import routes from "./routes"
import * as bodyParser from "body-parser"
import * as express from "express"
import * as cors from "cors"

AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(cors())
    app.use(bodyParser.json())
    app.use("/api", routes)
    
    app.listen(3001)
    console.log(`Server has started on port 3001. Open http://localhost:3001/api`)


}).catch(error => console.log(error))
