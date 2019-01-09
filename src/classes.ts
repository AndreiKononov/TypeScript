import * as Interfaces from "./interfaces";
import {logger, sealed, writable} from "./decorators";

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    department: string;
    name: string;
    email: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
    @writable(true)
    assistFaculty() {
      console.log('Assisting faculty.');
    }
    @writable(false)
    teachCommunity() {
      console.log('Teaching community.');
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
