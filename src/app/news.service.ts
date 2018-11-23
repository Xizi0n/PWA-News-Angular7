import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './model/news.model';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'https://newsapi.org/v2/top-headlines?';
  test = 'country=us&category=business';
  apikey = '&apiKey=ad88b53345fc4d81841c61e9db0ad5ce';
  testUrl = this.baseUrl + this.test + this.apikey;
  query = 'q=';



  constructor(private http: HttpClient) { }

  result: News[] = [];

  getLocalNews(country: string): Observable<News[]> {
    this.result = [];
    const news = new Observable<News[]>(subsciber => {
      console.log(this.baseUrl + 'country=' + country + this.apikey);
      this.http.get(this.baseUrl + 'country=' + country + this.apikey)
        .subscribe((data: any) => {
          // console.log('datajson' + JSON.stringify(data));
          data.articles.forEach(element => {

            if (element.urlToImage !== null && element.urlToImage !== undefined) {
              this.result.push(new News(element.author, element.title, element.description,
                element.content, element.publishedAt, element.source,
                element.url, element.urlToImage));
            }
          });
          subsciber.next(this.result);

        });
    });
    return news;
  }


  getNews(): Observable<News[]> {
    const news = new Observable<News[]>(subsciber => {
      this.http.get(this.testUrl)
        .subscribe((data: any) => {
          // console.log('datajson' + data.json);
          data.articles.forEach(element => {

            if (element.urlToImage !== null && element.urlToImage !== undefined) {
              this.result.push(new News(element.author, element.title, element.description,
                element.content, element.publishedAt, element.source,
                element.url, element.urlToImage));
            }
          });
          // console.log('getnews after get: ' + JSON.stringify(this.result));
          subsciber.next(this.result);

        });
    });
    return news;
  }

  searchNews(search: string) {
    this.result = [];
    const news = new Observable<News[]>(subsciber => {
      this.http.get(this.baseUrl + this.query + search + this.apikey)
        .subscribe((data: any) => {
          // console.log('datajson' + data.json);
          data.articles.forEach(element => {

            if (element.urlToImage !== null && element.urlToImage !== undefined) {
              this.result.push(new News(element.author, element.title, element.description,
                element.content, element.publishedAt, element.source,
                element.url, element.urlToImage));
            }
          });
          // console.log('getnews after get: ' + JSON.stringify(this.result));
          subsciber.next(this.result);
        });
    });
    return news;
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
