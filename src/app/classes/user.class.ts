export class User {
    credentials: Credentials = new Credentials();
    first_name: string;
    last_name: string;
    token: string;
}

export class Credentials{
    email: string;
    password: string;

}