export class ColorUtils{

  static  shade  (col: string, amt: number) {
    const n = +('0x' + col.replace('#', '')) + amt * 0x010101;
    const s = n.toString(16);
    const s1 = s.padStart(6, '0');
    return '#' + s1;
  };


  static randomColor() {
    return this.HSLToRGB(360 * Math.random(), 25 + 70 * Math.random(), 85 + 10 * Math.random());
  }

  static HSLToRGB(h: number, s: number, l: number) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    function rgbToHex(rgb: number) {
      let hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      return hex;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const s1 = `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;

    return s1;
  }


}
