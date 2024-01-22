import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'orderDetails' })
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderId: number;

  @Column()
  productId: number;

  @Column()
  addressId: number;

  @Column()
  receivedAt: Date;

  @Column()
  transmittedAt: Date;

  @Column()
  orderPrice: number;

  @Column()
  deliveryCharges: number;

  @Column()
  taxes: number;

  @Column()
  total: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @OneToOne(() => Product, (product) => product.orderDetail)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
