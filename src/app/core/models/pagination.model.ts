export class Pagination {
    total: number
    count: number
    per_page: number
    current_page: number
    total_pages: number
    links: { next: string; previous: string }

    static fromJson(data: any) {
        let pagination = new Pagination;
        pagination.total = data.total;
        pagination.count = data.count;
        pagination.per_page = data.per_page;
        pagination.current_page = data.current_page;
        pagination.total_pages = data.total_pages;
        pagination.links = { next: data.links.next, previous: data.links.previous };
        return pagination;
    }
}