package InterviewPrep;

/**
 * Inheritance and Polymorphism
 * 
 * Scenario: A geometry software tool needs to handle different types of shapes
 * and calculate their area. Starting with a general Shape class, it extends to
 * specific shapes like Circle and Rectangle.
 * 
 **/
public class Gemoetry {
    public static void main(String[] args) {
        // Compile Time Polormorphism
        Shapes circleshape = new Circle(2.3, "Circle");
        System.out.println(circleshape.getArea());

        Shapes recshape = new Rectangle("Rectanctle", 15, 4);
        System.out.println(recshape.getArea());
    }

}

class Shapes {
    String name;

    public float getArea() {
        return 0;
    }

    public String shapeType() {
        return ("Shape Type:" + this.name);
    }
}

class Circle extends Shapes {
    double radius;

    Circle(double radius, String name) {
        this.radius = radius;
        this.name = name;
    }

    public float getArea() {
        return (int) (Math.PI * radius * radius);
    }
}

class Rectangle extends Shapes {
    int height;
    int width;

    Rectangle(String name, int height, int width) {
        this.height = height;
        this.width = width;
        this.name = name;
    }

    public float getArea() {
        return (float) this.width * this.height;
    }

}