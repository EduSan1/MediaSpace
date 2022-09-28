import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { TeamORM } from "./team";
import { UserORM } from "./User";

@Entity({name : "tb_user_team"})
export class UserTeamORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => UserORM, user => user.userTeam)
    user : UserORM[]

    @ManyToOne(() => TeamORM, team => team.teamUser)
    team : TeamORM[]

    @Column({default : true})
    is_active : boolean

    @Column()
    is_admin : boolean
    
    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}