import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { InterestMemberORM } from "./Interest";
import { UserORM } from "./User";

@Entity({ name: "tb_member_interest" })
export class MemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: false })
    accept: boolean

    @ManyToOne(() => UserORM, user => user.interest)
    user: UserORM

    @ManyToOne(() => InterestMemberORM, interestMember => interestMember.members)
    interest: InterestMemberORM

}