import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsApiResult } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class NewsServiceService {
	constructor(private http: HttpClient) {}

	getTopHeadlines() {
		return this.http.get<NewsApiResult>(
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=46e13df266be49ae95a92f135bbd97fb'
		);
	}
}
