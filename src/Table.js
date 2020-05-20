import Row  from './Row'

export default class Table {
  constructor(input) {
    this.rows = input
      .split('\n')
      .map((rowInput, index) => new Row(rowInput, index+1))
  }

  format(columnCount, columnWidths, alignDirs) {
    return this.rows.map(row => {
      return row.format(columnCount, columnWidths, alignDirs)
    }).join('\n')
  }
}
