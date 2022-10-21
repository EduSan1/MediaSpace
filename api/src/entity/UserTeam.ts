import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { TeamORM } from "./team";
import { UserORM } from "./User";

@Entity({ name: "tb_user_team" })
export class UserTeamORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => UserORM, user => user.teams)
    user: UserORM

    @ManyToOne(() => TeamORM, team => team.users, { eager: true })
    team: TeamORM

    @Column({ default: true })
    is_active: boolean

    @Column()
    is_admin: boolean

    @Column()
    is_freelancer: boolean

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}