import { Component, Input } from '@angular/core';
import { RequestsService } from './requests.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name = '';
  title = 'levelup';

  constructor(private request:RequestsService){}

  ngOnInit():void{
    this.loadData();
  }

  loadData(){
    this.request.get("http://localhost:8080").
    subscribe(respuesta =>{console.log(respuesta)});
  }

  
  show(){
    alert('nice');
  }

  mostrarNombre(){
    alert('tu nombre es: '+this.name);
  }
}
