export default function toFixedNumber(val: string | number, num = 2): number {
    // 小数转为整数计算
    val = String(val);
    return (`${Math.round(`${parseFloat(val)}e${num}` as any as number)}e-${num}` as any as number) * 1;
}
