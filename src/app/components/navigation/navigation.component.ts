import { Component } from '@angular/core';
import { faGears, faHouse, faListUl } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  faGears = faGears
  faHouse = faHouse
  faList = faListUl

  openModal(){
    console.log("clicked!")
  }

}
