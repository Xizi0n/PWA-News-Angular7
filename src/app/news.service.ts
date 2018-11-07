import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './model/news.model';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'https://newsapi.org/v2/';
  test = 'top-headlines?country=us&category=business';
  apikey = '&apiKey=ad88b53345fc4d81841c61e9db0ad5ce';
  testUrl = this.baseUrl + this.test + this.apikey;


  constructor(private http: HttpClient) { }

  result = [];


  getNews(): News[] {
    const myNews: News[] = [];
    this.http.get(this.testUrl)
      .subscribe(( data: any) => {
        data.articles.forEach(element => {

          if (element.urlToImage !== null && element.urlToImage !== undefined) {
            this.result.push( new News(element.author, element.title, element.description,
              element.content, element.publishedAt, element.source,
              element.url, element.urlToImage));
          }
        });
        // console.log(this.result);
      });
    return this.result;
  }

  /*getHeadlineImages(): Promise<any> {
    const images = [];
    return new Promise( res => {
      this.http.get(this.testUrl)
      .subscribe( data => {
        console.log(data);
        data.articles.forEach(element => {
          const item = element.urlToImage;
          if (item !== null) {
            images.push(item);
          }
        });
          resolve(images);
      });
    });

  }*/
}
