import FormatHeader  from './FormatHeader'
import FormatDivider from './FormatDivider'
import FormatData    from './FormatData'

export default class Column {
  constructor(input, rowType) {
    this.cell = input
      .trim()
    this.rowType = rowType
  }

  format(width, alignDir) {
    // this.Formatter.format(this.cell)
    const Klass = this.Format
    const formatter = new Klass(this.cell, width, alignDir)

    return formatter.format()
  }

  get Format() {
    switch (this.rowType) {
      case 'header' : return FormatHeader
      case 'divider': return FormatDivider
      default:        return FormatData
    }
  }

  get cellWidth() {
    return this.cell.length
  }
}
