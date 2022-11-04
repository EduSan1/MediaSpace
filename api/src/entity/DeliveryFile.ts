import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { DeliveryORM } from "./Delivery"

@Entity({ name: "tb_delivery_file" })
export class DeliveryFileORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @ManyToOne(() => DeliveryORM, delivery => delivery.files)
    delivery: DeliveryORM

    @CreateDateColumn()
    create_at: Timestamp

}