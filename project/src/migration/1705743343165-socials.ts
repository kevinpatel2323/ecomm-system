// import { MigrationInterface, QueryRunner } from "typeorm";

// export class Socials1705743343165 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Socials1705743343165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'socials',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'product_Id', type: 'int', isNullable: false },
          { name: 'key', type: 'varchar', length: '20', isNullable: false },
          { name: 'value', type: 'varchar', length: '20', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'socials',
      new TableForeignKey({
        columnNames: ['product_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('socials');
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_Id') !== -1);
    await queryRunner.dropForeignKey('socials', foreignKey);
    await queryRunner.dropTable('socials');
  }
}
