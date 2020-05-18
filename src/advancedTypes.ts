interface People {
    no: number;
    state: string;
    ethnicity?: string;
}

interface Animals {
    no: number;
    state: string;
    kind?: string;
}

function get(): People & Animals {
    return {
        no: 1,
        state: 'VA',
        kind: 'person'
    };
}

const result = get();

function exact(target: number | string): boolean {
    return true;
}

exact("1");

type AjaxRequest = string | JSON | XMLDocument;

