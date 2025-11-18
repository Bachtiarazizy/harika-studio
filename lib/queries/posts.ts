import { client } from "@/sanity/client";
import { groq } from "next-sanity";
export type Post = {
  title?: string;
  slug?: {
    current: string;
  };
  author: string;
  imageUrl: string;
  publishedAt: string;
};

const getPostsQuery = groq`*[_type == "post"]{
  title,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  categories,
  publishedAt,
  body
}`;

export async function getPosts() {
  return await client.fetch(getPostsQuery, {});
}

const getPostDetailQuery = groq`*[_type == "post"][slug.current == $slug][0]{
  title,
  slug,
  "author": author->name,
  "imageUrl": mainImage.asset->url,
  'categories': categories[]->title,
  publishedAt,
  body
}`;

export async function getDetailPost(slug: string) {
  return await client.fetch(getPostDetailQuery, {
    slug,
    revalidate: new Date().getHours(),
  });
}
