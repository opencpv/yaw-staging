import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`*[_type == 'homepage']{...}`;
export const ABOUT_PAGE_QUERY = groq`*[_type == 'about']{...}`;
export const FAQ_PAGE_QUERY = groq`*[_type == 'faqItem']{...,category->}`;
export const HOW_TO_PAGE_QUERY = groq`*[_type == 'howTo']{...}`;
export const HOW_TO_TAGS_QUERY = groq`*[_type == 'htags']{...}`;
export const FAQ_CATEGORIES_QUERY = groq`*[_type == 'faqCategory']{...}`;
export const TERMS_QUERY = groq`*[_type == 'terms']{...}`;
