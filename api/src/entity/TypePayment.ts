import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectManagementORM } from "./ProjectManagement";

@Entity({ name: "tb_type_payment" })
export class TypePaymentORM {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 100 })
    type: string

    @OneToMany(() => ProjectManagementORM, management => management.payment_type)
    project_management: ProjectManagementORM
}