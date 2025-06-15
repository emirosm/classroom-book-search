export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

export interface BookDetail {
  title: string;
  description?: string | { value: string };
  first_publish_date?: string;
  key: string;
  covers?: number[];
  authors?: {
    author: { key: string };
  }[];
  links?: {
    title: string;
    url: string;
  }[];
  subject_places?: string[];
  subjects?: string[];
  subject_people?: string[];
  subject_times?: string[];
  excerpts?: {
    excerpt: string;
    comment?: string;
  }[];
}
