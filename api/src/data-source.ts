import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryORM } from "./entity/Category"
import { GenderORM } from "./entity/Gender"
import { InterestMemberORM } from "./entity/Interest"
import { MemberORM } from "./entity/Member"
import { PhoneORM } from "./entity/Phone"
import { ProjectORM } from "./entity/Project"
import { ProjectAttachmentORM } from "./entity/ProjectAttachment"
import { ProjectImageORM } from "./entity/ProjectImage"
import { ProjectManagementORM } from "./entity/ProjectManagment"
import { SubCategoryORM } from "./entity/SubCategory"
import { TeamORM } from "./entity/team"
import { TeamProjectManagementORM } from "./entity/TeamProjectManagment"
import { TypePaymentORM } from "./entity/TypePayment"
import { UserORM } from "./entity/User"
import { UserTeamORM } from "./entity/UserTeam"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "BcdSenai127",
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
        ProjectManagementORM,
        TeamProjectManagementORM,
        InterestMemberORM,
        MemberORM,
        TypePaymentORM,
        ProjectAttachmentORM,
        UserTeamORM
    ],
    migrations: [],
    subscribers: [],
})
