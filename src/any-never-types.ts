function iDontKnow(): any {
    let whatIsThis: any;
    whatIsThis = 'michael';
    whatIsThis = 38;
    whatIsThis = { };
}

function keepGoing(): never {
    while(true) {

    }
}

function throwMeSomeException(err: string): never {
    throw new Error(`Internet server error: ${err}`);
}
