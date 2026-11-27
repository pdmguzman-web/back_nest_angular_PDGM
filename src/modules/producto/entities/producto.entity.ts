import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity.js";
import { Categoria } from "../../categoria/entities/categoria.entity.js";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    image: string;

    @Column()
    descripción: string;

    @Column()
    estado: boolean;

    @ManyToOne(() => Categoria, (cat) => cat.producto)
    categoria: Relation<Categoria>;

    @OneToMany(() => PedidoProducto, (pedprod) => pedprod.producto)
    pedidoProducto: Relation<PedidoProducto[]>;
}