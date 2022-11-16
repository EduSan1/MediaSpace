import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagement";
import { ProjectMemberORM } from "./ProjectMember";
import { TeamORM } from "./team";

@Entity({ name: "tb_team_project_management" })
export class TeamProjectManagementORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: true })
    is_active: boolean

    @ManyToOne(() => TeamORM, team => team.team_project_management, { eager: true })
    team: TeamORM

    @ManyToOne(() => ProjectManagementORM, project => project.team_project_management)
    projectManagement: ProjectManagementORM

    @OneToMany(() => ProjectMemberORM, projectMember => projectMember.teamProjectManagement)
    members: ProjectMemberORM[] 

}