import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { UserORM } from "./User";

@Entity({name : "tb_gender"})
export class GenderORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    gender: string
    
    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

    @OneToMany(() => UserORM, user => user.gender )
    users: UserORM[]
}