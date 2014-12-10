#Johayo clock
### <a href='http://johayo.com' target='_black'>Go to Demo</a>

##설명
먼가 한번 모듈을 만들어 보겠다는 생각에 한번 만들어봤습니다. directive만 사용한 모듈이지만 그래도 첫 모듈인 만큼 만족합니다.

###Usage
HTML:
```html
<link rel="stylesheet" href="clock.min.css"/>
<script src="johayo-clock.min.js"></script> 

<johayo-clock></johayo-clock>
or
<div johayo-clock></div>
```
js :
```javascipt
<script src="angular.min.js"></script>
var app = angular.module('exampleApp', ['johayo.clock']);
```
css같은 경우 직접 수정해도 됩니다. css 파일을 열어보면 이해가 되실꺼라 생각됩니다.
