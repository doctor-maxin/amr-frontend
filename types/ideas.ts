export type IIdeaItem = {
    id: number
    type: 'news' | 'projects' | 'ideas';
    post: {
        title: string;
        text: string;
        date: string;
    }
    image: string;
    link: string;
}