import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectORM } from "./Project";

@Entity({ name: "tb_project_requirement" })
export class ProjectRequirementORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: "double" })
    gain_percentage: number

    @ManyToOne(() => ProjectORM, project => project.requirements)
    project: ProjectORM

}