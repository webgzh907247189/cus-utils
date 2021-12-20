declare type ClearTimeIdType = () => {
    clearTimeoutFn: () => void;
    clearSetIntervalFn: () => void;
    setTimeoutIdToList: (id: number) => void;
    setTimersListToNull: () => void;
    timersArr: number[];
};
declare const clearTimeId: ClearTimeIdType;
export default clearTimeId;
