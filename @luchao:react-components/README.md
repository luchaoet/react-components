# react组件

## IfElse ifelse条件显示

```react
import { IfElse } from "@luchao/react-components"
const If = IfElse.If
const Else = IfElse.Else

export default Test() {
    return (
        <div>
            <IfElse condition={true}>
                <If>满足条件显示</If>
                <Else>不满足条件显示</Else>
            </IfElse>
            <IfElse condition={true}>
                满足条件显示
            </IfElse>
        </div>
    )
}
```

## MapDom 循环，map

```react
import { MapDom } from "@luchao/react-components"

<MapDom
    parentDom={d => <ul>{d}</ul>}
    dataSource={[1, 2, 3, 4, 5]}
    render={(item, index) => <li key={index}>{item}</li>}
/>
```

## Scroll 自定义滚动条

```react
import { Scroll } from "@luchao/react-components"

<Scroll>
    {/* HTML */}
</Scroll>
```

## Switch switch条件显示

```react
import { Switch } from "@luchao/react-components"

// 可同时出现多个相同的 case 或 default
// Switch 的子节点必须含有 case 或 default属性，否则无效
<Switch expression={expression}>
    <div case='A'>A1</div>
    <div case='A'>A2</div>
    <div case='B'>B</div>
    <div case='C'>C</div>
    <div default>default1</div>
    <div default>default2</div>
</Switch>
```

## DraggleLayout 拖拽改变区域内部两部分的分配比例

```react
import { DraggleLayout } from "@luchao/react-components"

<DraggleLayout min='10%' max='80%' defaultValue="50%" direction='hoz' style={{width: '100%', height: 200}}>
    <DraggleLayout.A style={{backgroundColor: '#4caf50'}}>A</DraggleLayout.A>
    <DraggleLayout.B style={{backgroundColor: '#009688'}}>B</DraggleLayout.B>
</DraggleLayout>
```

## Template 条件渲染

```react
import { Template } from "@luchao/react-components"
// component 渲染标签或组件，默认div标签
// show 渲染条件
// 其他props 全部会传给component对应的标签或组件

<Template component='span' show={显示条件}>
test
</Template>
```
