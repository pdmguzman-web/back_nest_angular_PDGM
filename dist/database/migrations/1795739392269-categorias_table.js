export class CategoriasTable1795739392269 {
    name = 'CategoriasTable1795739392269';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "categoria"`);
    }
}
//# sourceMappingURL=1795739392269-categorias_table.js.map