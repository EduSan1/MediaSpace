import { Column, Entity, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from "typeorm";
import { ProjectRequirementsORM } from "./ProjectRequirements";
import { ProjectMemberORM } from "./ProjectMember";
import { RequirementFileORM } from "./RequirementFile";

@Entity({ name: "tb_delivery" })
export class DeliveryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(() => RequirementFileORM, files => files.delivery, { eager: true })
    files: RequirementFileORM[]

    @Column({ nullable: true })
    is_accepted: boolean

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    create_at: Timestamp

    @ManyToMany(() => ProjectRequirementsORM, { eager: true })
    @JoinTable()
    ProjectRequirement: ProjectRequirementsORM[]

    @ManyToMany(() => ProjectMemberORM, { eager: true })
    @JoinTable()
    ProjectMember: ProjectMemberORM[]

}