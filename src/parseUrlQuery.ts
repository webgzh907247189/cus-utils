import { TypeParseUrlQuery } from './util.interface';

const parseUrlQuery = <Str extends string>(url: Str): TypeParseUrlQuery<Str> => {
    // 用 as any 来对返回值类型做了断言，这是因为 ParseQueryString<Str> 要传入类型参数 Str 才能知道具体的类型，
    // 而具体传入什么在类型检查时是不知道的，所以这里要 as any 才能通过类型检查。
    if (!url || !url.length) {
        return {} as any;
    }

    const [, queryStr] = url.includes('?') ? url.split('?') : [, url];
    return queryStr.split('&').reduce((result, item) => {
        const [key, value] = item.split('=');
        if (result[key]) {
            if (Array.isArray(result[key])) {
                result[key].push(value);
            } else {
                result[key] = [result[key], value];
            }
        } else {
            result[key] = value;
        }

        return result;
    }, Object.create(null));
};

export default parseUrlQuery;
