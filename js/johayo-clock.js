/**
 * Created by 동준 on 2014-12-10.
 */
(function(window, document, undefined) {
    angular.module('johayo.clock', [])
        .directive('johayoClock', function($timeout){
            return {
                restrict: 'AE',
                replace: true,
                template: '<div style="padding-left: 1%;word-break: break-all;">' +
                '<div style="color: #000000">' +
                '<div class="johayo-circle">' +
                '<div class="johayo-face">' +
                '<div id="hour" class="johayo-hour" ng-style="moveHour"></div>' +
                '<div id="minute" class="johayo-minute" ng-style="moveMinute"></div>' +
                '<div id="second" class="johayo-second" ng-style="moveSecond"></div>' +
                '</div>' +
                '</div>' +
                '<div class="johayo-date">{{nowDate | date : "EEEE, dd MMMM yyyy"}}</div>' +
                '<div class="johayo-time">{{nowDate | date : "hh:mm:ss a"}}</div>' +
                '</div>' +
                '</div>',
                link: function (scope, element, attrs) {
                    var updateTime = function(){
                        var date = new Date();
                        var second = date.getSeconds() * 6;
                        var minute = date.getMinutes() * 6 + second / 60;
                        var hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;
                        scope.moveHour = {
                            'transform' : 'rotate('+hour+'deg)',
                            '-ms-transform' : 'rotate('+hour+'deg)',
                            '-webkit-transform' : 'rotate('+hour+'deg)'
                        };
                        scope.moveMinute = {
                            'transform' : 'rotate('+minute+'deg)',
                            '-ms-transform' : 'rotate('+minute+'deg)',
                            '-webkit-transform' : 'rotate('+minute+'deg)'
                        };
                        scope.moveSecond = {
                            'transform' : 'rotate('+second+'deg)',
                            '-ms-transform' : 'rotate('+second+'deg)',
                            '-webkit-transform' : 'rotate('+second+'deg)'
                        };
                        scope.nowDate = date;
                        $timeout(updateTime, 1000);
                    };

                    updateTime();
                }
            }
    })
})(window, window.angular);