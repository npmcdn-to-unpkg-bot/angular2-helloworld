/// <reference path="../node_modules/@angular/common/index.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent)
    .then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map