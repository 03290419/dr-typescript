{
    /**
     * Intersection Types : &
     */
    type Student = {
        name: string;
        score: number;
    };
    type Worker = {
        employeeId: number;
        work: () => void;
    };
    function internWorker(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }
    internWorker({
        name: 'keng',
        score: 12,
        employeeId: 123,
        work() {},
    });
}
