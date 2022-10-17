import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagment";
import { UserORM } from "./User";

@Entity({ name: " tb_project_member" })
export class ProjectMemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => ProjectManagementORM, projectManagement => projectManagement.members)
    projectManagement: ProjectManagementORM

    @ManyToOne(() => UserORM, user => user.project_member)
    member: UserORM

}