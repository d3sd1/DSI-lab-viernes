import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }


  async doLogin(): Promise<void> {
    this.userService.setLoggedIn(true);
    await this.router.navigateByUrl('/logged-in');
  }

}
