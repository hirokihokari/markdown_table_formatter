import Table from './Table'
import { isNotDefined } from './isDefined'

export default class Formatter {
  constructor(input) {
    this.input = input

    this.table = new Table(input)
  }

  get formatted() { return this.table.format(this.columnCount, this.columnWidths, this.alignDirs) }

  get columnWidths() {
    let maxWidths = []

    // Iterate rows and get the longest size for each column
    this.table.rows.forEach(row => {
      if (row.isDivider) { return }

      for (let i=0; i< this.columnCount; i++) {
        if (isNotDefined(maxWidths[i])) { maxWidths[i] = 0 }
        if (maxWidths[i] < row.columnWidths[i]) { maxWidths[i] = row.columnWidths[i] }
      }
    })

    return maxWidths
  }

  // columnCount is how many columns this table has
  // determined by how many columns the divider row has
  get columnCount() {
    let count = 0
    this.table.rows.forEach(row => {
      if (row.isDivider) { count = row.columns.length }
    })

    return count
  }

  get alignDirs() {
    let dirs = []

    this.table.rows.forEach(row => {
      if (!row.isDivider) { return }

      for (let i=0; i< this.columnCount; i++) {
        const cell = row.columns[i].cell
        if (RegExp(/^:.+:$/).test(cell)) { dirs.push('center') }
        else if (RegExp(/^:.+/).test(cell)) { dirs.push('left') }
        else if (RegExp(/.+:$/).test(cell)) { dirs.push('right') }
        else { dirs.push('left') }
      }
    })

    return dirs
  }
}
