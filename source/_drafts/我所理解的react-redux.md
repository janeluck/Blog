---
title: 我所理解的react-redux
tags: JavaScript
---

### react-redux提供的主要两个功能

+ connect

    mapStateToProps
    mapDispatchToProps





+ Provider

    创建整体上下文, 提供context里面的store







### react-redux的依赖

+ shallowEqual


+ selectors
    reselector



### 实现思路

+ Provider提供context的store

+ Connect返回高阶组件, 组件包裹在一个随着store改变而触发state改变的connect组件中

```javascript
// 思路简化版伪代码


class Connect extends React.Component {
    construtor(){
        super()
        this.state = {

            allProps: {
            }
        }
    }


    // 考虑到ssr，订阅放在了DidMount

    componentDidMount(){

      const { store } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const { store } = this.context
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {} // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {} // 防止 mapDispatchToProps 没有传入
      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    render () {
      return <WrappedComponent {...this.state.allProps} />
    }


}

```




### 参考链接

- [Redux从设计到源码](https://tech.meituan.com/redux-design-code.html)
