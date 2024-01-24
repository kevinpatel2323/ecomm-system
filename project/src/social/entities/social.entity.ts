import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('socials')
export class Social {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  product_Id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  key: string;

  @Column({ type: 'varchar', length: 20, nullable: false })
  value: string;

  @ManyToOne(() => Product, product => product.socials)
  @JoinColumn({ name: 'product_Id' })
  product: Product;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
}
