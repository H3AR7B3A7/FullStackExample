import { _isNumberValue } from '@angular/cdk/coercion'

export class CustomFunctions {
  static caseInsensitiveSortingDataAccessor = (
    // eslint-disable-next-line
    data: any,
    sortHeaderId: string
  ): string | number => {
    if (_isNumberValue(data[sortHeaderId])) {
      return +data[sortHeaderId]
    }
    if (typeof data[sortHeaderId] === 'string') {
      return data[sortHeaderId].toLocaleLowerCase()
    }
    return data[sortHeaderId]
  }
}
