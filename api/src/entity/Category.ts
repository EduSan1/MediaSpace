import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { SubCategoryORM } from "./SubCategory";

@Entity({name : "tb_category"})
export class CategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    name: string

    @Column()
    icon: string

    @OneToMany(() => SubCategoryORM, subCategory => subCategory.category, {eager: true})
    subCategory: SubCategoryORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}