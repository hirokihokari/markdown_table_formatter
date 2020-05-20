import Column from './Column'
import { isNotDefined } from './isDefined'

export default class Row {
  constructor(input, rowNum) {
    this.rowNum = rowNum

    this.columns = input
      .replace(/^\|/, '').replace(/\|$/, '')
      .split('|')
      .map(columnInput => new Column(columnInput, this.type))
  }

  format(columnCount, columnWidths, alignDirs) {
    let formatted = []

    for (let i=0; i<columnCount; i++) {
      if (isNotDefined(this.columns[i])) { this.columns[i] = new Column('', this.type) }
      formatted.push(this.columns[i].format(columnWidths[i], alignDirs[i]))
    }

    return '|' + formatted.join('|') + '|'
  }

  get columnWidths() {
    return this.columns.map(column => {
      return column.cellWidth
    })
  }

  get type() {
    switch(this.rowNum) {
      case 1:  return 'header'
      case 2:  return 'divider'
      default: return 'data'
    }
  }

  get isDivider() { return this.type === 'divider' }
}
