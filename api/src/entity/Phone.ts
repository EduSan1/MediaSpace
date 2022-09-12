import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserORM } from "./User";


@Entity({name : "tb_phone"})
export class PhoneORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    ddd: string

    @Column()
    phone: string

    @Column()
    ddi: string

    @ManyToOne(() => UserORM, user => user.phones)
    user: UserORM

}