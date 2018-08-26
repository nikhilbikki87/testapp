import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Http, Response } from "@angular/http"
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: Http) { }
  public fetchUsers() {
    return this.http.get("https://itunes.apple.com/us/rss/toppaidapplications/limit=10/json").map((res: Response) => res.json())
  }
}
