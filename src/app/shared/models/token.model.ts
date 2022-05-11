export class TokenOauth {
    
    constructor(
        public access_token: string,
        public token_type: string,
        public expires_in: string 
    ) {}

}
export class TokenRequest {

    constructor(
        public grant_type: string,
        public client_id: string,
        public client_secret: string,
        public scope: string
    ) {}

}