import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Shoes } from "./Shoes";

@Entity()
export class ShoeCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Shoes, (shoes) => shoes.category)
  shoes: Shoes;
}
