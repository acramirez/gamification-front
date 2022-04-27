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
}

export interface Challenge {
    id:          string;
    name:        string;
    description: string;
    specs:       string[];
    conditions:  string[];
    redirection: boolean;
}

export interface Mission {
    id:                    string;
    mandatoryChallenges:   string[];
    optionalChallenges:    string[];
    acceleratorChallenges: string[];
    creditIncrease:        boolean;
}
