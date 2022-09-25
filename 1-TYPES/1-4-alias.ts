{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: Text = 'keng';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'dog',
        age: 12,
    };
    /**
     * String Literal Types
     */
    type Name = 'name';
    let kengName: Name;
    kengName = '12';
    kengName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = false;
}
