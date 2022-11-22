import { Entity, PrimaryGeneratedColumn, ManyToMany, Column, CreateDateColumn, Timestamp, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { GenderORM } from "./Gender"
import { MemberORM } from "./Member"
import { PhoneORM } from "./Phone"
import { PostCommentORM } from "./PostComment"
import { ProjectORM } from "./Project"
import { ProjectMemberORM } from "./ProjectMember"
import { UserTeamORM } from "./UserTeam"
import { DeliveryORM } from "./Delivery"

@Entity({ name: "tb_user" })
export class UserORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    first_name: string

    @Column({ length: 150 })
    last_name: string

    @Column({ length: 25 })
    nickname: string

    @Column()
    birth_date: Date

    @Column({ length: 11 })
    cpf: string

    @Column({ length: 255 })
    mail: string

    @Column({ length: 255 })
    password: string

    @Column({ nullable: true, length: 500 })
    biography: string

    @Column()
    profile_picture: string

    @Column({ default: true })
    is_active: boolean

    @Column({ default: false })
    is_authenticated: boolean

    @ManyToOne(() => GenderORM, gender => gender.users, { eager: true })
    gender: GenderORM

    @OneToOne(() => PhoneORM, phone => phone.user, { eager: true })
    phone: PhoneORM

    @OneToMany(() => UserTeamORM, userTeam => userTeam.user, { eager: true })
    teams: UserTeamORM[]

    @OneToMany(() => ProjectORM, project => project.user)
    projects: ProjectORM[]

    @OneToMany(() => MemberORM, member => member.user)
    interest: MemberORM[]

    @OneToMany(() => ProjectMemberORM, projectMember => projectMember.member, { eager: true })
    project_member: ProjectMemberORM[]

    @OneToMany(() => PostCommentORM, comment => comment.post)
    comments: PostCommentORM[]
    @ManyToMany(() => DeliveryORM, delivery => delivery.user)
    delivery: DeliveryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp


}