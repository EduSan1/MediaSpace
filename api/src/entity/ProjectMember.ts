import { Column, Entity, JoinColumn, ManyToOne, OneToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagement";
import { TeamProjectManagementORM } from "./TeamProjectManagement";
import { UserORM } from "./User";
import { DeliveryORM } from "./Delivery";

@Entity({ name: "tb_project_member" })
export class ProjectMemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: true })
    is_active: boolean

    @OneToOne(() => TeamProjectManagementORM, teamProjectManagement => teamProjectManagement.members)
    @JoinColumn()
    teamProjectManagement: TeamProjectManagementORM

    @ManyToOne(() => UserORM, user => user.project_member)
    member: UserORM

    /*@ManyToMany(() => DeliveryORM)
    @JoinTable()
    delivery: DeliveryORM[]*/

}