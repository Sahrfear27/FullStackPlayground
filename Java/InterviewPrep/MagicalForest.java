package InterviewPrep;

/**
 * In the magical forest of Melodia, the animals have formed an orchestra. Each
 * type of animal plays its own unique instrument. However, every animal shares
 * the ability to join the orchestra and perform. The conductor, Maestro Owl,
 * wants a program to manage the animals and their performances but also wants
 * to demonstrate how each animal has its own special way of playing its
 * instrument.
 * 
 * Question:
 * Can you help Maestro Owl write a Java program using inheritance and
 * polymorphism that defines a base class Animal and derived classes Bird, Dog,
 * and Cat, where each animal plays its instrument differently?
 * 
 **/

public class MagicalForest {
    public static void main(String[] args) {

        // creates an array of Animal references, each pointing to a concrete
        // subclass instance (Bird, Dog, Cat). This is a classic use of polymorphism in
        // Java.
        Animal[] orchestra = {
                new Dog("Jack"),
                new Bird("Devin"),
                new Cat("Kartin")
        };

        for (Animal animal : orchestra) {
            animal.orchestra();
            animal.playInstrument();
            System.out.println("\n");
        }

    }
}

abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void playInstrument();

    public void orchestra() {
        System.out.println(this.name + " Joins the orchestra");
    }

}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void playInstrument() {
        System.out.println("Dog sings using the Drum instrument");

    }
}

class Cat extends Animal {
    Cat(String name) {
        super(name);
    }

    @Override
    void playInstrument() {
        System.out.println("Cat sings meliody with the Mic");
    }

}

class Bird extends Animal {
    Bird(String name) {
        super(name);
    }

    @Override
    void playInstrument() {
        System.out.println("Bird sings Music with the guarter");

    }
}