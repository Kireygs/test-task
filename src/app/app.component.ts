import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('f') slForm: NgForm;

  items = [
    {
      id: 'red',
      name: 'Red'
    },
    {
      id: 'yellow',
      name: 'Yellow'
    },
    {
      id: 'blue',
      name: 'Blue'
    },
  ];

  selectedIndex = null;
  selected = false;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  addColor(form: NgForm) {
    const value = form.value;
    this.items.push(
      {
        id: value.id,
        name: value.name
      }
    );
    form.reset();
  }

  onDelete() {
    this.items.splice(this.selectedIndex, 1);
  }

  selectColor(index: number) {
    this.selectedIndex = index;
    this.selected = true;
  }

}
