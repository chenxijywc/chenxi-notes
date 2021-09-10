---
title: Git Commit 代码提交规范
date: 2018-04-10 18:06:22
tags: js
---

## 一、Git commit 规范
团队合作的时候，经常会碰到各种随意的 commit message：

![](/images/engineering/demo.jpeg)

统一 commit message 的好处：
- 可读性好，方便快速浏览，方便 Code Review
- 提高项目的整体质量

业内规范：

Angular commit message规范 由 Google 推出的一套提交消息规范标准，也是目前使用范围最广的规范，前前端框架 Angular.js 采用的就是该规范。

```js
格式：type(scope?): subject

scope 指 commit 的范围（哪些模块进行了修改），可选

subject 指 commit 的简短描述，不超过50个字符，推荐以动词开头，如： 设置、修改、增加、删减、撤销等。

type 指当前 commit 类型，一般有下面几种可选类型：

feat: 新功能

fix: 修复bug

merge: 合并代码

revert: 撤销上一次的commit

chore: 构建工具或构建过程等的变动，如：gulp 换成了 webpack，webpack 升级等

style : 代码格式改变

docs: 文档修改

test: 增加测试代码
```

Git log 提交信息过滤：`git log --grep <regexp>`

## 二、Git commit 规范校验：husky + commitlint

husky 是一个 Git Hook 工具，能够实现提交前 eslint 校验和 commit 校验。

commitlint 用于检查您的提交消息是否符合规定提交格式，一般和 husky 包一起使用，用于对 git commit 信息的格式进行校验，当 commit 信息不符合规定格式的情况下将会抛出错误。

commitlint 的默认格式与 Angular 规范一致。

开始配置:
#### 步骤一：安装 husky 
```
npm install husky --save-dev
```

#### 步骤二：安装 commitlint
```
npm install --save-dev @commitlint/{cli,config-conventional}
```

#### 步骤三：修改 package.json
```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }  
  }
}
```

#### 步骤四：添加 commitlint.config.js  配置文件

项目根目录下创建 commitlint.config.js 文件，配置如下：
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'test', 'chore', 'revert', 'merge']
    ],
    // 'type-case': [0],
    // 'type-empty': [0],
    // 'scope-empty': [0],
    // 'scope-case': [0],
    // 'subject-full-stop': [0, 'never'],
    // 'subject-case': [0, 'never'],
    // 'header-max-length': [0, 'always', 72]
  }
}
```

配置说明: 规则由键值和配置数组组成，如：'name: [0, 'always', 72]'

第一位是 level 等级，可选 0（禁用）1（警告）2 （错误）

第二位为该规则是否被应用，可选 always | never

第三位为该规则允许值

配置完成，可以试一下提交了，

![](/images/engineering/example.png)

如上图所示，commit 信息是 updateadf，不符合我们的规范，就会报错。
