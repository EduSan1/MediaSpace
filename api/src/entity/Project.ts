import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { InterestORM } from "./Interest";
import { ProjectImageORM } from "./ProjectImage";
import { ProjectManagementORM } from "./ProjectManagement";
import { ProjectRequirementORM } from "./ProjectRequirement";
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
    value: number

    @Column()
    estimated_deadline: Date

    @Column({ nullable: true })
    finish_project_date: Date

    @Column({ nullable: true })
    start_project_date: Date

    @Column({ default: true })
    is_active: boolean

    @Column({ default: "AWAITING_START" })
    status: "AWAITING_START" | "VALIDATING_REQUIREMENTS" | "IN_EXECUTION" | "COMPLETE" | "CANCELED"

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

    @OneToOne(() => ProjectManagementORM, management => management.project)
    management: ProjectManagementORM[]

    @OneToMany(() => InterestORM, interestMember => interestMember.project)
    interest: InterestORM[]

    @OneToMany(() => ProjectRequirementORM, projectRequirement => projectRequirement.project)
    requirements: ProjectRequirementORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}