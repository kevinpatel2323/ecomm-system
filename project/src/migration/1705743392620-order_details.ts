// import { MigrationInterface, QueryRunner } from "typeorm";

// export class OrderDetails1705743367372 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class OrderDetails1705743392620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order_details',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'order_id', type: 'int', isNullable: false },
          { name: 'product_Id', type: 'int', isNullable: false },
          { name: 'address_Id', type: 'int', isNullable: false },
          { name: 'received_at', type: 'timestamp', isNullable: true },
          { name: 'transmitted_at', type: 'timestamp', isNullable: true },
          { name: 'order_price', type: 'int', isNullable: false },
          { name: 'deliveryCharges', type: 'int', isNullable: false },
          { name: 'taxes', type: 'int', isNullable: false },
          { name: 'total', type: 'int', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'order_details',
      new TableForeignKey({
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'order_details',
      new TableForeignKey({
        columnNames: ['product_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'order_details',
      new TableForeignKey({
        columnNames: ['address_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_has_addresses',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('order_details');

    const foreignKeyOrderId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('order_id') !== -1);
    await queryRunner.dropForeignKey('order_details', foreignKeyOrderId);

    const foreignKeyProductId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_Id') !== -1);
    await queryRunner.dropForeignKey('order_details', foreignKeyProductId);

    const foreignKeyAddressId = table.foreignKeys.find((fk) => fk.columnNames.indexOf('address_Id') !== -1);
    await queryRunner.dropForeignKey('order_details', foreignKeyAddressId);

    await queryRunner.dropTable('order_details');
  }
}
