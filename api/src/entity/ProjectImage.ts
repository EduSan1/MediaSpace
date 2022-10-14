import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import { ProjectORM } from "./Project"

@Entity({ name: "tb_project_image" })
export class ProjectImageORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @ManyToOne(() => ProjectORM, project => project.images)
    project: ProjectORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}