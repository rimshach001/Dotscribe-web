import axios from 'axios';

export const graphql = axios.create({
  // baseURL: process.env.GRAPHQL_BACKEND,
  baseURL:
    'https://x2b80r6mj5.execute-api.us-east-1.amazonaws.com/prod/api/proxy/graphql',
  headers: {
    // 'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

export const api = axios.create({
  // baseURL: process.env.API_BACKEND,
  baseURL: 'https://adlfd825sa.execute-api.us-east-1.amazonaws.com/prod/api',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
