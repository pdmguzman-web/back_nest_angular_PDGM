import { User } from "../../users/entities/user.entity.js";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    detalle: string;

    @ManyToMany(() => User)
    @JoinTable({ name: 'role_user' })
    users: Relation<User[]>;
}