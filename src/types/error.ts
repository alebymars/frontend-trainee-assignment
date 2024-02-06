import { ResultStatusType } from "antd/es/result";

export interface ErrorPage {
  status: ResultStatusType;
  statusText: string;
  message: string;
  internal: boolean;
  data: string;
  error: object;
}
