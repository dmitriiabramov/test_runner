'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.












































describe = describe;exports.












it = it;exports.












beforeEach = beforeEach;exports.



afterEach = afterEach;var _utils = require('./utils');var GLOBAL_DESCRIBE_NAME = '__global_describe__';global.__global_describe__ = makeDescribe(GLOBAL_DESCRIBE_NAME);global.__describe_stack__ = [global.__global_describe__];global.__is_there_any_only_calls__ = false;function makeIt(name, fn) {return { name: name, fn: fn, skipped: false, only: false };}function makeDescribe(name) {return { name: name, its: [], children: [], beforeEach: [], beforeAll: [], afterEach: [], afterAll: [], skipped: false, only: false };}function addDescribe(name, fn) {var describe = makeDescribe(name);(0, _utils.last)(global.__describe_stack__).children.push(describe);global.__describe_stack__.push(describe);fn();global.__describe_stack__.pop();return describe;}function addIt(name, fn) {var it = makeIt(name, fn);(0, _utils.last)(global.__describe_stack__).its.push(it);return it;}function describe(name, fn) {addDescribe(name, fn);}describe.skip = function (name, fn) {addDescribe(name, fn).skipped = true;};describe.only = function (name, fn) {addDescribe(name, fn).only = true;global.__is_there_any_only_calls__ = true;};function it(name, fn) {addIt(name, fn);}it.skip = function (name, fn) {addIt(name, fn).skipped = true;};it.only = function (name, fn) {addIt(name, fn).only = true;global.__is_there_any_only_calls__ = true;};function beforeEach(fn) {(0, _utils.last)(global.__describe_stack__).beforeEach.push(fn);}function afterEach(fn) {
  (0, _utils.last)(global.__describe_stack__).afterEach.push(fn);}