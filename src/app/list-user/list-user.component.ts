import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers() {
    let users = [
      {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 2, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 3, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return users;
  }
}
