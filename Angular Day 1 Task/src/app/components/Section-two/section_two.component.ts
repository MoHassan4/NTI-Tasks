import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [NgFor],
  templateUrl: 'section_two.component.html',
})
export class SectionTwoComponent {
  cards = [
    { title: 'Car One', description: 'Description One' },
    { title: 'Car Two', description: 'Description Two' },
    { title: 'Car Three', description: 'Description Three' },
  ];
}
