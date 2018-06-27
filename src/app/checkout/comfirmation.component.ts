import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {

  private ordernum:number;

  constructor(private requestService:RequestService, private activatedRoute:ActivatedRoute , private router:Router) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.render(params['id'])
    });
  }

  render(id){
    this.ordernum = id; 
  }
  private getStatus(){
    this.router.navigate(['/orderstatus'],{queryParams:{ordernum:this.ordernum}});
  }

}
