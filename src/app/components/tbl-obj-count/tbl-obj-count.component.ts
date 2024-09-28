import { Component } from '@angular/core';

@Component({
  selector: 'app-tbl-obj-count',
  standalone: true,
  imports: [],
  templateUrl: './tbl-obj-count.component.html',
  styleUrl: './tbl-obj-count.component.css'
})
export class TblObjCountComponent {
  count:number = 6;
  text:string='CV Emailed';
}
