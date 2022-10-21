import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { InterestORM } from "./Interest";
import { UserORM } from "./User";

@Entity({ name: "tb_member_interest" })
export class MemberORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ default: false })
    accept: boolean

    @Column({ default: false })
    is_selected: boolean

    @ManyToOne(() => UserORM, user => user.interest, { eager: true })
    user: UserORM

    @ManyToOne(() => InterestORM, interestMember => interestMember.members)
    interest: InterestORM

}