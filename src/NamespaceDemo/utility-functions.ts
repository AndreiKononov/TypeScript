namespace Utility {
    export namespace Fees {
        export function calculateLateFee(daysLate: number): number  {
            return daysLate * 0.25;
        }
    }
    export function maxBooksAlloved(age: number): number {
        return age < 12 ? 3 : 10;
    }
    function privateFunc(): void {
        console.log('This is private');
    }
}