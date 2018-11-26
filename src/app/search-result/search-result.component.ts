import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { News } from '../model/news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

  searchResult: News[] = [];

  constructor(public newsService: NewsService) { }

}
