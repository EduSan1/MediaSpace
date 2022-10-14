import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@Entity({ name: "tb_project_management" })
export class ProjectManagementRM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}