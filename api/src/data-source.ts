import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryORM } from "./entity/Category"
import { DeliveryORM } from "./entity/Delivery"
import { DeliveryFileORM } from "./entity/DeliveryFile"
import { GenderORM } from "./entity/Gender"
import { InterestORM } from "./entity/Interest"
import { MemberORM } from "./entity/Member"
import { PhoneORM } from "./entity/Phone"
import { PostORM } from "./entity/Post"
import { PostCommentORM } from "./entity/PostComment"
import { PostImageORM } from "./entity/PostImage"
import { ProjectORM } from "./entity/Project"
import { ProjectImageORM } from "./entity/ProjectImage"
import { ProjectManagementORM } from "./entity/ProjectManagement"
import { ProjectMemberORM } from "./entity/ProjectMember"
import { ProjectRequirementsORM } from "./entity/ProjectRequirements"
import { SubCategoryORM } from "./entity/SubCategory"
import { TeamORM } from "./entity/Team"
import { TeamProjectManagementORM } from "./entity/TeamProjectManagement"
import { UserORM } from "./entity/User"
import { UserTeamORM } from "./entity/UserTeam"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "db-media-space.mysql.database.azure.com",
    port: 3306,
    username: "mediaSpace",
    password: "egglmm123@",
    database: "db_media_space_apresentacao",
    synchronize: true,
    logging: false,
    ssl: {
        ca: process.env.SSL_CERT,
    },
    entities: [
        UserORM,
        GenderORM,
        PhoneORM,
        CategoryORM,
        SubCategoryORM,
        TeamORM,
        UserTeamORM,
        InterestORM,
        MemberORM,
        ProjectRequirementsORM,
        ProjectRequirementsORM,
        ProjectMemberORM,
        ProjectORM,
        ProjectImageORM,
        ProjectManagementORM,
        TeamProjectManagementORM,
        DeliveryORM,
        DeliveryFileORM,
        PostORM,
        PostImageORM,
        PostCommentORM
    ],
    migrations: [],
    subscribers: [],
})