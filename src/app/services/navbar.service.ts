import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable()
export class NavbarService {

    visible: boolean = true;
    constructor(){
    }
    
    hide() { this.visible = false; }
    show() { this.visible = true;}
  

    
}