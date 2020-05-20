import Format from './Format'

export default class FormatData extends Format {
  format() {
    return ''
      + Format.spaces(this.extraPad)
      + this.align(this.data)
      + Format.spaces(this.extraPad)
  }
}
