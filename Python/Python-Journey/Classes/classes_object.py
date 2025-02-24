"""
Python is an object oriented programming language.

Almost everything in Python is an object, with its properties and methods.

A Class is like an object constructor, or a "blueprint" for creating objects.

An Object is an Instance of a class
Class: Human
Object : Mary,John, Jack

Note: All function in classes have it least 1 parameter called self. 
self is a reference to the current object. It is the same as this keyword in javascript

Constructor: Special method that is called when you call the object
"""


class Point:
    #
    def __init__(self, x, y):
        # These are instance method.
        self.x = x
        self.y = y

    def draw(self):
        print(f"X:{self.x}, Y:{self.y}")


point_object = Point(3, 2)
point_object.draw()


# Margic mathod. They have two underscore which is automically called by python interter

class Point2:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return (f"Point X:{self.x}, Y:{self.y}")

    def draw(self):
        print(f"Points X:{self.x}, Y:{self.y}")


point2_object = Point2(3, 8)
# <__main__.Point2 object at 0x1029100e0>: name of the module, follow by th eclass name, and the address in memory
print(point2_object)

"""
Comparing Objects
By defaults, the == (Equality operator) compare the references or addresses of the two diffent object in memory
"""


class Point3:
    def __init__(self, x, y):
        self.x = x
        self.y = y


p1 = Point3(1, 2)
p2 = Point3(1, 2)

# Return false: compare the references or addresses of the two diffent object in memory
print(p1 == p2)

# To solve this problem, we use the magic method


class Point4:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, others):
        return (self.x == others.x and self.y == others.y)

    # To check for greater
    def __gt__(self, others):
        return (self.x > others.x and self.y > others.y)


points = Point4(3, 3)
others = Point4(3, 3)
other = Point4(4, 5)
print(points == others)
print(other > others)
