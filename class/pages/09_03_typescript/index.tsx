export default function TypeScriptPage() {

    // 문자타입 - 타입 추론
    let aaa = "안녕하세요"
    aaa = 3

    // 문자타입
    let bbb: string;
    bbb = "반갑습니다."
    bbb = 123
    
    let ccc: number = 5
    ccc = "123"

    // 배열 타입
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
    ddd = ["asdf", " asdt"]
    let eee : string[] = ["a", "v", "g"]
    // 유니온 타입
    let fff: (number[] | string[]) = [1,2,3,4,5,6]
    fff= ["a", "v", "g"]
    let ggg: (number | string)[] = [1, "b", 2, "c"]

    // 객체 타입
    interface IProfile {
        name : string
        age : number | string
        school : string
    }

    let profile:IProfile = {
        name:"철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.school = 3
    profile.age = 8 
    profile.age = "8살" 




    return (
        <div>타입스크립트 연습</div>

    )
}