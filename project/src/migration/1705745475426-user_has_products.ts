// import { MigrationInterface, QueryRunner } from "typeorm";

// export class UserHasProducts1705745475426 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserHasProducts1705745475426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_has_products',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'user_Id', type: 'int', isNullable: false },
          { name: 'product_Id', type: 'int', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'user_has_products',
      new TableForeignKey({
        columnNames: ['user_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'user_has_products',
      new TableForeignKey({
        columnNames: ['product_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user_has_products');

    const foreignKeyUserId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_Id') !== -1);
    await queryRunner.dropForeignKey('user_has_products', foreignKeyUserId);

    const foreignKeyProductId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_Id') !== -1);
    await queryRunner.dropForeignKey('user_has_products', foreignKeyProductId);

    await queryRunner.dropTable('user_has_products');
  }
}
