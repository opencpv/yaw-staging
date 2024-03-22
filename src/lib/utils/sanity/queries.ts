import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`*[_type == 'homepage']{...}`;
export const ABOUT_PAGE_QUERY = groq`*[_type == 'about']{...}`;
export const FAQ_PAGE_QUERY = groq`*[_type == 'faqItem']{...,category->}`;
export const HOW_TO_PAGE_QUERY = groq`*[_type == 'howTo']{title,description,video_url,tags[]->{tag}}`;
export const HOW_TO_TAGS_QUERY = groq`*[_type == 'htags']{...}`;
export const FAQ_CATEGORIES_QUERY = groq`*[_type == 'faqCategory']{...}`;
export const TERMS_QUERY = groq`*[_type == 'terms']{...}`;
export const BLOG_QUERY = groq`*[_type == 'blog']{_id,author->,category->,title,featured_image,date,summary,rating}`;
export const BLOG_CATEGORIES = groq`*[_type == 'category']{...}`;
export const AUTHORS = groq`*[_type == 'author']{...}`;


