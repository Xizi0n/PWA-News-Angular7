import { Component, OnInit, Input} from '@angular/core';
import { News } from '../model/news.model';

@Component({
  selector: 'app-newslistitem',
  templateUrl: './newslistitem.component.html',
  styleUrls: ['./newslistitem.component.css']
})
export class NewslistitemComponent implements OnInit {

  @Input() news: News;

  constructor() {
    console.log('ListItem ' + this.news);
   }

  ngOnInit() {
  }

}
