import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  arrEmployees = [
    { employeeCode: '1111-1111-1111-1111', name: 'Nguyễn Phú Vinh', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999990' },
    { employeeCode: '1111-1111-1111-1112', name: 'Nguyễn Phú Vinh 1', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999991' },
    { employeeCode: '1111-1111-1111-1113', name: 'Nguyễn Phú Vinh 2', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999992' },
    { employeeCode: '1111-1111-1111-1114', name: 'Nguyễn Phú Vinh 3', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999993' },
    { employeeCode: '1111-1111-1111-1115', name: 'Nguyễn Phú Vinh 4', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999994' },
    { employeeCode: '1111-1111-1111-1116', name: 'Nguyễn Phú Vinh 5', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999995' },
    { employeeCode: '1111-1111-1111-1117', name: 'Nguyễn Phú Vinh 6', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999996' },
    { employeeCode: '1111-1111-1111-1118', name: 'Nguyễn Phú Vinh 7', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999997' },
    { employeeCode: '1111-1111-1111-1119', name: 'Nguyễn Phú Vinh 8', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999998' },
    { employeeCode: '1111-1111-1111-1120', name: 'Nguyễn Phú Vinh 9', age: 20, address: 'Hochiminh City, Vietnam', phoneNumber: '0999999999' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
