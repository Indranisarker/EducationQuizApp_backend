import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('announcement')
export class Announcement {
    @PrimaryGeneratedColumn('increment', {name:'id'})
    readonly id?:number;

    @Column('varchar',{length:255, name:'courseTitle', nullable:false})
    readonly courseTitle : string
    @Column('varchar',{length:255, name:'announcement', nullable:false})
    readonly announcement : string
    @Column({ type: 'date', name: 'date', nullable: false })
    readonly date: Date;

}