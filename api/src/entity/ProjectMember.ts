import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagement";
import { TeamProjectManagementORM } from "./TeamProjectManagement";
import { UserORM } from "./User";

@Entity({ name: "tb_project_member" })
export class ProjectMemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => TeamProjectManagementORM, teamProjectManagement => teamProjectManagement.members)
    teamProjectManagement: TeamProjectManagementORM

    @ManyToOne(() => UserORM, user => user.project_member)
    member: UserORM



}