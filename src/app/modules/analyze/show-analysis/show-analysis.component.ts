import { Component, Input, OnInit } from '@angular/core';
import { RoundPipe } from '../../../round-mask.pipe';
@Component({
  selector: 'app-show-analysis',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './show-analysis.component.html',
  styleUrls: ['./show-analysis.component.css'],
})
export class ShowAnalysisComponent implements OnInit {
  @Input() nutritionFactsDetails: any;
  constructor() {}

  ngOnInit() {}
}
