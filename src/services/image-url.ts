const BASE_URL = "https://image.tmdb.org/t/p";

export const getProfileImage = (path: string) => BASE_URL + "/w185" + path;

export const getPosterImage = (path: string) =>
  BASE_URL + "/w300_and_h450_face" + path;

export const getPosterImage2 = (path: string) => BASE_URL + "/w1280" + path;

export const getBackdropImage = (path: string) =>
  `url(${BASE_URL}/w1280${path})`;
