import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../model/news.model';

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  myNews: News[];
  newsArrived = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }


  getNews() {
    this.newsService.getNews()
      .subscribe(data => {
        console.log('GotNews' + JSON.stringify(data));
        this.myNews = data;
        console.log('myNews ', this.myNews);
        this.newsArrived = true;
      });

  }

}
