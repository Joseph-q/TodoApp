import { OrderDirection } from "../../../../shared/constants/orderDirection";

export default interface GetTasksQueryParams {
  page?: number;
  limit?: number;
  completed?: boolean;
  orderBy?:string;
  order?: OrderDirection;
}
