// 列名
export function colTitle(index) {
  const words = [
      '',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
  ];
  return _colTitle(index);
  
  // index 从 1 开始
  function _colTitle(i) {
    if (i <= 26) {
        return words[i]
    }
    const floor = Math.floor(i / 26);
    const rem = i % 26;
    if (rem === 0) {
        // 处理26的倍数
        return `${_colTitle(floor - 1)}${_colTitle(26)}`
    } else {
        return `${_colTitle(floor)}${words[rem]}`
    }
  }
} 

export const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// 画线
export function drawLine({ context, x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineWidth = 1, strokeStyle = '#cecece' }) {
  context.beginPath();
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}


// function createElement(w = 300, h = 150) {
//   var ratio = window.devicePixelRatio || 1;
//   var canvas = document.createElement('canvas');
//   canvas.width = w * ratio; // 实际渲染像素
//   canvas.height = h * ratio; // 实际渲染像素
//   canvas.style.width = `${w}px`; // 控制显示大小
//   canvas.style.height = `${h}px`; // 控制显示大小
//   canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
//   return canvas;
// }