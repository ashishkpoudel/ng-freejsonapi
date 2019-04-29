import { User } from './user.model';

export interface Post {
    id: number;
    title: string;
    slug: string;
    body: string;
    featured_image: string;
    user: User;
}