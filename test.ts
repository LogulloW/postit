class Student {
    constructor(name: string, age: number, isGraduated: boolean){
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    public name: string = '';
    public age: number = 0;
    public isGraduated: boolean = false;

    public studentFormattedData(): string {
        return 'Nome: ' + this.name + 'Idade: ' + this.age;
    }
}

const student = new Student('Henrique', 24, true);

if (student.isGraduated) {
    const dataFormated = student.studentFormattedData()
    console.log(dataFormated);
}