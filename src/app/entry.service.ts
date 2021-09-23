import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './Entry';

const httpOptions = {
  headers: new HttpHeaders({
    Content_Type: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private apiUrl = 'http://localhost:5000/api/entries';

  constructor(private http: HttpClient) {}

  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.apiUrl);
  }

  getEntry(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `/${id}`);
  }

  createEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.apiUrl, entry, httpOptions);
  }

  updateEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.apiUrl, entry, httpOptions);
  }
}
