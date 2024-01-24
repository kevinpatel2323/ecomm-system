import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Product } from '../../product/entities/product.entity';
import { UserHasAddresses } from '../../user_has_addresses/entities/user_has_address.entity';

@Entity('order_details')
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.orderDetails)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, product => product.orderDetails)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => UserHasAddresses, address => address.orderDetails)
  @JoinColumn({ name: 'address_id' })
  user_has_addresses: UserHasAddresses;

  @Column({ type: 'timestamp', nullable: true })
  received_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  transmitted_at: Date;

  @Column({ type: 'int' })
  order_price: number;

  @Column({ type: 'int', nullable: true })
  deliveryCharges: number;

  @Column({ type: 'int', nullable: true })
  taxes: number;

  @Column({ type: 'int', nullable: true })
  total: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
