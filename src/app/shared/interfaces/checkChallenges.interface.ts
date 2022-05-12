export interface statusMissions {
    mission:string,
    challenges?:statusChallenges[]
}

export interface statusChallenges{
    id:string,
    status:boolean
}

