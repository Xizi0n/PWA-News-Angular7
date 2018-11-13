import { Component, OnInit, Input } from '@angular/core';
import { News } from '../model/news.model';

@Component({
  selector: 'app-news-list-item-detail',
  templateUrl: './news-list-item-detail.component.html',
  styleUrls: ['./news-list-item-detail.component.css']
})
export class NewsListItemDetailComponent implements OnInit {

  @Input() detailed: News;

  constructor() { }

  ngOnInit() {
  }

}
