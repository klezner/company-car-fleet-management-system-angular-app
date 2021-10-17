import {DepartmentResponse} from "./department-response";

export class EmployeeResponse {

  id: number;
  firstName: string;
  lastName: string;
  department: DepartmentResponse;
}
