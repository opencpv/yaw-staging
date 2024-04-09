import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`*[_type == 'homepage']{...}`;
export const ABOUT_PAGE_QUERY = groq`*[_type == 'about']{...}`;
export const FAQ_PAGE_QUERY = groq`*[_type == 'faqItem']{...,category->}`;
export const HOW_TO_PAGE_QUERY = groq`*[_type == 'howTo']{title,description,video_url,tags[]->{tag}}`;
export const HOW_TO_TAGS_QUERY = groq`*[_type == 'htags']{...}`;
export const FAQ_CATEGORIES_QUERY = groq`*[_type == 'faqCategory']{...}`;
export const TERMS_QUERY = groq`*[_type == 'terms']{...}`;
export const BLOG_QUERY = groq`*[_type == 'blog']{_id,author->,category->,title,featured_image,date,summary,rating}`;
export const BLOG_CATEGORY_QUERY = groq`*[_type == 'category']{...}`;
export const AUTHORS = groq`*[_type == 'author']{...}`;
export const SINGLE_BLOG_POST = (id: string) => {
  return groq`*[_type == 'blog' && _id == "${id}"]{...,author->,category->}`;
};
export const SEARCH_BLOG_QUERY = (text: string) => {
  return groq`*[_type == 'blog' &&  title similar(${text}, 0.8)]{...,author->,category->}`;
};
export const PROMOTIONS_QUERY = groq`*[_type == 'promotions']{...}`;

export const CONTACT_US_PAGE_QUERY = groq`*[_type == 'contact'][0] {   general->{     _id,     _type,     title,     images,     pdfDocument,     "pdfUrl": pdfDocument.asset->url,     video   },   reports->{     _id,     _type,     title,     images,     pdfDocument,     "pdfUrl": pdfDocument.asset->url,     video   },   advertise->{     _id,     _type,     title,     images,     pdfDocument,     "pdfUrl": pdfDocument.asset->url,     video   },   writers->{     _id,     _type,     title,     images,     pdfDocument,     "pdfUrl": pdfDocument.asset->url,     video   } }`;
