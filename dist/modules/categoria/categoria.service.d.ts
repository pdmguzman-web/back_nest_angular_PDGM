import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    create(createCategoriaDto: CreateCategoriaDto): string;
    findAll(): Promise<Categoria[]>;
    findOne(id: number): string;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
