const extraPad = 1

export default class Format {
  constructor(data, width, alignDir) {
    this.extraPad = extraPad
    this.data = data
    this.width = width
    this.alignDir = alignDir
    this.pad = this.width - this.data.length

  }

  static spaces(count) { return ' '.repeat(count) }
  static hyphens(count) { return '-'.repeat(count) }

  format() { throw new Error('Abstract method') }

  align() {
    switch (this.alignDir) {
      case 'left':
        return ''
          + this.data
          + Format.spaces(this.pad)
      case 'right':
        return ''
          + Format.spaces(this.pad)
          + this.data
      case 'center':
        return ''
          + Format.spaces(Math.floor(this.pad/2))
          + this.data
          + Format.spaces(Math.ceil(this.pad/2))
      default: // left
        return ''
          + this.data
          + Format.spaces(this.pad)
    }
  }
}
