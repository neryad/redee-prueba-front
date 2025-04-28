import { Pipe, PipeTransform } from '@angular/core';
import { Companies } from '../interface/company.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(companies: Companies[] | null, searchText: string): Companies[] {
    if (!companies) return [];
    if (!searchText) return companies;

    searchText = searchText.toLowerCase();

    return companies.filter((company) => {
      return (
        company.name?.toLowerCase().includes(searchText) ||
        company.commercialName?.toLowerCase().includes(searchText) ||
        company.rnc?.toLowerCase().includes(searchText)
      );
    });
  }
}
