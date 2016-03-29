# Emlastic

> jQuery plugin for creating elastic webpages


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/angel-vladov/jquery-emlastic/master/dist/jquery.emlastic.min.js
[max]: https://raw.githubusercontent.com/angel-vladov/jquery-emlastic/master/dist/jquery.emlastic.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/emlastic.min.js"></script>
<script>
  $(document).ready(function() {
    $.emlastic(); // "emlastic"
  });
</script>
```

#### Install with Bower
`bower install emlastic`

### Options
Supported options:

#### designSize

Type: `number`  
Default: `1920`

#### direction

Type: `String`
Default: `"horizontal"`  

Can be `horizontal` or `vertical`.

#### container

Type: `string`, `DOM Element`, `null`  
Default: `null`

#### pixelsInEm

Type: `number`  
Default: `100`

How many design pixels will one em contain. You'll need to devide by this number when writing values in you CSS.

## License

MIT © Angel Vladov
