import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as M from 'materialize-css';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() trigger:boolean; 
  constructor(private router:Router) { }

  ngOnInit() {

    
  }
  check(form){
    this.router.navigate(['/search'],{queryParams:{keyword:form.value.search}});
    form.reset();

  }


}
