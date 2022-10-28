import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectORM } from "./Project";

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

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => ProjectORM, project => project.requirements)
    project: ProjectORM

}