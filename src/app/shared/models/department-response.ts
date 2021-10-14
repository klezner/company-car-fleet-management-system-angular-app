import {CompanyResponse} from "./company-response";

export class DepartmentResponse {
  id: number;
  name: string;
  abbreviation: string;
  comment: string;
  company: CompanyResponse;
}
