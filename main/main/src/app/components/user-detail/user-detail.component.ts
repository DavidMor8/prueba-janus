import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interface/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  userId!: number;
  user!: User;

  constructor(private _route: ActivatedRoute,
    private dataService: DataService){

  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.userId = +params['id']; 
      this.loadUserDetails(this.userId); 
    });
  }

  loadUserDetails(userId: number) {
    this.dataService.getUserDetails(userId).subscribe(user => {
      this.user = user;
    });
  }
}
