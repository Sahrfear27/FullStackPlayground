"""
String Operations

The len() function return the length of the string
To access the first character, you use the first index

Bracket Notation: Give access to a specific element or character.

Escape Sequence: Back slash is python is a special character called escape sequence.
This is used to escape the character after.

Back slash is a escape character
Back slash with double quote is an escape seequence
"""

import math
# String
user_name = "Sahrfear Macarthy"
print(user_name)

course = "Python Programming"
print(len(course))

# First Char
print(course[0])
print(course[-1])

# Slicing String
print(f"The first 3 chars are {course[0:3]}")
copied_course = course[:]
print(f"The copied course is {copied_course}")

# String are immutable: Which means you cannot change the content once created
GREETINGS = " hello "
print(f"Remove left white space{GREETINGS.lstrip()}")
print(f"Remove right white space{GREETINGS.rstrip()}")
print(f"Title: Change the first letter of the char {
      GREETINGS.lstrip().rstrip().title()}")
print(f"Replcing all l to upper case {
      GREETINGS.lstrip().rstrip().replace('l', 'L')}")
print(GREETINGS.find('o'))  # Return the index of the string
print('l' in GREETINGS)


"""
There are 3 types of number
x = 1 integers
x = 1.1 float
x = 2i + 3j
"""

# import pandas as pd
# Operations
print(4+4)
print(5-2)
print(10*3)
print(11/3)  # Return a floating point number
print(11//3)  # Return an int number
print(11 % 3)
print(11 ** 3)


# Working with numbers
print(round(11/3))  # round a number
print(abs(-3))  # return the absolute value
print(math.ceil(2.2))  # it round the number
