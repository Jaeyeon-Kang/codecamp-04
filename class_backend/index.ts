// console.log("Hello world!!!");

//여기가 백엔드죠? 여기서 데이터베이스와 연결해볼게요.
//createConnection 가지고 연결을 해볼게요. typeorm독스가 있으니 거기서 어떻게 연결하는지 나와있습니다.
//우리는 mysql이랑 연결할거죠? 하나의 컴퓨터에 여러개의 서버프로그램을 시킬 수 없어요. 포트가 중복되면 안돼서... 우리는 각자 자신의 포트번호를 입력해줘야해요.
//mysql소스번호를 써서 위치를 알려줘야합니다. entities에서 알려줄 때 언더바 두개+디렉토리네임(dirname) + 현재 위치에 있는 모든 파일, 근데 mysql.ts라고 끝나는 모든 파일을 적으면 됩니다.

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      // 어쩌구 저쩌구(데이터베이스에서 게시물데이터 꺼내오기)
      const result = await Board.find({ where: { isDeleted: false } });
      console.log(result);
      return result;
    },
  },

  Mutation: {
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 정상적으로 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      //어쩌구 저쩌구(데이터베이스에 게시물데이터 등록하기)

      // 첫번째 방법
      // await Board.insert({
      //   title: "안녕하세요! 테스트입니다!",
      //   writer: "짱구",
      //   age: 8,
      // });

      // 두번째 방법
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      // 세번째 방법
      await Board.insert({
        ...args.createBoardInput,
      });
      return "게시물 등록에 성공하였습니다";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3302,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공시 실행하기
    console.log("연결 완료!");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행하기
    console.log(error);
  });
