# Antd-admin-layout

English | [简体中文](./README-zh.md)

<hr>

## Description
A Basic Admin Layout Base On Ant Design

support [light|dark] side bar theme colors change.

## Abc-stack
- React
- Ant Design/Ant Design Pro
- Umijs
- Dva
- React-redux

## Directory structure 
```shell script
$ tree -I node_modules -L 9 -a
.
|-- .env
|-- .gitignore
|-- config
|   `-- config.js
|-- package.json
`-- src
    |-- document.ejs
    |-- layouts
    |   `-- BasicLayout
    |       |-- Content
    |       |   |-- index.js
    |       |   `-- index.less
    |       |-- Footer
    |       |   |-- index.js
    |       |   `-- index.less
    |       |-- Header
    |       |   |-- index.js
    |       |   `-- index.less
    |       |-- Sider
    |       |   |-- index.js
    |       |   `-- index.less
    |       |-- components
    |       |   |-- Header
    |       |   |   |-- icons.js
    |       |   |   |-- rightContent.js
    |       |   |   `-- rightContent.less
    |       |   `-- Sider
    |       |       |-- components
    |       |       |   |-- Logo
    |       |       |   |   |-- index.js
    |       |       |   |   `-- index.less
    |       |       |   `-- SiderMenu
    |       |       |       |-- index.js
    |       |       |       `-- index.less
    |       |       |-- siderbar.js
    |       |       |-- siderdrawer.js
    |       |       `-- siderdrawer.less
    |       |-- index.js
    |       |-- index.less
    |       `-- layout-global.less
    |-- models
    |   `-- layout.js
    `-- pages
        |-- .umi
        |   |-- dva.js
        |   |-- history.js
        |   |-- polyfills.js
        |   |-- router.js
        |   |-- umi.js
        |   `-- umiExports.ts
        |-- Dashboard
        |   |-- Project1
        |   |   |-- index.js
        |   |   `-- index.less
        |   |-- Project2
        |   |   |-- index.js
        |   |   `-- index.less
        |   `-- index.js
        |-- Errors
        |   `-- NotFound
        |       `-- index.js
        |-- User
        |   |-- UserList
        |   |   |-- index.js
        |   |   `-- index.less
        |   |-- UserRegister
        |   |   |-- index.js
        |   |   `-- index.less
        |   `-- index.js
        `-- components

29 directories, 52 files

```

## Quick start

### 1. Install nodejs
Make sure you have installed nodejs on you computer.

[download and install nodejs](https://nodejs.org/zh-cn/)

### 2. Install umijs
```shell script
npm install umi@^2.0.0 -g
```

### 3. Clone project
```shell script
git clone https://github.com/gogo-fast/antd-admin-layout.git
cd antd-admin-layout
```

### 4. Install dependencies
```shell script
npm install
```

### 5. Start local server
```shell script
npm run start
```
or
```shell script
npm start
```

## Visit local server
`http://localhost:8000`

> Modify file `.env` to set listening host and port.

- Pc full screen

<div  align=center>
<img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/1590146478910.png" width = "900"  alt="全屏" />
</div>

- Ipad horizontal
<div  align=center>
<img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/1590149861980.png" width = "600"  alt="图片名称" />
</div>

- Ipad vertical
<div  align=center>
<img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/1590146801968.png" width = "450"  alt="图片名称" />
<img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/1590146873202.png" width = "450"  alt="图片名称" />
</div>

- Galaxy vertical

<div  align=center>
<img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/1590146750081.png" width = "300"  alt="图片名称" />
</div>

- Light and Dark

<div  align=center>
  <img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/theme-light.png" width = "900"  alt="Light" />
 </div>

<div  align=center>
  <img src="https://github.com/gogo-fast/pictures/blob/master/antd-admin-layout/theme-dark.png" width = "900"  alt="Dark" />
 </div>
