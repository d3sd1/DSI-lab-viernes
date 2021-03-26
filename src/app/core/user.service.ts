import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = false;

  constructor() {
  }

  isLoggedIn(): Promise<boolean> {
    return new Promise<boolean>((async (resolve, reject) => {
      await localStorage.getItem('logged_in');
      resolve(this.loggedIn);
    }));
  }

  async setLoggedIn(isLoggedIn: boolean): Promise<void> {
    await localStorage.setItem('logged_in', JSON.stringify(isLoggedIn));
    this.loggedIn = isLoggedIn;
  }
}
