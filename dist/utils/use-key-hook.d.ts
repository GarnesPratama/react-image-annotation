interface IParamType {
    detectKeys: Array<string | number>;
    keyevent?: "keydown" | "keyup" | "keypress";
}
declare const useKey: (callback: (currentKeyCode: number, event: Event) => unknown, { detectKeys, keyevent }: IParamType, { dependencies }?: {
    dependencies?: never[] | undefined;
}) => any;
export { useKey };
