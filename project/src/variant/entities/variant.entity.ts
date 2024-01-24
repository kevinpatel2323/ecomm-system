import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { currency_enum } from './currency.enum';

@Entity('variants')
export class Variant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  product_Id: number;

  @Column({ type: 'int', nullable: false })
  itemPrice: number;

  @Column({ type: 'enum', enum: currency_enum })
  currency: currency_enum;

  @Column({ type: 'int', nullable: false })
  SKU: number;

  @ManyToOne(() => Product, product => product.variants)
  @JoinColumn({ name: 'product_Id' })
  product: Product;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
