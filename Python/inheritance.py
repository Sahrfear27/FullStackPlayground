# Inheritance: Mechanism that allowed us to define a common behavior in one class and inherit them in other class


# Inherit from parent

# Base class / parent class
class Animal:
    def __init__(self):
        self.age = 1

    def eat(self):
        print("All animal can eat")


# Derive class / Child class
# To inherit from the parent class base class; you define a subclass and put the base class in parenthersis
class Mammal(Animal):
    def walk(self):
        print("All mammal can walk")


class Fish(Animal):
    def swim(self):
        print("All fish can swim")


obj1 = Mammal()
obj1.eat()
obj1.walk()

obj2 = Fish()
print(obj2.age)


# To check if class is derived from another class, you use issubclass
print(issubclass(Fish, Animal))


# Overriding a class : The name is automatically override by the subclass
print("\n ___Overriding Classes___")


class Person:
    def __init__(self, name):
        self.name = name


class MDPerson(Person):
    def __init__(self, name):
        self.name = "Doctor " + name


class SDPerson(Person):
    def __init__(self, name):
        self.name = "Engineer " + name


person = Person("Alves")
print(person.name)
medicalPerson = MDPerson("Olivia")
print(medicalPerson.name)
softwarePerson = SDPerson("Sahrfear")
print(softwarePerson.name)


# If you define an __init__ method in the derive, you are authomatically replacing the __init__() from its subclass
# To fix this, you use the super keyword
class Person2:
    def __init__(self, name):
        self.name = name


class EmailPerson(Person2):
    def __init__(self, name, email):
        super().__init__(name)
        self.email = email


# This means when we create an object of email person, we need to pass two argument
sahrfear = EmailPerson("Sahrfear Macarthy", "sahrfear@gmail.com")

print(sahrfear.email)
print(sahrfear.name)


# Multip level inheritance
class Employee:
    def greet(self):
        return "Employee Greet"


class Person:
    def greet(self):
        return "Person Greet"

# Manager sub class inherit from Employee and Person class
# Python intepreter will inherite the first baseclass:
# this happen when the base classes have some attribute in common


class Manager(Person, Employee):
    pass


managerObje = Manager()
print(managerObje.greet())


# Creating a muntiple inheritance that do not have common behavior or attribute
# Here we created a subclasss that can both swim and fly
class Flyer:
    def fly(self):
        return "I am flying"


class Swimmer:
    def swin(self):
        return "I can Swim"


class FlyFish(Flyer, Swimmer):
    pass


fishObj = FlyFish()
print(fishObj.fly())
print(fishObj.swin())


# Good example of inheritance
"Reading a stream file from a newtwork,common behavior; open them , read them and close them"


class InvalidExceptionError(Exception):
    pass


class Stream:
    def __init__(self):
        self.opened = False

    def open(self):
        if self.opened:
            raise InvalidExceptionError("The string is already opened")
        else:
            return "File open successfully"

    def close(self):
        if not self.opened:
            raise InvalidExceptionError("File already close")
        else:
            return "File colse successfully"

# Object to read file stream and newtwork stream


class FileStream(Stream):
    def read(self):
        return "Reading file from the file stream"


class NetworkStream(Stream):
    def read(self):
        return "Reading network stream"


fileObj = FileStream()
print(fileObj.open())

networkObj = NetworkStream()
print(networkObj.close())


# Abstract base class: This will help prevent from instiatiation the base class
