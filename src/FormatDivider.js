import Format from './Format'

export default class FormatDivider extends Format {
  format() {
    switch(this.alignDir) {
      case 'left':
        return ':' + Format.hyphens(this.width + this.extraPad*2 - 1)
      case 'right':
        return Format.hyphens(this.width + this.extraPad*2 - 1) + ':'
      case 'center':
        return ':' + Format.hyphens(this.width + this.extraPad*2 - 2) + ':'
      default:
        return Format.hyphens(this.width + this.extraPad*2)
    }
  }
}
