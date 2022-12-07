import { Column, Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, Timestamp, UpdateDateColumn } from "typeorm";
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

<<<<<<< HEAD
<<<<<<< HEAD
    @ManyToMany(() => DeliveryORM, delivery => delivery.requirements, {eager: true})
=======
    @ManyToMany(() => DeliveryORM, delivery => delivery.requirements, { eager: true })
>>>>>>> 12fe4e6c757459782848a1d54d1210ca617d6403
=======
    @ManyToMany(() => DeliveryORM, delivery => delivery.requirements, { eager: true })
=======
    @ManyToMany(() => DeliveryORM, delivery => delivery.requirements, {eager: true})
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
    @JoinTable()
    delivery: DeliveryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}