// Generated by dts-bundle v0.7.3

declare module 'cus-utils' {
    export { default as awaitWrap } from 'cus-utils/awaitWrap';
    export { default as clearTimeId } from 'cus-utils/clearTimeId';
    export { default as compose } from 'cus-utils/compose';
    export { default as curry } from 'cus-utils/curry';
    export { default as getTypeObj } from 'cus-utils/getTypeFn';
    export { getTypeFn, isArray, isObject } from 'cus-utils/getTypeFn';
    export { default as toFixedNumber } from 'cus-utils/toFixedNumber';
    export { default as getLowerCase } from 'cus-utils/lowerCase';
    export { default as parseUrlQuery } from 'cus-utils/parseUrlQuery';
    export { default as launchIDEConfig } from 'cus-utils/launchIDEConfig';
    export { default as makeMap } from 'cus-utils/makeMap';
    export { default as preTransformNodeList } from 'cus-utils/preTransformNode';
}

declare module 'cus-utils/awaitWrap' {
    export default function awaitWrap<T, U = unknown>(promise: Promise<T>): Promise<[U | null, T | null]>;
}

declare module 'cus-utils/clearTimeId' {
    type ClearTimeIdType = () => {
        clearTimeoutFn: () => void;
        clearSetIntervalFn: () => void;
        setTimeoutIdToList: (id: number) => void;
        setTimersListToNull: () => void;
        timersArr: number[];
    };
    const clearTimeId: ClearTimeIdType;
    export default clearTimeId;
}

declare module 'cus-utils/compose' {
    type Func<T extends any[], R> = (...a: T) => R;
    export default function compose(): <R>(a: R) => R;
    export default function compose<F extends Function>(f: F): F;
    export default function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
    export default function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
    export default function compose<A, B, C, T extends any[], R>(f1: (c: C) => R, f2: (b: B) => C, f3: (a: A) => B, f4: Func<T, A>): Func<T, R>;
    export default function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R;
    export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;
    export {};
}

declare module 'cus-utils/curry' {
    interface Curry1<T1, R> {
        (): Curry1<T1, R>;
        (t1: T1): R;
    }
    interface Curry2<T1, T2, R> {
        (): Curry2<T1, T2, R>;
        (t1: T1): Curry1<T2, R>;
        (t1: T1, t2: T2): R;
    }
    interface Curry3<T1, T2, T3, R> {
        (): Curry3<T1, T2, T3, R>;
        (t1: T1): Curry2<T2, T3, R>;
        (t1: T1, t2: T2): Curry1<T3, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface Curry {
        <T1, R>(fn: (t1: T1) => R): Curry1<T1, R>;
        <T1, T2, R>(fn: (t1: T1, t2: T2) => R): Curry2<T1, T2, R>;
        <T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R): Curry3<T1, T2, T3, R>;
    }
    const curry: Curry;
    export default curry;
}

declare module 'cus-utils/getTypeFn' {
    import type { UnionType } from 'cus-utils/util.interface';
    type GetTypeFnType = (type: UnionType) => (target: unknown) => boolean;
    export const getTypeFn: GetTypeFnType;
    export const isObject: (target: unknown) => boolean;
    export const isArray: (target: unknown) => boolean;
    const _default: {
        getTypeFn: GetTypeFnType;
        isObject: (target: unknown) => boolean;
        isArray: (target: unknown) => boolean;
    };
    export default _default;
}

declare module 'cus-utils/toFixedNumber' {
    export default function toFixedNumber(val: string | number, num?: number): number;
}

declare module 'cus-utils/lowerCase' {
    export default function getLowerCase(val: string): string;
}

declare module 'cus-utils/parseUrlQuery' {
    import { TypeParseUrlQuery } from 'cus-utils/util.interface';
    const parseUrlQuery: <Str extends string>(url: Str) => TypeParseUrlQuery<Str>;
    export default parseUrlQuery;
}

