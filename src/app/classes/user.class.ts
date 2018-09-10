export class User {
    credentials: Credentials = new Credentials();
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    phone: string;
    genre: number;
    profil: string;
    cni: string;
}

export class Credentials{
    username: string;
    password: string;
    token: string;
}