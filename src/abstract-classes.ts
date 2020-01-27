interface Dimensions {
    radius: number;
    circum: number;
}

abstract class Shape {
    abstract dimensions(): Dimensions;
    draw(): void {

    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    public dimensions(): Dimensions {
        const dim: Dimensions = {
            radius: 0,
            circum: 0
        }
        return dim;
    }
}

const c = new Circle();
c.dimensions();
c.draw();
