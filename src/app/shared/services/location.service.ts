import { ListType } from './../../core/models/user.model';
import { countries, departmentsCountries } from './../mocks/countries.data';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() {}

  getCountriesList(): Observable<any[]> {
    return of(countries);
  }

  getDeparmentList(countryCode: string): Observable<any[]> {
    return of(this.extractDepartmentsCountry(countryCode));
  }

  getCitiesList(countryCode: string, deparmentCode: string): Observable<any[]> {
    return of(this.extractCitiesDepartment(countryCode, deparmentCode));
  }

  private extractDepartmentsCountry(code: string) {
    return departmentsCountries
      .find((country: any) => country.countryCode === code)
      .departments.map((department: any) => {
        return { code: department.code, description: department.description };
      });
  }

  private extractCitiesDepartment(countryCode: string, deparmentCode: string) {
    return departmentsCountries
      .find((country: any) => country.countryCode === countryCode)
      .departments.find((department: any) => department.code === deparmentCode)
      .cities.map(mapperCity);
  }
}
function mapperCity(city: string): ListType {
  return { code: city, description: city };
}
