export class Article {
    _id: string;
    title: string;
    description: string;
    body: string;
    favorites: [{ type: string }];
    favoriteCount: { type: number, default: 0 };
    author: string;
    createdAt : Date;   
};