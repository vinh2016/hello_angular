import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/detail/:employeeCode/:name/:phoneNumber/:address', component: EmployeeDetailComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [
    EmployeeDetailComponent,
    EmployeesComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
