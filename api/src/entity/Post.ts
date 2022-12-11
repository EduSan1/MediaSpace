import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryORM } from "./Category";
import { PostCommentORM } from "./PostComment";
import { PostImageORM } from "./PostImage";
import { SubCategoryORM } from "./SubCategory";
import { TeamORM } from "./Team";

@Entity({ name: "tb_post" })
export class PostORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => TeamORM, team => team.posts)
    team: TeamORM

    @OneToMany(() => PostImageORM, image => image.post, { eager: true })
    images: PostImageORM[]

    @OneToMany(() => PostCommentORM, comment => comment.post)
    comments: PostCommentORM[]

    @ManyToMany(() => CategoryORM, { eager: true })
    @JoinTable()
    categories: CategoryORM[]

    @ManyToMany(() => SubCategoryORM)
    @JoinTable()
    sub_categories: SubCategoryORM[]
}