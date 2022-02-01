import { MouseEventHandler } from "react";

export interface ItemWrapperProps{
    isEdit: boolean;
    active: any;
    data: any;
    onClickMarketDetail: MouseEventHandler<HTMLDivElement> | undefined;
    onClickBasket: any;
    el: any
    props: any;
}