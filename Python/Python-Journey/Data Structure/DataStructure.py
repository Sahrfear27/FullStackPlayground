"""
Note: Built in data types in python

Categories of the data types in python
There are mainly 4 data types in python.
1. Text types: string
2. Numerical: Int, float, complex
3. Boolean: True, False
4. Sequence: List, tuple, range

Apart from this types, there are
Mapping Types: Dictionaries
Set Types: set, frozen set

Set and dictionaries are unordered and non index

"""


# List: List is a collection which is ordered and changeable. Allows duplicate members.You can modify list in python
x = ["apple", "grapes", "cherry", "apple"]

print(len(x))
x[1] = "Mango"
print(x)
# Using the List constructor
y = list(("apple", "grapes"))

# Remove item
x.remove("cherry")
print(y)
print(x)

# List Comprehension: It offers a shorter sytax when you want to create a list based on the value of an exixting list

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
new_fruits = []

for fruit in fruits:
    new_fruits.append(fruit)

print(f"New Fruits: {new_fruits}")

# Using List Comprehension: new_list = [expression for variable in sequence]
new_fruit2 = [fruit for fruit in fruits]
print(f"New_Fruits2 : {new_fruit2}")
new_fruit3 = [fruit for fruit in fruits if "a" in fruit]
print(f"Fruits3 : {new_fruit3}")
z = list(range(1, 5))
print(f"List: {z}")

# Sortng a list:List objects have a sort() method that will sort the list alphanumerically, ascending, by default:

thisList = ["orange", "mango", "kiwi", "pineapple", "banana"]
thisList.sort()
print(f"This List: {thisList}")

otherList = [100, 30, 24, 105]
otherList.sort()  # asending
print(otherList)

# For desending the list
thisList1 = [20, 90, 35, 150]
thisList1.sort(reverse=True)
print(thisList1)


# Tuple: is a collection which is ordered and unchangeable. Allows duplicate members. You cannot modify it
unique_names = ("Alves", "Sahrfear", "Macarthy")
points = 1, 2  # other way of creating a turple
print(f"Points: {points}")
print(unique_names)
for name in unique_names:
    print(name)

print(unique_names[0])
# unique_names[1] = "Kai" # Returns an Error

# But if you want to modify a tuple,
change_names = list(unique_names)
change_names[0] = "Alex"
unique_names = tuple(change_names)
print(unique_names)

# Unpark a tuple
(first, second, third) = unique_names
print(first)
print(second)
print(third)

# Swap variabe
x = 10
y = 20
x, y = y, x
print(f"X:{x}, Y:{y}")
# Tuple Methods: Count
print(unique_names.count("Alves"))


# Set: It is a collection which is unordered, unchangable and unindexed. It does not allow duplicate

myset = {"apple", "grapes", "mango", "cherry"}
this_set = set(("First", 1, True))
print(this_set)
# Once set it created, you cannot change the values, but you can add

# To add one value
myset.add("Guava")
print(myset)

# To add items from one set to other set
other_set = {"pineapple", "papaya"}
myset.update(other_set)
print(myset)

# You can add any iterable
x = {1, 3, 4, 5}
y = [20, 1, 9, 6]
x.update(y)
print(x)
print(type(x))


# Dictionaries: It is a collection which is ordered,changable but does nto allow duplicate
this_dict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1963
}

print(f"Dict: {this_dict}")
print(this_dict["brand"])
this_dict["brand"] = "Towota"
print(this_dict)

# loop through dictionaries
for key, values in this_dict.items():
    print(f"{key}:{values}")

# Copy a dictinoaries. You cannot copy dict
dict1 = {
    "brand": "Toyota",
    "model": "Mustang",
    "year": 1964
}

dict2 = dict1.copy()
print(dict2)
print(dict1)

# Nested Dictionary
myFamily = {
    "child1": {
        "name": "Ella",
        "age": 20
    },
    "child2": {
        "name": "sahr",
        "age": 19
    },
    "child3": {
        "name": "Jackson",
        "age": 15
    }
}

for childNum, obj in myFamily.items():

    for child_name, child_age in obj.items():
        print(f"Name: {child_name}, Age: {child_age}")


# Lambda Function: It is a small anonymous founction
# Syntax lambda arguement: expression

# Add 10 to argument a and return the result
print("Lambda Function")


def x(a): return a+10


print(x(10))


def y(a, b): return a*b
