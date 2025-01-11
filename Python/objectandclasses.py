
class Cat:
    pass


cat_a = Cat()
another_cat = Cat()


# When you define a class in python, we didnt specify how to print an object from this class.
# Hence the output will be like this."<__main__.Cat object at 0x1024bae40>" there is a default behavior to avaoid this

print(cat_a)
print(another_cat)


# Assign new attribute to the class

cat_a.age = 20
cat_a.name = "Fuzzy"
cat_a.nameis = another_cat
print(cat_a.age)
print(cat_a.name)
# print(cat_a.nameis.name)

cat_a.nameis.name = "Pizz"
print(cat_a.nameis.name)


print("\n_____Initialization____")
# If you want to assign an object attribute at creation time, you will need to specify it in the constructor


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age


# The __init__ create a new object in  memory and reference to the newly created object as self and other argument such as
# name and age
dog_a = Dog("Jacky", 4)
print(dog_a.age)
print(dog_a.name)
