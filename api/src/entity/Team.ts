import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn, ManyToOne, OneToOne, Double, OneToMany, ManyToMany, JoinColumn } from "typeorm"
import { CategorySubCategoryORM } from "./CategorySubCategory"
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
    is_personal : boolean

    @OneToMany(() => UserTeamORM, userTeam => userTeam.team)
    teamUser : UserTeamORM[]

    @ManyToMany(() => CategorySubCategoryORM, categories_sub_categories => categories_sub_categories.team)
    @JoinColumn()
    categories_sub_categories : CategorySubCategoryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp


}