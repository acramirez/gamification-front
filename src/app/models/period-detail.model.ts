
export class PeriodDetail {

    constructor(
        private period_id: string,
        private initial_date: Date,
        private due_date: Date,
        private status: string,
    ) {}
    
}