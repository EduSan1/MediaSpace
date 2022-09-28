import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";

@Entity({name : "tb_subcategory"})
export class SubCategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({length : 50})
    name: string

    @ManyToOne(() => CategoryORM, category => category.subCategory)
    category: CategoryORM

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}