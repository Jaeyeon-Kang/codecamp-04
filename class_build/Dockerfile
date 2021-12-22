FROM node:16
#  이거 한줄이면 yarn까지 설치되어 있다는 것!

WORKDIR /class_build/ 
COPY  ./package.json /class_build/
COPY ./yarn.lock /class_build
RUN yarn install
RUN yarn build:ssr

CMD yarn start

# 자 여기에다가 뭘 할거냐면 이게 가상컴퓨터인거죠. 왼쪽은 내 vscode이고. 오른쪽은 docker 내부 가상컴퓨터에요.
# 여기에 작성하는 것이 도커 내부에요. yarn start를 도커 안에서 실행할거에요.
# 그러려면 어떻게 해주셔야하냐면 밖에있는 소스코드를 docker안에 집어넣을거에요.
# 1. vscode소스를 docker 안에 복사.
# 그 다음에 node_modules가 좀 문제가 돼요. 얘는 yarn install하게 되면 생기는 애에요. 여러분이 직접 yarn install 하게 되면 밖에 있는 얘를 가지고 오면 이걸 할 의미가 없어져요. 그래서 얘는 가져오지 않고 docker내부에서 yarn install을 하게 됩니다. 이 안에서 yarn install을 할거에요.
# 2. yarn install
# 3. yarn start
# 한마디로 내 운영체제 그런거 신경 안쓴다는거죠. 내 운영체제가 무엇이든 무조건 16으로 통일한다는 것이죠. 그래서 실제 실무에서는 도커를 다 쓰시는 거에요. 실무 가시면 일단 docker파일부터 세팅하시는 거에요. 자 이렇게 1번 2번 3번 같이 한번 해보겠습니다.
 
