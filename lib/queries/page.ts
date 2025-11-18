import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export type ContentType = {
  type: string;
  excerpt: string;
  heading: string;
  tagline?: string;
  image: {
    _type: string;
    asset: unknown;
  };
};

export type ProjectType = {
  type: string;
  excerpt: string;
  projectname: string;
  tagline: string;
  location: string;
  url: string;
  imageUrls: ImageType[];
};

export type ImageType = {
  url: string;
};

export type ExpertiseType = {
  type: string;
  heading: string;
  url: string;
  excerpt?: string;
};

export type HeroType = {
  heroImage: string;
  heading: string;
  tagline: string;
};

export type SectionImageOverlayType = {
  type: string;
  heading: string;
  imageOverlay: string;
};

export type GalleryType = {
  _type: string;
  imageUrls: ImageType[];
};

export type HomepageData = {
  Heading: string;
  slug: string;
  Hero: HeroType;
  Content: ContentType;
  SectionImageOverlay: SectionImageOverlayType;
  Expertises: ExpertiseType[];
  Gallery: GalleryType;
};

export async function getHomepage(): Promise<HomepageData | null> {
  const getPageQuery = groq`*[_type == "page" && slug.current == "home"][0]{
    'Heading': title,
    slug,
    'Hero': pageBuilder[][_type == "hero"][0]{
      'heroImage': image.asset->url,
      heading,
      tagline
    },
    'Content': pageBuilder[][_type == "textWithIllustration"][0]{
      "type": _type,
      excerpt,
      tagline,
      heading,
      image
    },
    'SectionImageOverlay': pageBuilder[][_type == "sectionImageOverlay"][0]{
      "type": _type,
      heading,
      'imageOverlay': image.asset->url,
    },
    'Expertises': pageBuilder[][_type == "expertises"]{
      "type": _type,
      excerpt,
      heading,
      'url': image.asset->url
    },
    'Gallery': pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls': images[].asset->{
        'url': url
      }
    },
  }`;

  try {
    const data = await client.fetch(getPageQuery, {}, { next: { revalidate: 60 } });
    return data;
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

export async function getServicesPage(slug: string) {
  const getPageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
    'Heading': title,
    'Content': pageBuilder[][_type == "textWithIllustration"]{
      "type": _type,
      excerpt,
      heading,
      image
    },
    'Gallery': pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls': images[].asset->{
        'url': url
      }
    },
    'CallToAction': pageBuilder[][_type == "callToAction"][0]->{
      _type,
      title,
      link
    },
    'Video': pageBuilder[][_type == "video"][0]{
      videoLabel,
      url
    },
    'FormContact': pageBuilder[][_type == "form"][0]{
      label,
      heading,
      form
    },
  }`;

  try {
    const data = await client.fetch(getPageQuery, { slug }, { next: { revalidate: 60 } });
    return data;
  } catch (error) {
    console.error(`Error fetching services page (${slug}):`, error);
    return null;
  }
}

export async function getWorksPage() {
  const getPageQuery = groq`*[_type == "page" && slug.current == "works"][0]{
    'Heading': title,
    slug,
    'Hero': pageBuilder[][_type == "hero"][0]{
      'heroImage': image.asset->url,
      heading,
      tagline
    },
    'Content': pageBuilder[][_type == "project"]{
      "type": _type,
      excerpt,
      tagline,
      projectname,
      location,
      url,
      'imageUrls': images[].asset->{
        'url': url
      }
    },
    'CallToAction': pageBuilder[][_type == "callToAction"][0]->{
      _type,
      title,
      label,
      link
    }
  }`;

  try {
    const data = await client.fetch(getPageQuery, {}, { next: { revalidate: 60 } });
    return data;
  } catch (error) {
    console.error("Error fetching works page:", error);
    return null;
  }
}

export async function getGalleryPage() {
  const getPageQuery = groq`*[_type == "page" && slug.current == "gallery"][0]{
    'Heading': title,
    slug,
    'Gallery': pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls': images[].asset->{
        'url': url
      }
    },
  }`;

  try {
    const data = await client.fetch(getPageQuery, {}, { next: { revalidate: 60 } });
    return data;
  } catch (error) {
    console.error("Error fetching gallery page:", error);
    return null;
  }
}
