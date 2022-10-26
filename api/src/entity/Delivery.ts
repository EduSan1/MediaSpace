import { Column, Entity, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { ProjectRequirementsORM } from "./ProjectRequirements";

@Entity({ name: "tb_delivery" })
export class DeliveryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    file_link: string

    @ManyToMany(() => ProjectRequirementsORM, { eager: true })
    @JoinTable()
    ProjectRequirement: ProjectRequirementsORM[]

}