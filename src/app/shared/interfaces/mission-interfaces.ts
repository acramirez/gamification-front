import { Challenge } from "./response/challengesContract.interface";

export interface MissionInterfaces {
    id:string,
    status?:boolean,
    cut_of_date?:Date,
    challenges?:Challenge[],
    timer?:boolean
}

