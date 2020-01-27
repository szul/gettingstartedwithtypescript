// <span id="age">41</span>

const domAge = <number><any>document.querySelector('#age').textContent;

const f: any = document.querySelector('#age').textContent;
const domAge2: number = f as number;

const s: string = (document.querySelector('#button') as HTMLElement).style.backgroundColor;
