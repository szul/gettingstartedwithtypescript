namespace Dec {
    interface Shape {
        height: number;
        width: number;
    }
    interface Shape {
        color: string;
    }
    const s: Shape = {
        height: 10,
        width: 10,
        color: 'blue'
    };
}

function drawCircle(): void {
    this.circum = 10;
}

namespace drawCircle {
    export let radius: number;
    export let circum: number;
}

