import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostORM } from "./Post";

@Entity({ name: "tb_post_image" })
export class PostImageORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    url: string

    @ManyToOne(() => PostORM, post => post.images)
    post: PostORM


}