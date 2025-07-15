import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/Header/Header.component';
import { FooterComponent } from './components/Footer/Footer.component';
import { SectionOneComponent } from './components/Section-one/section_one.component';
import { SectionTwoComponent } from './components/Section-two/section_two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SectionOneComponent,
    SectionTwoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.css',
})
export class AppComponent {
  title = 'Angular Task';
}
