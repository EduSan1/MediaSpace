import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MemberORM } from "./Member";
import { ProjectORM } from "./Project";
import { ProjectManagementORM } from "./ProjectManagment";
import { TeamORM } from "./team";
import { UserORM } from "./User";

@Entity({ name: "tb_interest" })
export class InterestMemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: false })
    all_members_accept: boolean

    @ManyToOne(() => TeamORM, team => team.interest)
    team: TeamORM

    @ManyToOne(() => ProjectORM, project => project.interest)
    project: ProjectORM

    @OneToMany(() => MemberORM, member => member.interest)
    members: MemberORM[]

}