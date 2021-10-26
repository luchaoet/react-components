class Base26 {
  words = [
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
  column(index) {
    // index 从 1 开始
    const _colTitle = (i) => {
      if (i <= 26) {
        return this.words[i];
      }
      const floor = Math.floor(i / 26);
      const rem = i % 26;
      if (rem === 0) {
        // 处理26的倍数
        return `${_colTitle(floor - 1)}${_colTitle(26)}`;
      } else {
        return `${_colTitle(floor)}${this.words[rem]}`;
      }
    };

    return _colTitle(index);
  }
  index(col) {
    if (/^[a-zA-Z]+$/.test(col)) {
      const _col = col.toUpperCase().split('').reverse();
      return _col.reduce((accumulator, current, index) => {
        return accumulator + (current.charCodeAt() - 64) * Math.pow(26, index);
      }, 0);
    } else {
      return -1;
    }
  }
}

export const base26 = new Base26();

export const isFirefox =
  typeof navigator !== 'undefined' &&
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// 画线
export function drawLine({
  context,
  x1 = 0,
  y1 = 0,
  x2 = 0,
  y2 = 0,
  lineWidth = 1,
  strokeStyle = '#cecece',
}) {
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  // 线条末端形状
  context.lineCap = 'square';
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
}

// 矩形填充
export function fillRect({
  context,
  x,
  y,
  width,
  height,
  fillStyle = '#f5f5f5',
}) {
  context.fillStyle = fillStyle;
  context.fillRect(x, y, width, height);
}

// 矩形边框
export function strokeRect({
  context,
  lineWidth = 1,
  strokeStyle = '#cecece',
  x = 0,
  y = 0,
  width,
  height,
}) {
  context.lineWidth = lineWidth;
  context.strokeStyle = strokeStyle;
  context.strokeRect(x, y, width, height);
}

// 文本
export function fillText({
  context,
  globalCompositeOperation = 'source-over',
  font = '14px',
  fillStyle,
  textAlign = 'left',
  textBaseline = 'middle',
  text,
  x = 0,
  y = 0,
}) {
  context.globalCompositeOperation = globalCompositeOperation;
  context.font = font;
  context.fillStyle = fillStyle;
  context.textAlign = textAlign;
  context.textBaseline = textBaseline;
  context.fillText(text, x, y);
}

export function colWidth(i) {
  const { widths, cellWidth } = this.state;
  return widths[i] || cellWidth;
}

// 某行的高
export function rowHeight(i) {
  const { heights, cellHeight } = this.state;
  return heights[i] || cellHeight;
}

export function handleFocusCells(start, end) {
  let _start = start || { x: -1, y: -1 };
  let _end = end || { x: -1, y: -1 };

  if (start && end) {
    // 起始结束位置方向有不同情况，将记录的起始结束单元格转换为左上->右下的方向，便于操作
    const _x = [start.x, end.x].bubbleSort();
    const _y = [start.y, end.y].bubbleSort();
    _start = { x: _x[0] || 1, y: _y[0] || 1 };
    _end = { x: _x[1] || 1, y: _y[1] || 1 };
  }

  return {
    start: _start,
    end: _end,
  };
}

export function tableToArray(table) {
  const dom = new DOMParser().parseFromString(table, 'text/html');
  // 加载所有的行
  const trs = Array.from(dom.querySelectorAll('table tr'));
  return trs.map((item) => {
    return [...item.children].map((c) => {
      return {
        format: 'string',
        value: c.innerText,
      };
    });
  });
}

// eslint-disable-next-line no-extend-native
Array.prototype.bubbleSort = function () {
  const _this = [...this];
  const len = _this.length;
  // 每次循环就有一位最大值排列到了最后，即无需再与之对比
  for (let i = 0; i < len - 1; i++) {
    // 根据i确定每次循环最后对比元素位置
    // i -> 0 -> len - 1
    // i -> 1 -> len - 2
    // ...
    for (let j = 0; j < len - 1 - i; j++) {
      // 交换位置，将大值往后排列，继续对比
      if (_this[j] > _this[j + 1]) {
        const element = _this[j];
        _this[j] = _this[j + 1];
        _this[j + 1] = element;
      }
    }
  }
  return _this;
};
