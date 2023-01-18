import { Component, OnInit } from '@angular/core';
import { Observable, bindCallback, map ,  } from 'rxjs';
import {Geolocation, Position } from '@capacitor/geolocation';
import { Plugins } from '@capacitor/core'; 
const modals = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppMobile';
  coords =  GeolocationPosition;

  ngOnInit(): void {
    this.watchPosition().subscribe( coords =>
      this.coords =coords
      );
    
  }
   watchPosition(): Observable<any>{
     const watch = bindCallback(Geolocation.watchPosition)({});
     return watch.pipe(map(pos => pos[0]));

   }

   showAlert(){
      
   }
  
}
