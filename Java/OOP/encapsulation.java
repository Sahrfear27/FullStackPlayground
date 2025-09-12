package OOP;

/**
 * Encapsulation: It is a technique that is used to protect class data from
 * unauthorize access and modification using private keys and provide public
 * getters and setters
 * 
 * Use For:
 * 1. Data Handling
 * 2. Data Integrity
 * 3. Reasuibility : Encapsulated data is flexible and reusable
 * 4. Security: Data is protected and cannot be directely access
 **/

public class Encapsulation {
    public static void main(String[] args) {
        Person person_1 = new Person();
        person_1.setName("Jack");
        person_1.setAge(20);
        person_1.getName();
        person_1.getAge();

    }
}

class Person {
    private String name;
    private int age;

    // set the name and age
    public void setName(String name) {
        this.name = name;
    }

    public void getName() {
        System.out.println("The name is " + name);
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void getAge() {
        System.out.println("The age is " + age);
    }

}
