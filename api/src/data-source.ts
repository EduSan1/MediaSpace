import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryORM } from "./entity/Category"
import { GenderORM } from "./entity/Gender"
import { PhoneORM } from "./entity/Phone"
import { ProjectORM } from "./entity/Project"
import { ProjectImageORM } from "./entity/ProjectImage"
import { SubCategoryORM } from "./entity/SubCategory"
import { TeamORM } from "./entity/team"
import { UserORM } from "./entity/User"
import { UserTeamORM } from "./entity/UserTeam"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "db_media_space",
    synchronize: true,
    logging: false,
    entities: [
        UserORM,
        GenderORM,
        PhoneORM,
        CategoryORM,
        SubCategoryORM,
        TeamORM,
        ProjectORM,
        ProjectImageORM,
        UserTeamORM
    ],
    migrations: [],
    subscribers: [],
})
