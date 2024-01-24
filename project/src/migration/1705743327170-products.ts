// import { MigrationInterface, QueryRunner } from "typeorm";

// export class Products1705743333808 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class Products1705743327170 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'name', type: 'varchar', length: '50', isNullable: false },
          { name: 'weight', type: 'int', isNullable: false },
          { name: 'quantity', type: 'int', isNullable: false },
          { name: 'price', type: 'int', isNullable: true },
          { name: 'collection', type: 'varchar', length: '20', isNullable: false },
          { name: 'description', type: 'longtext', isNullable: true },
          { name: 'size', type: 'enum', enum: ['ExtraLarge', 'ExtraSmall', 'Small', 'Medium', 'Large'], isNullable: true },
          { name: 'category_id', type: 'int', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('products');
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('category_id') !== -1);
    await queryRunner.dropForeignKey('products', foreignKey);
    await queryRunner.dropTable('products');
  }
}
