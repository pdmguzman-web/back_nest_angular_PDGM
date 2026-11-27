import type { Persona } from '../../persona/entities/persona.entity.js';
import { type Relation } from 'typeorm';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    persona: Relation<Persona>;
}
