import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from ".";

@Entity()
export class ShoeSize {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Inventory, (inventory) => inventory.shoeSize)
  inventory: Inventory[];
}
