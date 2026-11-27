import type { User } from '../../users/entities/user.entity.js';
import { type Relation } from 'typeorm';
export declare class Persona {
    id: number;
    nombres: string;
    apellidos: string;
    user: Relation<User>;
}
