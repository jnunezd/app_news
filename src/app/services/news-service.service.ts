import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewsApiResult } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class NewsServiceService {
	apiKey = environment.newsApiKey;
	constructor(private http: HttpClient) {}

	getTopHeadlines() {
		return this.http.get<NewsApiResult>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`);
	}
}
