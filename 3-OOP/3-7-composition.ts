{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans: number = 0;
        public constructor(
            coffeeBeans: number,
            private milk: MilkFrother,
            private sugar: SugarProvider
        ) {
            this.coffeeBeans = coffeeBeans;
        } // class를 이용하여 object를 만들 때 항상 실행되는 함수
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than zero');
            }
            this.coffeeBeans += beans;
        }
        clean() {
            console.log('cleaning the machine...');
        }
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void {
            console.log('heating up....');
        }
        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots....`);
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }
    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }
    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }
    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some milk... ');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steaming some milk... ');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold Steaming some milk... ');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    // 설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from candy');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            };
        }
    }
    class SugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from jar');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            };
        }
    }
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const candyMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, fancyMilkMaker, sugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
