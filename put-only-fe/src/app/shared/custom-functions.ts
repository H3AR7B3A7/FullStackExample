export class CustomFunctions {
  static caseInsensitiveSortingDataAccessor = <T>(
    data: T,
    sortHeaderId: string
  ): keyof T => {
    return typeof data[sortHeaderId as keyof T] === 'string'
      ? ((
          data[sortHeaderId as keyof T] as string
        ).toLocaleLowerCase() as keyof T)
      : (data[sortHeaderId as keyof T] as keyof T)
  }
}
