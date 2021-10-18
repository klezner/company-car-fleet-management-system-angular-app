import {Component, OnInit} from '@angular/core';
import {DepartmentResponse} from "../../shared/models/department-response";
import {DepartmentService} from "../../shared/services/department.service";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  id: number;
  department: DepartmentResponse | null;

  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentService.getDepartment(this.id).subscribe(
      (response: HttpResponse<DepartmentResponse>) => {
        this.department = response.body;
        console.log('getDepartment -> HttpStatus: ' + response.status + ' -> ' + response.body);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
