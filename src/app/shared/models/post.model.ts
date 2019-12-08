export class Post {
    id: number;
    post_author?: number;
    post_date?: string;
    post_content?: string;
    post_title?: string;
    post_status?: string; //should probably be made into an enum
    post_modified?: string;
    menu_order?: number;
    post_type?: string; //enum
}