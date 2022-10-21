import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserORM } from "./User";


@Entity({ name: "tb_phone" })
export class PhoneORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    ddd: string

    @Column()
    phone: string

    @Column({ nullable: true })
    ddi: string

    @ManyToOne(() => UserORM, user => user.phone)
    user: UserORM

}