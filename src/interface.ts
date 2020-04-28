interface IShape {
    type: string;
    height: number;
    width: number;
    draw?: () => void;
}

function drawShape(s: IShape): void {

}

drawShape({ type: 'square', height: 10, width: 10 });


class NewSquare implements IShape {
    public type: string;
    public height: number;
    public width: number;
    public draw(): void {

    }
}
