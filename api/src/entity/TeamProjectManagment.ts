import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagment";
import { TeamORM } from "./team";

@Entity({ name: "tb_management_project" })
export class TeamProjectManagementORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => TeamORM, team => team.team_project_managment)
    team: TeamORM

    @ManyToOne(() => ProjectManagementORM, project => project.team_project_managment)
    projectManagement: ProjectManagementORM

}