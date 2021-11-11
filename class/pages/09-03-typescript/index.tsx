export default function TypescriptPage(){
    // 문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    // 문자타입
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123

    //숫자타입
    let ccc: number = 5
    ccc="123"
    let ccc: any = 5 // any는 모든지 다 들어가게 하는 것

    //배열타입
    let ddd: number[] = [1, 2, 3]
    let eee: string[] = ["a", "b", "c", "d"]
    let fff: number[] | string[] = [1,2,3,4,5,6] //타입스크립트에서는 or 표시가 |임 //유니온타입(합집합) 처리: number도 되고 string도 된다
    fff = ["a", "b", "c"]
    let ggg: (number | string)[] = [1, "b", 2, "c"]
    
    //객체타입
    interface IProfile{
        name: string
        age: number| string
        school: string
    }

    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.school = 3
    profile.age = "8살"
    
    
    
    
    
    
    
    return 
        <div> 타임스크립트 연습 </div>

    
}