import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Shoes } from ".";

@Entity()
export class ShoeSex {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Shoes, (shoe) => shoe.shoeSex)
  shoes: Shoes[];
}
