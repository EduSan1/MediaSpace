import "reflect-metadata"
import { DataSource } from "typeorm"
import { GenderORM } from "./entity/Gender"
import { PhoneORM } from "./entity/Phone"
import { UserORM } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "052214100309",
    database: "db_media_space",
    synchronize: true,
    logging: false,
    entities: [
        UserORM,
        GenderORM,
        PhoneORM
    ],
    migrations: [],
    subscribers: [],
})
