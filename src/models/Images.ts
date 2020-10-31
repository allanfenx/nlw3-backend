import {ManyToOne ,Entity, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import Orphanage from "../models/Orphanages";


@Entity('images')
export default class Image {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

   @ManyToOne(() => Orphanage, orphanage => orphanage.images)
   @JoinColumn({name: 'orphanage_id'})
   orphanage: Orphanage;
}