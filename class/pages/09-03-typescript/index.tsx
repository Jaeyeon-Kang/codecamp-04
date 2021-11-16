export default function TypescriptPage(){

    // 문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3

    // 문자타입
    let bbb: string;
    bbb = "반갑습니다"
    bbb = 123

    // 숫자타입
    let ccc: number = 5
    ccc = "asdf"

    // 숫자배열
    let ddd: number[] = [1, 2, 3, 4, 5]
    ddd = ["asdf", "qwer", "zxcv"]
    
    // 문자배열
    let eee: string[]= ["a", "b", "c", "d"]
    eee = [1, 2, 3, 4, 5]

    // 숫자배열 or 문자배열
    // number[] | string[] union 타입
    let fff: number[] | string[] = [1, 2, 3, 4, 5] // | 표시가 왜 하나임?
    fff = ["a", "b", "c"]
    fff = [1, "b", 3]

    // 숫자와 문자 배열
    let ggg: (number | string)[] = [1, "b", 3]
    ggg = ["a", "b", "c"]
    ggg = [1, 2, 3]

    // 객체
    interface IProfile {
        name: string
        age: number
        school: string
    }
    
    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.age = "8살"
    profile.school = 3

    // 모두
    let hhh: any = 3
    hhh = "3"
    hhh = ["A"]
    hhh = [1]
    hhh = {
        abc: "A"
    }

    return <div>타입스크립트 연습!!!!</div>
    
}