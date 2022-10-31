import { Column, Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { ProjectORM } from "./Project";
import { DeliveryORM } from "./Delivery";

@Entity({ name: "tb_project_requirement" })
export class ProjectRequirementsORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: "double" })
    gain_percentage: number

    @Column({ nullable: true })
    is_accepted: boolean

    @Column({ nullable: true })
    is_delivered: boolean

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => ProjectORM, project => project.requirements)
    project: ProjectORM

    @ManyToMany(() => DeliveryORM, { eager: true })
    @JoinTable()
    delivery: DeliveryORM[]

}