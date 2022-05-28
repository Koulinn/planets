export const PLANETS_URL =
  'https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json';

export const sortByReleaseDate = (a, b) =>
  new Date(a.releasedate) - new Date(b.releasedate);
