import { Component, Input, OnInit } from '@angular/core';
import { RoundPipe } from '../../../round-mask.pipe';
@Component({
  standalone: true,
  selector: 'app-ingredients-details',
  imports: [RoundPipe],
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.css'],
})
export class IngredientsDetailsComponent implements OnInit {
  @Input() ingredientsData: any[] = [];
  constructor() {}

  ngOnInit() {}
}
