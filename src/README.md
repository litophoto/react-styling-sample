# React の現状の style についてまとめたサンプル

## frameworks

1. tailwind css
2. Vanila css
3. CSS in JS
4. css modules
5. inline style

### tailwind css

npm i tailwindcss
[tailwind css](https://www.npmjs.com/package/tailwindcss)

### Vanila css

needless install
標準的な css
global な変数管理が課題
CSS 設計を行うことで回避している

### CSS in JS

npm i @emotion/react
[emotion(CSS in JS sample)](https://www.npmjs.com/package/@emotion/react)
CSS を JS のファイルの中で扱おうとするタイプのスタイリング
React と相性がいい
styled-component, emotion が有名

### css modules

npm i css-modules
[css modules](https://www.npmjs.com/package/css-modules)
標準的な css と同様に、別のファイルに css-style を記述する
import された css modules しかコンフリクトしないので、global な変数にならず class で迷う必要がないのが利点
nextjs における現在の標準

### inline style

needless install
一番 React と相性が悪い記法
初心者サイトで最も避けるべき記法と書いてある
便利なのは便利だが、これをするくらいなら tailwind css を利用する
レンダリングが遅くなり、愚直な書き方
基本的に一時的に描写を見たい時以外は一切使わない
