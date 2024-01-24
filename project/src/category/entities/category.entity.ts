import { Product } from 'src/product/entities/product.entity';
import {PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Entity, OneToMany} from 'typeorm';

@Entity('category')
export class Category {    
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 20 })
    name: string;

    @OneToMany(() => Product, product => product.category)
    products: Product[];
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
  }
