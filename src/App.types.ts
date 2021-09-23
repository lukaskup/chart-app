export interface Post{
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}

interface Address{
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: Geo;
}

interface Company{
    bs: string;
    catchPhrase: string;
    name: string;
}

interface Geo{
    lat: string;
    lng: string;
}