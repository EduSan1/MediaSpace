import { Column, Entity, OneToMany, ManyToMany, ManyToOne, JoinTable, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from "typeorm";
import { ProjectRequirementsORM } from "./ProjectRequirements";
import { ProjectMemberORM } from "./ProjectMember";
import { DeliveryFileORM } from "./DeliveryFile";
import { UserORM } from "./User";

@Entity({ name: "tb_delivery" })
export class DeliveryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(() => DeliveryFileORM, files => files.delivery, { eager: true })
    files: DeliveryFileORM[]

    @Column({ nullable: true })
    is_accepted: boolean

    @Column({ default: true })
    is_active: boolean

    @CreateDateColumn()
    create_at: Timestamp

    @ManyToMany(() => ProjectRequirementsORM, projectRequirement => projectRequirement.delivery)
    @JoinTable()
    requirements: ProjectRequirementsORM[]

<<<<<<< HEAD
    @ManyToMany(() => UserORM, user => user.delivery, { eager: true })
=======
    @ManyToMany(() => UserORM, user => user.delivery, { eager: true}) 
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
    @JoinTable()
    user: UserORM[]

    // @ManyToMany(() => ProjectMemberORM, { eager: true })
    // @JoinTable()
    // projectMember: ProjectMemberORM[]

}