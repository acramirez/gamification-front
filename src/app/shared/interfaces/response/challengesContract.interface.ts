export interface ChallengesContract {
    challenges:     Challenge[];
    missions:       Mission[];
    challengeCount: string;
    missionsCount:  string;
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
}

export interface Mission {
    id:                    string;
    mandatoryChallenges:   string[];
    specialChallenges:    string[];
    acceleratorChallenges: string[];
    creditIncrease:        boolean;
}
