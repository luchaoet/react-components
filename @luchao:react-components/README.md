# react组件

## IfElse

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

## MapDom

```react
import { MapDom } from "@luchao/react-components"

export default Test() {
    return (
        <div>
            <MapDom
                parentDom={d => <ul>{d}</ul>}
                dataSource={[1, 2, 3, 4, 5]}
                render={(item, index) => <li key={index}>{item}</li>}
            />
        </div>
    )
}
```
