import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { SubCategoryORM } from "./SubCategory";
import { TeamORM } from "./team";

@Entity({ name: "tb_category" })
export class CategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 50 })
    name: string

    @Column()
    icon: string

    @Column({ default: true })
    is_active: boolean

    @ManyToMany(() => TeamORM)
    teams: TeamORM[]

    @OneToMany(() => SubCategoryORM, subCategory => subCategory.category, { eager: true })
    sub_categories: SubCategoryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}