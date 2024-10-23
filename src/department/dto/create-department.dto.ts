export class CreateDepartmentDto {
  name: string;
  description: string;
  //   parent_department_id: string;
  manager_id: string; // here can be manager of department. which will be staff_id
  contact_email: string;
}
