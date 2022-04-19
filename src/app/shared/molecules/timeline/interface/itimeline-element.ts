export interface ITimeLineElement{
    text:string,
    status?:statusElement
}

export enum statusElement{
    ONGOING='ONGOING',
    COMPLETE='COMPLETE',
    NEXT='NEXT'
}