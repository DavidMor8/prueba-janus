import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : any = [];

  filteredUsers: User[] = [];

  constructor(private dataService: DataService,
    private _router: Router){}
  
  ngOnInit(): void {
   this.dataService.getUsers().subscribe(response => {
    this.filteredUsers = response;
    this.users = response;

   })
  }

  userDetails(user: User){
    this._router.navigate(['/user', user.id]);
  }
  
  onKeyUp(event: KeyboardEvent) {
    const searchTerm = (event.target as HTMLInputElement).value;
    const filteredUser = this.users.filter((user:User) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(filteredUser); 
    this.filteredUsers = filteredUser; 
   
  }


}
