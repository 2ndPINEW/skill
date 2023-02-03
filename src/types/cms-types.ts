type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type skills<T='get'> = Structure<
T,
{
  /**
   * ラベル
   */
  label: string
  /**
   * 好き度
   */
  like_rate: number
  /**
   * 得意度
   */
  forte_rate: number
  /**
   * ロゴ画像URL
   */
  logo_image?: { url: string, width: number, height: number }
}>


export interface EndPoints {
  get: {
    'skills': skills<'get'>
  }
  gets: {
    'skills': skills<'gets'>
  }
  post: {
    'skills': skills<'post'>
  }
  put: {
    'skills': skills<'put'>
  }
  patch: {
    'skills': skills<'patch'>
  }
}
