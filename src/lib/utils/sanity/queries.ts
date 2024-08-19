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
export const SINGLE_BLOG_CATEGORY = (text: string) => {
  return groq`*[_type == 'category' && category_title match "${text}"]{category_title, category_image}`;
};
export const AUTHORS = groq`*[_type == 'author']{...}`;
export const SINGLE_BLOG_POST = (id: string) => {
  return groq`*[_type == 'blog' && _id == "${id}"]{...,author->,category->}`;
};
export const SEARCH_BLOG_QUERY = (text: string) => {
  // return groq`*[_type == 'blog' &&  title similar(${text}, 0.8)]{...,author->,category->}`;
  return groq`*[_type == 'blog' && title match "${text}*"]{...,author->,category->}`;
};
export const PROMOTIONS_QUERY = groq`*[_type == 'promotions']{...}`;
export const HOME_BANNER_QUERY = groq`*[_type == 'homeBanner']{...}`;
export const ADS_QUERY = groq`*[_type == 'ads']{...}`;

export const CONTACT_US_PAGE_QUERY = groq`*[_type == 'contactUs']  {
  _id,
  _type,
  reportSection-> {
    _id,
    _type,
    fileType,
    videoUrl,
    image,
    "imgURL": image.asset->url,
    pdf,
    "pdfUrl": pdf.asset->url
  },
  generalSection-> {
    _id,
    _type,
    fileType,
    videoUrl,
    image,
      "imgURL": image.asset->url,
    pdf,
    "pdfUrl": pdf.asset->url
  },
  advertiseSection-> {
    _id,
    _type,
    fileType,
    videoUrl,
    image,
      "imgURL": image.asset->url,
    pdf,
    "pdfUrl": pdf.asset->url
  },
  writersSection-> {
    _id,
    _type,
    fileType,
    videoUrl,
    image,
      "imgURL": image.asset->url,
    pdf,
    "pdfUrl": pdf.asset->url
  }
}
 `;

export const JOBS_QUERY = groq`*[_type == 'job'] {_id,
title,
description_brief,
description,
image,
"imgUrl":image.asset->url}`;

export const SINGLE_JOB_QUERY = (id: string) => {
  return groq`*[_type == 'job' && _id == "${id}"]{_id, title, description_brief, description, image, "imgUrl":image.asset->url}`;
};
