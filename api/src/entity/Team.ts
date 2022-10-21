import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { CategoryORM } from "./Category"
import { InterestORM } from "./Interest"
import { SubCategoryORM } from "./SubCategory"
import { TeamProjectManagementORM } from "./TeamProjectManagement"
import { UserTeamORM } from "./UserTeam"

@Entity({ name: "tb_team" })
export class TeamORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    name: string

    @Column({ length: 25 })
    nickname: string

    @Column({ length: 500, nullable: true })
    description: string

    @Column()
    profile_picture: string

    @Column()
    general_evaluation: number

    @Column({ default: true })
    status: boolean

    @Column({ default: true })
    is_active: boolean

    @Column({ default: true })
    is_freelancer: boolean

    @OneToMany(() => UserTeamORM, userTeam => userTeam.team)
    users: UserTeamORM[]

    @ManyToMany(() => CategoryORM, { eager: true })
    @JoinTable()
    categories: CategoryORM[]

    @ManyToMany(() => SubCategoryORM, { eager: true })
    @JoinTable()
    sub_categories: SubCategoryORM[]

    @OneToMany(() => TeamProjectManagementORM, teamProjectManagement => teamProjectManagement.team)
    team_project_management: TeamProjectManagementORM[]

    @OneToMany(() => InterestORM, interestMember => interestMember.project)
    interest: InterestORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp


}