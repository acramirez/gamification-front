export interface StatusMissions {
    mission:string,
    challenges?:StatusChallenges[],
    status?:boolean
}

export interface StatusChallenges{
    id:string,
    status:boolean
}

