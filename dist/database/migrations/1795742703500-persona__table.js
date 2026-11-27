export class Persona_table1795742703500 {
    name = 'Persona_table1795742703500';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "persona"`);
    }
}
//# sourceMappingURL=1795742703500-persona__table.js.map