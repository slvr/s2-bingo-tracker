import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }

  getBoard(url: string): Observable<Object> {
    let strings = url.split('/');
    return this.http.get("/" + strings[3] + "/" + strings[4] + '/board');
  }
}
