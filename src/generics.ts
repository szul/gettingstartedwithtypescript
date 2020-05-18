interface Person {
    firstname: string;
    middlename: string;
    lastname: string;
}

class List<T> {
    public filters: T;
    constructor() {

    }
}

const person = new List<Person>();
person.filters.lastname = 'szul';
