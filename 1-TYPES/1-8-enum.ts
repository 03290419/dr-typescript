{
    /*
     * Enum 여러가지 관련된 상수를 한 곳에 모아서 정의할 수 있는 함수
     */
    // Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Tuesday);
    const day = Days.Saturday;
    console.log(day);
}
//union으로 대체
type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
let dayOfWeek: DaysOfWeek = 'Monday';
dayOfWeek = 'keng'; //error
