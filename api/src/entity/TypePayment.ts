import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_type_project" })
export class TypePaymentORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    type: string
}