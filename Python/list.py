"""
Python data stcructure include list, tuple and dictionaries
"""

letters = ["a", "b", "c"]
print(letters)

zeros = [0] * 5
print(zeros)


nums = list(range(0, 10))
print(nums)


"Convert a characters into a list"
chars = list("Hello World")
print(chars)
print(len(chars))


print("___Unpacking List___: This is also known as destructing in javascript" + "\n")
users = ["kai", "Sahrfear", "Alpha", "John", "Mary", "kai"]

first, second, third, *others = users

print(first)
print(second)
print(third)
print(others)


print("___Loop over the list__" + "\n")

for names in users:
    print(names)


print("___To get the item and the index, you use the enumerate object__" + "\n")

for index, items in enumerate(users):
    print(f"{index} {items}")


"To add an item"

users.append("Jackson")
print(users)


"Finding an item in a list"
print(users.count("kai"))
