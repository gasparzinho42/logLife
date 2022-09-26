export interface APIresponse {
  data: response;
}
export interface response {
  status: number;
  message: string;
}
export interface Errors {
  field: string;
  message: string;
}
