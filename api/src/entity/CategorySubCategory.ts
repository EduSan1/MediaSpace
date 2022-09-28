import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { SubCategoryORM } from "./SubCategory";
import { TeamORM } from "./team";

@Entity({name : "tb_category_sub_category"})
export class CategorySubCategoryORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => CategoryORM, category => category.category_sub_category, {eager : true})
    category : CategoryORM[]

    @ManyToOne(() => SubCategoryORM, subCategory => subCategory.category_sub_category , {eager : true})
    sub_category : SubCategoryORM[]
    
    @ManyToMany(() => TeamORM, team => team.categories_sub_categories)
    team : TeamORM[]

    @CreateDateColumn()
    create_at: Timestamp

    @UpdateDateColumn()
    update_at: Timestamp

}