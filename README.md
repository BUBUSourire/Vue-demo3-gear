# Gear - Vue UI组件  

[![Build Status](https://travis-ci.org/BUBUSourire/Vue-demo3-gear.svg?branch=master)](https://travis-ci.org/BUBUSourire/Vue-demo3-gear)

作者：BUBU_Sourire

## 介绍

这是在学习Vue过程中做的一个UI框架。



## 开始使用

1. 添加CSS样式

使用本框架前，请在CSS中开启 border-box

```html
*,*::before,*::after{box-sizing: border-box}
```

IE8 及以上浏览器都支持此样式



设置默认颜色等变量（后续改为SCSS变量）

```html
:root {
    --button-height: 32px;
    --font-size: 14px;
    --color: #333;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --border-color: #999;
    --border-color-hover: #666;
}
```

IE15 及以上浏览器都支持此样式



2. 安装bubu_gear

```command line
npm install --save bubu_gear
```



3. 引入bubu_gear

```vue
//APP.vue文件

import {Button, Button_group, Icon} from 'bubu_gear'
import 'bubu_gear/dist/index.css'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            'g-button': Button,
            'g-icon':Icon
        }
    }
```



## 文档



## 提问



## 变更记录



## 联系方式



## 贡献代码


