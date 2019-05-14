import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../modules/login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tipoUsuario:string;
  constructor(private auth:AuthService  ) { }

  ngOnInit() {
  }

  private login(){
    this.auth.login();
  }

  ngOnDestroy(): void {
    console.log(this.tipoUsuario);
  }  

}
