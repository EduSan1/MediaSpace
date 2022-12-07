import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { TeamORM } from "./Team";

@Entity({ name: "tb_subcategory" })
export class SubCategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => CategoryORM, category => category.sub_categories)
    category: CategoryORM

    @ManyToMany(() => TeamORM)
    teams: TeamORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}