declare module 'cus-utils/launchIDEConfig' {
    export const jsStr = "(function (options) {\n    const ideName = options.ideName ?? \"vscode\";\n    const SKIP = \"SKiP\";\n\n    const getLineColumn = (completeFilepath) => {\n      const [filePath, line, column] = completeFilepath.split(':')\n\n      return {\n        filePath,\n        line,\n        column\n      }\n    }\n\n    const formatLaunchIdeUrl = {\n      'webstorm': (completeFilepath) => {\n        const { line, column, filePath } = getLineColumn(completeFilepath)\n        return \"webstorm://open?file=\" + filePath + \"&line=\" + line + \"&column=\" + column\n      },\n      'vscode':  (completeFilepath) => {\n        return \"vscode://file\" + completeFilepath\n      },\n      'default':  (completeFilepath) => {\n        return ideName + \"://file\" + completeFilepath\n      },\n    }\n\n    let getUrlFn = options.userGetUrl ? options.userGetUrl : (formatLaunchIdeUrl[ideName] ?? formatLaunchIdeUrl['default']);\n\n    const OPENIDE = (completeFilepath) => {\n      const url = getUrlFn(completeFilepath)\n      window.location.assign(url);\n    }\n\n    const documentClickEvent = (event) => {\n      let completeFilepath = event.target.getAttribute(\"complete-filepath\");\n      let currentElement = event.target;\n      let parentElement;\n\n      while (completeFilepath === null) {\n        if (completeFilepath === SKIP) {\n          return;\n        }\n        const nodeName = currentElement.nodeName.toLowerCase();\n        // console.log(nodeName, \"nodeNamenodeName\");\n\n        if (nodeName === \"body\") {\n          throw new Error(\"\u8BF7\u68C0\u67E5 babel-plugin-jsxfileattribute \u63D2\u4EF6\u662F\u5426\u5F00\u542F\");\n        }\n\n        parentElement = currentElement.parentElement;\n\n        completeFilepath = parentElement?.getAttribute?.(\"complete-filepath\");\n\n        currentElement = parentElement;\n      }\n\n      if (completeFilepath !== SKIP && window.ISCLICK && completeFilepath) {\n        console.log(completeFilepath, \"completeFilepath\");\n\n        OPENIDE(completeFilepath)\n        window.ISCLICK = false;\n      }\n    };\n\n    document.addEventListener(\"click\", documentClickEvent);\n\n    const ALT = \"Alt\";\n    window.addEventListener(\"keydown\", (event) => {\n      if (event.altKey) {\n        window.ISCLICK = true;\n      }\n    });\n    window.addEventListener(\"keyup\", (event) => {\n      window.ISCLICK = false;\n    });\n    console.log(\n      \"%c%s\",\n      \"color: red;font-size: 28px;background: #fff;\",\n      \"\u5DF2\u6210\u529F\u5F00\u542F launch IDE \u529F\u80FD\",\n    );\n\n    console.log(\n      \"%c%s\",\n      \"color: green;font-size: 16px;background: #fff;\",\n      \"\u6309\u4F4F Option(Alt) \u952E \u540C\u65F6 \u70B9\u51FB\u9875\u9762\u5143\u7D20, \u5373\u53EF\u5524\u8D77 IDE\",\n    );\n  })(options ?? {});\n";
    export default function launchIDEConfig(ideName?: string, userGetUrl?: (completeFilepath: string) => string): string;
}

declare module 'cus-utils/makeMap' {
    const makeMap: any;
    export default makeMap;
}

declare module 'cus-utils/preTransformNode' {
    const getPreTransformNode: (options?: {
        isShowRelativerPath?: boolean;
        projectRootPath?: string;
    }) => {
        preTransformNode: (ast: {
            tag: string;
            attrsList?: {
                name: string;
                value: any;
            }[];
        }, b: {
            filename: string;
        }) => {
            tag: string;
            attrsList?: {
                name: string;
                value: any;
            }[] | undefined;
        };
    }[];
    export default getPreTransformNode;
}

declare module 'cus-utils/util.interface' {
    export type UnionType = 'String' | 'Array' | 'Boolean' | 'Object' | 'Number' | 'Null' | 'Undefined' | 'Symbol' | 'BigInt' | 'Function';
    export type TypeParseUrlQueryItem<S> = S extends `${infer L}=${infer R}` ? {
        [K in L]: R;
    } : Record<string, any>;
    export type TypeCombine<T, P> = T extends P ? P : T extends unknown[] ? [...T, P] : [T, P];
    export type TypeMerge<T extends Record<string, any>, P extends Record<string, any>> = {
        [K in keyof T | keyof P]: K extends keyof T ? (K extends keyof P ? TypeCombine<T[K], P[K]> : T[K]) : K extends keyof P ? P[K] : never;
    };
    export type TypeParseUrlQuery<S extends string> = S extends `${infer L}&${infer R}` ? TypeMerge<TypeParseUrlQueryItem<L>, TypeParseUrlQuery<R>> : TypeParseUrlQueryItem<S>;
}

