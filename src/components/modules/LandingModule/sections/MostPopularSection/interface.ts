export interface MostPopularBooksResponse {
  message: string
  data: {
    books: Book[]
  };
}

export interface Book {
  id: string
  author: string
  title: string
  genre: { name: string }[]
  rating: number
  coverUrl: string
  bgColor: string
  detailLink: string
}