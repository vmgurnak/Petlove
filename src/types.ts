export interface ILoginUser {
  email: string;
  password: string;
}
export interface ILoginResponse {
  name: string;
  email: string;
  token: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface IRegisterResponse {
  name: string;
  email: string;
  token: string;
}

export interface IRefreshResponse {
  name: string;
  email: string;
  token: string;
}

export interface ILogOutResponse {
  message: string;
}

export interface IAuthState {
  name: string | null;
  email: string | null;
  token: string | null;
  isLogged: boolean;
  isLoading: boolean;
  isError: boolean;
  isRefreshing: boolean;
}

export interface INewsParams {
  keyword?: string | null;
  page?: number;
  limit?: number;
}

export interface INewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface INewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: INewsItem[];
}

export interface INewsState {
  news: INewsResponse;
  isLoading: boolean;
  isError: boolean;
}

export interface IModalState {
  modalIsOpen: boolean;
  afterOpen: boolean;
  beforeClose: boolean;
  modalIsLogOut: boolean;
}
