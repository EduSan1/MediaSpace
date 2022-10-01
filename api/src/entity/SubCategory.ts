import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { TeamORM } from "./team";

@Entity({name : "tb_subcategory"})
export class SubCategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    name: string

    @Column({default : true})
    is_active : boolean

    @ManyToOne(() => CategoryORM, category => category.subCategory)
    category: CategoryORM

    @ManyToMany(() => TeamORM)
    teams : TeamORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}