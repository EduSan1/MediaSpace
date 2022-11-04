import { Column, CreateDateColumn, Entity, Generated, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { ProjectORM } from "./Project"
import { ProjectMemberORM } from "./ProjectMember"
import { TeamProjectManagementORM } from "./TeamProjectManagement"
import { TypePaymentORM } from "./TypePayment"

@Entity({ name: "tb_project_management" })
export class ProjectManagementORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    payment_confirmed: boolean

    @Generated("increment")
    request_number: number

    @Column()
    payment_date: Date 

    @ManyToOne(() => ProjectORM, project => project.management)
    project: ProjectORM

    @ManyToOne(() => TypePaymentORM, typePayment => typePayment.project_management)
    payment_type: TypePaymentORM

    @OneToMany(() => TeamProjectManagementORM, teamProjectManagement => teamProjectManagement.projectManagement)
    team_project_management: TeamProjectManagementORM[]

    @OneToMany(() => ProjectMemberORM, projectMember => projectMember.member, { eager: true })
    members: ProjectMemberORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp
}
