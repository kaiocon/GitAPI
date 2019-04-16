import { Component } from '@angular/core';
import {ApiServiceService} from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServiceService]
})
export class AppComponent {
  userName: string;
  user = {};
  show = false;
  constructor(private api: ApiServiceService) {
    }
    SearchUser() {
    this.api.getUser(this.userName).subscribe (user => {
        console.log (user);
        this.user = user;
        this.show = true;
      });
  }

}


