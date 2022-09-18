## util 所有函数 单元测试覆盖率 100%

### 行覆盖率、函数覆盖率、分支覆盖率、语句覆盖率居均达到 100%

### 前端公用 util (内置 awaitWrap clearTimeId compose curry getTypeFn lowerCase toFixedNumber 前端常用的 util 方法)

### awaitWrap 包装 promise 的高阶函数，返回值永远是一个数组 [err, data]

```javascript
let [err, data] = await awaitWrap(Promise.resolve('1'));
if (err) {
    console.log(err);
}
console.log(data);
```

### clearTimeId 用于在页面使用 setTimeout setInterval API 是忘记清理 id 存在，暴露方法统一清理 id

```javascript
const { clearSetIntervalFn, setTimeoutIdToList, clearTimeoutFn, timersArr, setTimersListToNull } = clearTimeId();

let id = window.setTimeout(() => {}, 0);
setTimeoutIdToList(id);

clearSetIntervalFn();
clearTimeoutFn();
setTimersListToNull();
```

### compose 用于在页面聚合多个方法

```javascript
let a = (x: string) => `a${x}`;
let b = (x: string) => `b${x}`;
let c = (x: string) => `c${x}`;

let composeFn = compose(a, b, c);
const result = composeFn('1'); // abc1
```

### curry 用于 科里化 传参

```javascript
let fn = (a: string, b: string, c: string) => `${a}${b}${c}`;
let curryFn = curry(fn, 'a');
const result = curryFn('b', 'c'); // abc
```

### getTypeFn 用于获取传入的变量的类型， getTypeFn 运行返回一个函数

```javascript
const isBoolean = getTypeFn('Boolean');
const result = isBoolean(false); // true

const result1 = isObject({}); // true
const result2 = isArray('1'); // false
```

### lowerCase 拿到小写的 str

```javascript
const val = 'ABC';
const result = getLowerCase(val); // 'abc'
```

### toFixedNumber 四舍五入

```javascript
const result = toFixedNumber(0.1 + 0.6789, 5); // 0.7789

const result1 = toFixedNumber(1.335); // 1.34

const result2 = toFixedNumber(1.334); // 1.33
```

### parseUrlQuery 解析字符串变成对象

```javascript
const result = parseUrlQuery('a=1&b=2&c=3&a=4&a=5'); // {a: ['1', '4', '5'], b: '2', c: '3'}

const result1 = parseUrlQuery('?a=1&b=2&c=3'); // {a: '1', b: '2', c: '3'}

const result2 = parseUrlQuery(''); // {}
```