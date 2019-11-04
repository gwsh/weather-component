/*
 * @Author: your name
 * @Date: 2019-11-05 00:04:18
 * @LastEditTime: 2019-11-05 00:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /weather-Component/js/gwsh-weather.js
 */
(function (d) {
    var cs = d.createElement("link");
    cs.rel = "stylesheet";
    cs.href = "css/weather-component.css?v=0101";
    var s = d.createElement("script");
    s.src = "js/weather-component.js?v=0101";
    var sn = d.getElementsByTagName("script")[0];
    sn.parentNode.insertBefore(cs, sn);
    sn.parentNode.insertBefore(s, sn);
})(document);