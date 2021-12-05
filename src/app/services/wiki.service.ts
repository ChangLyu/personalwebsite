import { Country } from '@models/country';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap, throwError } from 'rxjs';

@Injectable()
export class WikiService {


  constructor(private http: HttpClient) { }


  searchCountry(key: string) {
    return this.http.get<Country>(`https://restcountries.com/v3.1/name/${key}`).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          throw new Error("Not Found");
        } else {
          throw new Error(err.message);
        }
      })
    );
  }
}
