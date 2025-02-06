"""
For Loop: This is use to print repeated

String multiplication raturn the amount of time a string is multiply
The range generate a number all the way to but not including the number

"""
print("====For Loop===")
# Return the amount of time the string is multiple
print("____For Loop___")
for num in range(5):
    print("Attempt", num + 1, (num + 1)*".")

print("\n")
print("____For Loop with range function___")
for num in range(1, 5):
    print("Attempt", num, num*("*"))

# You can also pass multiple arguments:
print("\n")
print("____For Loop with range function and 3 arguments____")
for num in range(1, 10, 3):
    print("Attempt", num, num*("."))

# Nested Loops
print("\n"+"___Nested Loop___")
for x in range(1, 5):
    for y in range(3):
        print(f"Coordinate :({x},{y})")


# While Loops
print("\n")
print("====While Loop===")
COMMAND = ""
while COMMAND != "quit":
    COMMAND = input("Please enter a command ").lower()
    print(f"Echo {COMMAND}")
