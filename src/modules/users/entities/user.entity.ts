import type { Persona } from '../../persona/entities/persona.entity.js';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @OneToOne('Persona', (persona: Persona) => persona.user)
  persona: Relation<Persona>;
}