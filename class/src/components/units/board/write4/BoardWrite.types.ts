import { ChangeEvent } from "react";

 export interface IMyVariables {
    number: number;
    writer?: string,
    title?: string,
    contents?: string
}

export interface IBoardWriteUIProps {
    aaa:(event: ChangeEvent<HTMLInputElement>) => void
    bbb:(event: ChangeEvent<HTMLInputElement>) => void
    ccc:(event: ChangeEvent<HTMLInputElement>) => void
    qqq:(event: ChangeEvent<HTMLInputElement>) => void
    zzz:() => void
    MyQqq: boolean
    isEdit: boolean
    xxx:() => void
    data: any
  
  }
  
export interface IBoardWriteProps {
    isEdit: boolean
    data? :any
}

export interface IMybuttonProps {
    qqq:boolean
}