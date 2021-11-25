import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date;
}
0;
//여기까지만 해주시면 단지 클래스에 불과해요. 이걸 가지고서 typeorm에게 알려줘야 해요. "야 typeorm아 이걸 클래스로 바꿔줘" 하고 명령어를 줘야함, 그걸 하기 위해 Entity 라는게 있어요 이걸 아주 쉽게 말하자면 테이블인데 Colum이라는 것이 있어요 그것도 넣어야해요
//골뱅이를 decorator라고 해요. typeorm에 entity라는게 내장되어있어요. 데코레이터는 저기 안에 있는 내용들을 column으로 만들어줘 라는 뜻이에요.위 @Entity()는 class안에 있는 내용을 Entity-함수임-로 실행시켜줘 라는 뜻이에요.
//실제 mysql을 연결시켜줘야해요. !는 데이터를 꼭 보여달라는 뜻이에요.
