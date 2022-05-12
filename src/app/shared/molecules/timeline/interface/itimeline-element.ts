export interface ITimeLine{
    elements:ITimeLine[],
    finalIcon:string,
}

export interface ITimeLineElement{
    principalText?:string,
    secondaryText?:string,
    status?:statusElement
}

export enum statusElement{
    ONGOING='ONGOING',
    COMPLETE='COMPLETE',
    NEXT='NEXT'
}