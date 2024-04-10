type Left = {
    keyA: number;
    keyB: string;
    keyC: number;
}

type Right = {
    keyB: string;
    keyD: string;
}

type EVERYTHING = Left & Right;
type CenterKeys = keyof Left & keyof Right;
type Center = Pick<EVERYTHING, CenterKeys>;

const example: Center = {
    keyB: "someString"
}
