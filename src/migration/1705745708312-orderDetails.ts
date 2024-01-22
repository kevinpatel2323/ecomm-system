import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OrderDetails1705745708312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orderDetails',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'orderId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'productId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'addressId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'receivedAt',
            type: 'timestamp',
          },
          {
            name: 'transmittedAt',
            type: 'timestamp',
          },
          {
            name: 'orderPrice',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'deliveryCharges',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'taxes',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'total',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'orderDetails',
      new TableForeignKey({
        name: 'FkOrderId',
        columnNames: ['orderId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
      }),
    );
    // await queryRunner.createForeignKey(
    //   'orderDetails',
    //   new TableForeignKey({
    //     name: 'FkProductId',
    //     columnNames: ['productId'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'products',
    //     onDelete: 'CASCADE',
    //   }),
    // );

    await queryRunner.createForeignKey(
      'orderDetails',
      new TableForeignKey({
        name: 'FkAddressId',
        columnNames: ['addressId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'userHasAddress',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orderDetails', 'FkOrderId');
    // await queryRunner.dropForeignKey('orderDetails', 'FkProductId');
    await queryRunner.dropForeignKey('orderDetails', 'FkAddressId');
    await queryRunner.dropTable('orderDetails');
  }
}
