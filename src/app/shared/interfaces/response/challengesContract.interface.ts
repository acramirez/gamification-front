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
    title:        string;
    subtitle?:    string;
    description?: string;
    specs?:        Array<SpecClass>;
    conditions?:  string[];
    icon:        string;
    redirection?: boolean;
    status?:     boolean;
    type?:typeChallenge
}

export enum typeChallenge{
    mandatory='mandatory',
    special='special',
    accelerator='accelerator',
}

export interface SpecClass {
    title?: string;
    spec?:  string[];
}

export interface Mission {
    id:                    string;
    mandatoryChallenges:   string[];
    specialChallenges:    string[];
    acceleratorChallenges: string[];
    creditIncrease:        boolean;
}
