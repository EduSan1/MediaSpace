import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategorySubCategoryORM } from "./CategorySubCategory";

@Entity({name : "tb_sub_category"})
export class SubCategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    name: string

    @OneToMany(() => CategorySubCategoryORM, categorySubCategory => categorySubCategory.sub_category )
    category_sub_category : CategorySubCategoryORM

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}