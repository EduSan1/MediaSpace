import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { InterestMemberORM } from "./Interest";
import { ProjectImageORM } from "./ProjectImage";
import { ProjectManagementORM } from "./ProjectManagment";
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
    user: UserORM

    @ManyToMany(() => CategoryORM, { eager: true })
    @JoinTable()
    categories: CategoryORM[]

    @ManyToMany(() => SubCategoryORM, { eager: true })
    @JoinTable()
    sub_categories: SubCategoryORM[]

    @OneToMany(() => ProjectImageORM, image => image.project)
    images: ProjectImageORM[]

    @OneToMany(() => ProjectManagementORM, managment => managment.project)
    management: ProjectManagementORM[]

    @OneToMany(() => InterestMemberORM, interestMember => interestMember.project)
    interest: InterestMemberORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}