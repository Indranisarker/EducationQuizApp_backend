import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizquestions')
export class Questions {
    @PrimaryGeneratedColumn('increment', {name:'id'})
    readonly id?:number;

    @Column('varchar',{length:255, name:'select_course', nullable:false})
    readonly select_course : string
    @Column('varchar',{length:255, name:'question', nullable:false})
    readonly question : string
    @Column('varchar',{length:255, name:'option1', nullable:false})
    readonly option1 : string
    @Column('varchar',{length:255, name:'option2', nullable:false})
    readonly option2 : string
    @Column('varchar',{length:255, name:'option3', nullable:false})
    readonly option3 : string
    @Column('varchar',{length:255, name:'option4', nullable:false})
    readonly option4 : string
    @Column('varchar',{length:255, name:'correctAnswer', nullable:false})
    readonly correctAnswer : string
  

}