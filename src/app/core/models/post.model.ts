import { User } from './user.model';

export class Post {
    id: number;
    title: string;
    slug: string;
    body: string;
    featured_image: string;
    user: User;

    static fromJson(data: any) {
        let post = new Post;
        post.id = data.id;
        post.title = data.title;
        post.slug = data.slug;
        post.body = data.body;
        post.featured_image = data.featured_image;
        post.user = User.fromJson(data.user.data)
        return post;
    }
}