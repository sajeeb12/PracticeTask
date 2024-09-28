import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ParagraphSectionComponent } from "../paragraph-section/paragraph-section.component";
import { InputComponent } from '../input/input.component';
import { SerachBtnComponent } from '../serach-btn/serach-btn.component';
import { TblObjCountComponent } from "../tbl-obj-count/tbl-obj-count.component";
import { InfoTableComponent } from '../info-table/info-table.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, ParagraphSectionComponent, InputComponent,
     SerachBtnComponent, TblObjCountComponent,InfoTableComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
