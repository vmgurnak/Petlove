import axios from 'axios';

const BASE_URL = 'https://petlove.b.goit.study/api';

export const requestNews = async <T>(
  keyword?: string,
  page?: number,
  limit?: number
): Promise<T> => {
  const config = {
    params: {
      keyword,
      page,
      limit,
    },
  };

  const response = await axios.get(`${BASE_URL}/news`, config);

  return response.data;
};
