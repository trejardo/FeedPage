export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const API_ENDPOINTS = {
  POST_COMMENTS: postId => `${API_BASE_URL}/posts/${postId}/comments`,
  POSTS_API: `${API_BASE_URL}/posts`,
  USERS_API: `${API_BASE_URL}/users`,
  COMMENTS_API: `${API_BASE_URL}/comments`,
};
