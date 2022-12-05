import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MemberORM } from "./Member";
import { ProjectORM } from "./Project";
import { ProjectManagementORM } from "./ProjectManagement";
import { TeamORM } from "./Team";
import { UserORM } from "./User";

@Entity({ name: "tb_interest" })
export class InterestORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    all_members_accept: boolean

    @Column({ default: false })
    is_selected: boolean

    @ManyToOne(() => TeamORM, team => team.interest, { eager: true })
    team: TeamORM

    @ManyToOne(() => ProjectORM, project => project.interest)
    project: ProjectORM

    @OneToMany(() => MemberORM, member => member.interest, { eager: true })
    members: MemberORM[]

}