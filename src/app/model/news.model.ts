



export class News {

    author: string;
    title: string;
    description: string;
    content: string;
    publishedAt: string;
    source: string;
    url: string;
    urlToImage: string;

    constructor(author: string, title: string, description: string, content: string,
         publishedAt: string, source: string, url: string, urlToImage: string) {
             this.author = author;
             this.title = title;
             this.description = description;
             this.content = content;
             this.publishedAt = publishedAt;
             this.source = source;
             this.url = url;
             this.urlToImage = urlToImage;
         }
}
