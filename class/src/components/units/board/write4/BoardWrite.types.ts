import { ChangeEvent } from "react"

export interface IMyVariables {
    number: number,
    writer?: string,
    title?: string,
    contents?: string
    //writer, title, contents는 필수가 아니다 라고 말해주는 것
}

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}

export interface IBoardWriteUIProps {
    aaa: (event: ChangeEvent<HTMLInputElement>) => void
    bbb: (event: ChangeEvent<HTMLInputElement>) => void
    ccc: (event: ChangeEvent<HTMLInputElement>) => void
    zzz: () => void
    qqq: boolean
    xxx: () => void
    data: any
    isEdit: boolean
}

export interface IMyButtonProps {
    qqq: boolean
}