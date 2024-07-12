export interface IFeaturePodcast {
    id: number;
    title: string;
    published_date: string;
    slug:string
}

export interface IAbout {
    about: string;
    about_html: string;
    apple_podcast: string;
    featured_podcast: IFeaturePodcast[]
    google_podcast: string;
    intro_description: string;
    intro_description_html: string;
    intro_title: string;
    logo?: File
    name: string;
    podcast_title: string;
    spotify_podcast: string;
}

export interface IList {
    id: number;
    title: string;
    summary: string;
    published_date: string;
    slug: string;
}

export interface IRead {
    published_date: string;
    published_link?: string;
    title: string;
    body?: string;
    body_html: string;
    slug?: string;
}
