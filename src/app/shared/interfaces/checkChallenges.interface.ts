export interface StatusMissions {
    mission:string,
    challenges?:StatusChallenges[]
}

export interface StatusChallenges{
    id:string,
    status:boolean
}

