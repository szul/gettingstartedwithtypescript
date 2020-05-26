interface Person {
    firstName: string;
    middleName: string;
    lastName: string;
}

class List<T> {
    public filters: T;
    constructor() {

    }
}

const personList = new List<Person>();

personList.filters.lastName = 'Szul';
