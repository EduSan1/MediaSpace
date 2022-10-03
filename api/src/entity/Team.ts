import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn, ManyToOne, OneToOne, Double, OneToMany, ManyToMany, JoinColumn, JoinTable } from "typeorm"
import { CategoryORM } from "./Category"
import { SubCategoryORM } from "./SubCategory"
import { UserTeamORM } from "./UserTeam"

@Entity({name : "tb_team"})
export class TeamORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 100})
    name : string
    
    @Column({length : 25})
    nickname : string

    @Column({length : 500, nullable: true})
    description : string
    
    @Column()
    profile_picture : string

    @Column()
    general_evaluation : number
    
    @Column({default : true})
    status : boolean

    @Column({default : true})
    is_active : boolean

    @Column({default : false})
    is_freelancer : boolean

    @OneToMany(() => UserTeamORM, userTeam => userTeam.team, {eager : true})
    users : UserTeamORM[]

    @ManyToMany(() => CategoryORM, {eager : true})
    @JoinTable()
    categories : CategoryORM[]

    @ManyToMany(() => SubCategoryORM, {eager : true})
    @JoinTable() 
    sub_categories : SubCategoryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp


}