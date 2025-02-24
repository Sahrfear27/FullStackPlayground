"""
Generators in Python are special functions that allow you to iterate over data lazily,
meaning they generate values on the fly instead of storing them all in memory at once. 
They are useful for handling large datasets efficiently.

Advantage of using generators over a list
1. They are memory efficient
2. They get the values of the data only when they are needed
3. Useful for reading larger files of data
"""


# List Vs Generator Functions
def square_list(n):
    result = []

    for i in range(n):
        result.append(i * i)  # store all result in memory
    return result


# Create a list of 1 million elements: This is not memory effiecient. If n is too large, it will cause out of bond error
# num = square_list(10000000000)
# print(num[0])


# Using

def square_generator(n):
    for i in range(n):
        yield i * i


num_gen = square_generator(1000000000000)
# for num in num_gen:
#     print(num)
# Alternative way to print the number
print(next(num_gen))
print(next(num_gen))
print(next(num_gen))
print(next(num_gen))

# Generator Expressions (Like List Comprehensions)
squares = (x*x for x in range(1, 6))
# print(squares)
for num in squares:
    print(num)
