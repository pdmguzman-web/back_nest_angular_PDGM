import { CategoriaService } from './categoria.service.js';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    create(createCategoriaDto: CreateCategoriaDto): string;
    findAll(): Promise<import("./entities/categoria.entity.js").Categoria[]>;
    findOne(id: string): string;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
