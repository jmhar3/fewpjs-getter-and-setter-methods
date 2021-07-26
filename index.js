// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    get circumference() {
        return this.pi * this.diameter
    }

    set circumference(newCircumference) {
        this.radius = (newCircumference / this.pi) / 2
    }

    get area() {
        return this.pi * (this.radius * this.radius)
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / this.pi)
    }
}