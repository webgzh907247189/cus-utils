type ClearTimeIdType = () => {
    clearTimeoutFn: () => void;
    clearSetIntervalFn: () => void;
    setTimeoutIdToList: (id: number) => void;
    setTimersListToNull: () => void;
    timersArr: number[];
};

const clearTimeId: ClearTimeIdType = () => {
    let timersArr: number[] = [];

    // 清除 timersArr， 释放内存
    const setTimersListToNull = () => {
        timersArr.length = 0;
        Promise.resolve().then(() => {
            (timersArr as any) = null;
        });
    };

    const setTimeoutIdToList = (id: number) => {
        timersArr.push(id);
    };

    const clearTimeoutFn = () => {
        timersArr.forEach((timer) => clearTimeout(timer));
    };

    const clearSetIntervalFn = () => {
        timersArr.forEach((timer) => clearInterval(timer));
    };

    return {
        clearTimeoutFn,
        clearSetIntervalFn,
        setTimeoutIdToList,
        setTimersListToNull,
        timersArr,
    };
};
export default clearTimeId;
