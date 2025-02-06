"""
In python there are three logical operators.
and : Return true if both condition is true
or: Return true if one of the condition is true
not:

Example an application processing loan

In python; logical operators are short circuit

Ternary Operator: It is the clear way of writing if statement
"""

print("====logical operators===")
HIGH_INCOME = True
GOOD_CREDIT = True
STUDENT = False
MESSAGE = "Eligible" if not STUDENT and (
    HIGH_INCOME or GOOD_CREDIT) else "Not Eligible"
print(MESSAGE)

STU = True
MESSAGE2 = "Eligible" if (HIGH_INCOME or GOOD_CREDIT) and (
    not STU) else "Not Eligible"
print(MESSAGE2 + "\n")


print("===Ternary Operators===" + "\n")
age = int(input("Enter  your age "))
print("Eligible" if age >= 20 else "Not Eligible")
