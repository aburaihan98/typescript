let str: any = "Allah is our rob";

let index: number = (str as string).indexOf("i");

let index1: number = (<string>str).indexOf("i");
