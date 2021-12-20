const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

let reportPath = path.resolve(__dirname, '../coverage/lcov-report/index.html');

const result = fs.readFileSync(reportPath);
const $ = cheerio.load(result);

let isExitFlag = false;

const domStrongList = $('.pad1 .fl.pad1y.space-right2 .strong');
const resultStrongList = [];
domStrongList.each(function () {
    resultStrongList.push({
        strong: $(this).text(),
    });
});

const domQuietList = $('.pad1 .fl.pad1y.space-right2 .quiet');
const resultQuietList = [];
domQuietList.each(function () {
    resultQuietList.push({
        quiet: $(this).text(),
    });
});

const resultObj = resultStrongList.reduce((result, item, idx) => {
    const { quiet } = resultQuietList[idx];
    const val = item.strong;

    const [realVal] = val.split('%', 1);
    if (realVal * 1 <= 96) {
        isExitFlag = true;
    }
    result[(key = quiet)] = val;
    return result;
}, Object.create(null));

console.log(resultObj);
if (isExitFlag) {
    console.log('\033[41;30m 单元测试覆盖率不达标  \033[0m');
    process.exit(1);
} else {
    console.log('\033[42;30m 单元测试覆盖率达标 \033[0m');
}
