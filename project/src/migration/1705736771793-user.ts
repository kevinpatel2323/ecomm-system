import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm"; // Removed "ForeignKey" import as it's not used

export class User1705736771793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          { // Removed "new" before "Column" here and for other columns
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar" ,isNullable: false },
          { name: "email", type: "varchar", isNullable: false, isUnique: true },
          { name: "dateOfBirth", type: "date", isNullable: false },
          { name: "mobileNo", type: "varchar",  isNullable: false },
          { name: "password", type: "varchar",  isNullable: false },
          {
            name: "createdAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
          { name: "deletedAt", type: "timestamp", isNullable: true },
        ],
      }),
      true 
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
