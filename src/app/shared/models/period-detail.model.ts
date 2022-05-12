
export class PeriodDetail {

    constructor(
        public period_id: string,
        public initial_date: Date,
        public due_date: Date,
        public status: string,
    ) {}
    
}