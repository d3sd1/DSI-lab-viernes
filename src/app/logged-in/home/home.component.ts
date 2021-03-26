import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async doLogout(): Promise<void> {
    this.userService.setLoggedIn(false);
    await this.router.navigateByUrl('/logged-out');
  }


}
