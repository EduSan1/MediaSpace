import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { DeliveryORM } from "./Delivery"

@Entity({ name: "tb_requirement_file" })
export class RequirementFileORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @ManyToOne(() => DeliveryORM, delivery => delivery.files)
    delivery: DeliveryORM

    @CreateDateColumn()
    create_at: Timestamp

}