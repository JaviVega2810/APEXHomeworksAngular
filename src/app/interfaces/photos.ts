export interface Photos {
  success: boolean;
  total_photos: number;
  message: string;
  offset: number;
  limit: number;
  photos: [
    url: string,
    user: number,
    title: string,
    id: number,
    description: string
  ]
}
