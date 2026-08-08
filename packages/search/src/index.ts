import { Meilisearch } from 'meilisearch';

export const learningSearch = new Meilisearch({
  host: process.env.MEILISEARCH_HOST ?? 'http://127.0.0.1:7700',
  apiKey: process.env.MEILISEARCH_API_KEY,
});

export const courseIndex = learningSearch.index('courses');
