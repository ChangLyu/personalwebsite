import { Country } from './../../../models/country';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-web-form-project',
  templateUrl: './web-form-project.component.html',
  styleUrls: ['./web-form-project.component.scss']
})
export class WebFormProjectComponent implements OnInit {

  form: FormGroup;
  countryResult: any;
  countryError: string;
  constructor(private wikiService: WikiService) {
    this.countryError = "";
    this.form = new FormGroup({
      country: new FormControl('')
      // province: new FormControl(''),
    });

    // todo: filter out empty string, remove extra space, error handler

    // todo : add a global error handler to handler common error, after filter out
    this.form.get('country')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(value => console.log(value))
    ).subscribe(term => this.wikiService.searchCountry(term).subscribe(
      {
        next: this.handlerCountrySearchResult.bind(this),
        error: this.handlerCountrySearchError.bind(this)
      }
    ));
  }

  handlerCountrySearchResult(result: Country) {
    this.countryResult = result;
    this.countryError = "";
  }

  handlerCountrySearchError(error: any) {
    this.countryResult = null;
    this.countryError = "Can't find Result"
  }





  ngOnInit(): void {
  }

}
