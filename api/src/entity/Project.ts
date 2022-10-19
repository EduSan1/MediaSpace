import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { InterestORM } from "./Interest";
import { ProjectAttachmentORM } from "./ProjectAttachment";
import { ProjectImageORM } from "./ProjectImage";
import { ProjectManagementORM } from "./ProjectManagment";
import { ProjectRequirementsORM } from "./ProjectRequirements";
import { SubCategoryORM } from "./SubCategory";
import { UserORM } from "./User";

@Entity({ name: "tb_project" })
export class ProjectORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 800 })
    description: string

    @Column({ type: "double" })
    estimated_value: number

    @Column()
    estimated_deadline: Date

    @Column({ nullable: true })
    finish_project_date: Date

    @Column({ nullable: true })
    start_project_date: Date

    @Column({ default: true })
    is_active: boolean

    @Column({ default: "AWAITING_START" })
    status: "AWAITING_START" | "IN_EXECUTION" | "COMPLETE" | "CANCELED"

    @ManyToOne(() => UserORM, user => user.projects)
    user: UserORM

    @ManyToMany(() => CategoryORM, { eager: true })
    @JoinTable()
    categories: CategoryORM[]

    @ManyToMany(() => SubCategoryORM)
    @JoinTable()
    sub_categories: SubCategoryORM[]

    @OneToMany(() => ProjectImageORM, image => image.project, { eager: true })
    images: ProjectImageORM[]

    @OneToMany(() => ProjectAttachmentORM, attachments => attachments.project)
    attachments: ProjectAttachmentORM[]

    @OneToMany(() => ProjectManagementORM, managment => managment.project)
    management: ProjectManagementORM[]

    @OneToMany(() => InterestORM, interestMember => interestMember.project)
    interest: InterestORM[]

    @OneToMany(() => ProjectRequirementsORM, projectRequirements => projectRequirements.project)
    requirements: ProjectRequirementsORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}