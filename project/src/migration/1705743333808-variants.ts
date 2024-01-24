// import { MigrationInterface, QueryRunner } from "typeorm";

// export class Variants1705743327170 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Variants1705743333808 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'variants',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'product_Id', type: 'int', isNullable: false },
          { name: 'itemPrice', type: 'int', isNullable: false },
          { name: 'currency', type: 'enum', enum: ['USD', 'INR', 'GBP', 'EUR', 'CNY', 'BTC'], isNullable: false },
          { name: 'SKU', type: 'int', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'variants',
      new TableForeignKey({
        columnNames: ['product_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('variants');
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_Id') !== -1);
    await queryRunner.dropForeignKey('variants', foreignKey);
    await queryRunner.dropTable('variants');
  }
}
