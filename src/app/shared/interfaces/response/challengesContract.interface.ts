export interface ChallengesContract {
    challenges:     Challenge[];
    missions:       Mission[];
    challengeCount: number;
    missionsCount:  number;
    FAQ:            FAQ[];
}

export interface FAQ {
    question:       string;
    answer:         string;
    additionalInfo: string;
    link:           string
}

export interface Challenge {
    id:          string;
    name:        string;
    description: string;
    specs:       string[];
    conditions:  string[];
    icon:        string;
    redirection: boolean;
    status?:     boolean;
    accelerator?:boolean
}

export interface Mission {
    id:                    string;
    mandatoryChallenges:   string[];
    specialChallenges:    string[];
    acceleratorChallenges: string[];
    creditIncrease:        boolean;
}
