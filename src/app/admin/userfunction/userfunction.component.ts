import { Component, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserfunctionService } from '../../services/userfunction.service';

@Component({
  selector: 'app-userfunction',
  templateUrl: './userfunction.component.html',
  styleUrls: ['./userfunction.component.css']
})
export class UserfunctionComponent {
  user: User[] = [];

  constructor(private userfunctionService:UserfunctionService) {
      this.user =this.userfunctionService.getUsers() ;
      this.dataSource = new MatTableDataSource(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  dataSource = new MatTableDataSource(this.user);

  displayColumns = ["select", "id", "fname", "lname", "email", "password","actions"];

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: User){
    this.selection.toggle(row as never);
  }
}
