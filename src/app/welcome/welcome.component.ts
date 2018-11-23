import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../model/news.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  dict = ['us', 'hu', 'gb', 'ru', 'fr', 'de', 'cn', 'ca', 'cz'];
  localNews: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }


  getLocalNews($event) {
    const country = this.dict[$event.index];
    this.newsService.getLocalNews(country)
      .subscribe(data => {
        this.localNews = [];
        // console.log('LocalNews: ' + JSON.stringify(data));
        this.localNews = data;
        console.log(this.localNews);
      },
        err => {
          console.log('HIba' + err);
        });
  }

}
