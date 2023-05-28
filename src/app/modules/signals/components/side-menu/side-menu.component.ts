import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem.interface';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter'},
    { title: 'Usuario', route: 'user-info'},
    { title: 'Mutaciones', route: 'properties'},
  ])  ;

  // public menuItem: MenuItem[] = [
  //   { title: 'Contador', route: 'counter'},
  //   { title: 'Usuario', route: 'user-info'},
  //   { title: 'Mutaciones', route: 'properties'},
  // ]

}
