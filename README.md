# @jdists/svgo

svgo as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [svgo](https://github.com/svg/svgo)

## Example

```html
<!--jdists encoding="svgo"-->
<svg width='200' height='200' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" x="0px" y="0px">
  <title>Bean bag</title>
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path d="M15.07,7.28c-.39-.35-.8-.72-1.22-1.13A8.9,8.9,0,0,1,12.28,3.5C11.5,1.78,10.69,0,8.5,0,.61,0,0,7.27,0,9.5v1C0,14.71,2.42,18,5.5,18h7A5.38,5.38,0,0,0,18,12.5C18,9.9,16.58,8.63,15.07,7.28ZM12.5,17h-7C3,17,1,14.14,1,10.5v-1C1,6.94,1.73,1,8.5,1c1.47,0,2,1.11,2.87,2.92a9.61,9.61,0,0,0,1.78,2.94c.42.42.85.81,1.25,1.17a18,18,0,0,1,1.35,1.3c-.51,1.28-2,2.23-4.35,2.69a3.89,3.89,0,0,1-3.07-.53A7,7,0,0,1,6,7.42L5,7.58A7.86,7.86,0,0,0,7.76,12.3a4.58,4.58,0,0,0,2.66.81A6,6,0,0,0,11.6,13c2.36-.46,4-1.44,4.82-2.77A4.33,4.33,0,0,1,17,12.5,4.35,4.35,0,0,1,12.5,17Z"/>
    </g>
  </g>
</svg>
<!--/jdists-->

<!--svgo-->
<svg width='200' height='200' fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" x="0px" y="0px">
  <title>Bean bag</title>
  <g data-name="Layer 2">
    <g data-name="Layer 1">
      <path d="M15.07,7.28c-.39-.35-.8-.72-1.22-1.13A8.9,8.9,0,0,1,12.28,3.5C11.5,1.78,10.69,0,8.5,0,.61,0,0,7.27,0,9.5v1C0,14.71,2.42,18,5.5,18h7A5.38,5.38,0,0,0,18,12.5C18,9.9,16.58,8.63,15.07,7.28ZM12.5,17h-7C3,17,1,14.14,1,10.5v-1C1,6.94,1.73,1,8.5,1c1.47,0,2,1.11,2.87,2.92a9.61,9.61,0,0,0,1.78,2.94c.42.42.85.81,1.25,1.17a18,18,0,0,1,1.35,1.3c-.51,1.28-2,2.23-4.35,2.69a3.89,3.89,0,0,1-3.07-.53A7,7,0,0,1,6,7.42L5,7.58A7.86,7.86,0,0,0,7.76,12.3a4.58,4.58,0,0,0,2.66.81A6,6,0,0,0,11.6,13c2.36-.46,4-1.44,4.82-2.77A4.33,4.33,0,0,1,17,12.5,4.35,4.35,0,0,1,12.5,17Z"/>
    </g>
  </g>
</svg>
<!--/svgo-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fsvgo
[npm-image]: https://badge.fury.io/js/%40jdists%2Fsvgo.svg
[travis-url]: https://travis-ci.org/jdists/svgo
[travis-image]: https://travis-ci.org/jdists/svgo.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/svgo?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/svgo/badge.svg?branch=master&service=github