import { Order } from 'src/order/entities/order.entity';
import { UserHasPaymentOptions } from 'src/user_has_payment_options/entities/user_has_payment_option.entity';
import { UserHasProducts } from 'src/user_has_products/entities/user_has_product.entity';
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 50, unique: true, nullable: false })
  email: string;

  @Column({ type: 'date', nullable: false })
  dateOfBirth: Date;

  @Column({ length: 10, nullable: false })
  mobileNo: string;

  @Column({ length: 20, nullable: false })
  password: string;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @OneToMany(() => UserHasPaymentOptions, userHasPaymentOptions => userHasPaymentOptions.user)
  paymentOptions: UserHasPaymentOptions[];

  @OneToMany(() => UserHasProducts, user_has_product => user_has_product.user)
  user_has_products: UserHasProducts[];

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: "timestamp", nullable: true })
  deletedAt: Date;


}