"""
Classes are blue print for creating new object. 
Everything in python is a class which is a blueprint for creating an object

An Object is an instance of a class
class : Human
object : Mary, John, Sahr


Noted: All function in classes should have at lease one parameter, called self: 
 # self is a reference to the current object. It is the same as this keyword in javascript
"""

x = 33
print(type(x))


class Point:
    def __draw__(self):
        print("Draw")


"Create a constructor"


class Point2:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def draw(self):
        return f"({self.x} {self.y})"


points = Point2(2, 3)
print(points.draw())


"Creating a person object"


class Person:
    def __init__(self, firstname, lastname):
        self.firstname = firstname
        self.lastname = lastname

    def sayHi(self):
        return f"Greetings from {self.firstname} {self.lastname}"


userObje = Person('Kelvin', 'Mac')
print(userObje.sayHi())
