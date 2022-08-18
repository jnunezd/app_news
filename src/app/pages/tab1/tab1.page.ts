import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { NewsServiceService } from 'src/app/services/news-service.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page {
	constructor(private newsService: NewsServiceService) {}

	public articles: Article[] = [];

	ngOnInit() {
		this.newsService.getTopHeadlines().subscribe((data) => {
			console.log(data.articles);
			this.articles = data.articles;
		});
	}
}
