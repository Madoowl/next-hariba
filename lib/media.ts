import { getStrapiURL } from "./api-rest";

export function getStrapiMedia(media:any) {
  const { url } = media.data.attributes;
  const imageUrl: string = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}