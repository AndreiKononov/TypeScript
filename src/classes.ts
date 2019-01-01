import * as Interfaces from "./interfaces";

class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    name: string;
    email: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string = 'BLA';

    protected constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    };

    abstract printCitation(): void;
}

export {UniversityLibrarian, ReferenceItem};
