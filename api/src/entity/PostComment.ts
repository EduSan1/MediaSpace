import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostORM } from "./Post";
import { UserORM } from "./User";

@Entity({ name: "tb_post_comment" })
export class PostCommentORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    comment: string

    @Column({ default: true })
    is_active: boolean

    @ManyToOne(() => PostORM, post => post.comments)
    post: PostORM

    @ManyToOne(() => UserORM, user => user.comments)
    user: UserORM

}