export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    articles: [{ type: string }];
    favorites: [{ type: string }];
    token : Promise<string>;
}