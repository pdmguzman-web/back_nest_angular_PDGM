import { Producto } from '../../producto/entities/producto.entity.js';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre:string;

  @Column()
  descripcion:string;

  @OneToMany(()=>Producto, (prod)=>prod.categoria)
  producto:Producto[]

  
}
