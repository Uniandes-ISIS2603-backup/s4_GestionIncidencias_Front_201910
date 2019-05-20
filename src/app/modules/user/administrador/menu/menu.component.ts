import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id:number;
  constructor(private activated: ActivatedRoute,
    private router: Router) {

    this.activated.params.subscribe(  params =>{    
      this.id=params['id'] ;
      console.log(this.id);      
    });
   }

  listarEmpleados():void{
    this.router.navigate(['/listarEmpleados',this.id]);
  }

  listarTecnicos():void{
    this.router.navigate(['/listarTecnicos',this.id]);
  }
  

  ngOnInit() {
  }

}
