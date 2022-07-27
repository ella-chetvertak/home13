    // First

const decorator = '=====================================';
function decor() {
    console.log(decorator);
}
let student = {
    firstName: 'John',
    lastName: 'Doe',
    averageScore: 4.8,
    getFullName: function() {
        return(`${this.firstName} ${this.lastName}`);
    },
    isGrantHolder: function() {
        return this.averageScore >= 4
    }
}
function Aspirant(dissertationTopic, isDissertationComplete) {
    this.dissertationTopic = dissertationTopic;
    this.isDissertationComplete = isDissertationComplete;
    this.__proto__ = student;
    this.isGrantHolder = function() {
        return this.averageScore >= 4.5 && isDissertationComplete === true;
    }
}
let aspirant = new Aspirant('math', false);
for (let key in aspirant) {
    console.log(aspirant[key])
}
decor();
console.log(student.isGrantHolder()); //true
console.log(aspirant.isGrantHolder()); // false
decor();

    // Second

class Plane {
    constructor(name, isFlying) {
        this.name = name;
        if (isFlying === undefined) {
            this.isFlying = false
        } else this.isFlying = isFlying
    }
    takeOff() {
        this.isFlying = true
    }
    land() {
        this.isFlying = false
    }
}
const airport = {
    planes: [],
    getFlyingPlanes: function() {
        let acum = 0;
        this.planes.forEach((currentValue) => {
            if (currentValue.isFlying) acum++;
        });
        return acum;
    }
}
let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
let plane3 = new Plane("Airbus");
plane2.takeOff();
plane3.takeOff();
airport.planes.push(plane1, plane2, plane3);
console.log(airport.getFlyingPlanes());