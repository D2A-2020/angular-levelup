import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name = '';
  

  title = 'levelup';
  show(){
    alert('nice');
  }

  mostrarNombre(){
    alert('tu nombre es: '+this.name);
  }
}
