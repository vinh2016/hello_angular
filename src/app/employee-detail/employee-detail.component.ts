import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  name = '';
  phoneNumber = '';
  address = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const employeeCode = params.get('employeeCode');
      this.name = params.get('name') || '';
      this.phoneNumber = params.get('phoneNumber') || '';
      this.address = params.get('address') || '';
    });
  }

}
