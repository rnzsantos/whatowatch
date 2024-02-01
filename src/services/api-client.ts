import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzFmMWZjNjllYjllNTI4NDg2NDhhYTlhZjA1YTY0OSIsInN1YiI6IjYzZjhkMmI4NDZmMzU0MDBiYzY4ZmM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ELBmWYHXtQN0azCyYFOAoBJwYTV58SojDtx7q7BLGQA",
  },
});

export interface FetchResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getMovies = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  getMovie = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);

  getTrailer = () =>
    axiosInstance.get<T>(this.endpoint).then((res) => res.data);

  getCredits = () =>
    axiosInstance.get<T>(this.endpoint).then((res) => res.data);

  getRecommendations = () =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);
}

export default APIClient;
