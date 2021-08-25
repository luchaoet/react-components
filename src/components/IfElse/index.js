const IfElse = ({ condition, children }) => {
  let ifDom = null;
  let elseDom = null;
  // 单个子节点可能是react element或字符串，转为数组统一处理
  children = Object.prototype.toString.call(children) === '[object Array]' ? children : [children];

  for (const child of children) {
    const childType = child.type;
    if (Object.prototype.toString.call(childType) === '[object Function]' && childType.displayName === 'Else') {
      elseDom = child;
    } else {
      ifDom = child;
    }
  }
  return !!condition ? ifDom : elseDom;
};

function If({ children }) {
  return children;
}
If.displayName = 'If';

function Else({ children }) {
  return children;
}
Else.displayName = 'Else';

IfElse.If = If;
IfElse.Else = Else;

export default IfElse;
