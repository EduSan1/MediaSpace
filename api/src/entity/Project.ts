import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { ProjectImageORM } from "./ProjectImage";
import { UserORM } from "./User";

@Entity({ name: "tb_project" })
export class ProjectORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 800 })
    description: string

    @Column()
    estimated_value: number

    @Column()
    estimated_deadline: Date

    @Column()
    finish_project_date: Date

    @Column()
    start_project_date: Date

    @Column()
    status: "AWAITING_START" | "IN EXECUTION" | "COMPLETE" | "CANCELED"

    @ManyToOne(() => UserORM, user => user.projects)
    user: UserORM[]

    @OneToMany(() => ProjectImageORM, image => image.project)
    images: ProjectImageORM

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}