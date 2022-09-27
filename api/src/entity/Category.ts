import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategorySubCategoryORM } from "./CategorySubCategory";

@Entity({name : "tb_category"})
export class CategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    name: string

    @Column()
    icon: string

    @OneToMany(() => CategorySubCategoryORM, categorySubCategory => categorySubCategory.category )
    category_sub_category : CategorySubCategoryORM
    
    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}