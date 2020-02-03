class Rectangle {
    private _length: number;
    constructor(length: number) {
        this._length = length;
    }
}

class Rectangle2 {
    constructor(private radius: number) {
        console.log(this.radius);
    }
}
