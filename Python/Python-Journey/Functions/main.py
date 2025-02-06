"""
To create a function in python, you use the def
There are two types of functions:
    1. function that perfrom a task
    2. function that return a value
By default, all  fuction returns None by default
"""

# Function that perform a task : This kind of functions are not reusable

print("====Greet Function====")


def __greet__(firstname, lastname):
    print(f"Hello {firstname} {lastname}")


__greet__("Sahrfear", "Macarthy")
print("\n")
print("====Database Connection====")
# Function that returns a value


def __connect_db__(connectingstring):
    # Code to connet to the sql database
    return (f"Connected Successigully ;{connectingstring}")


RESULT = __connect_db__("SKSI29DSU9119sosw202i2")
print(RESULT)

print("\n")
print("====Multiply Function ====")


def __multiply__(num, by=1):
    return num * by


RESULT = __multiply__(10, 3)
print(RESULT)

# Function that takes multiple argument: When a function takes multiple argument, it returns a turple


def __add__(*num, by=1):
    return (n + by for n in num)


result = __add__(10, 20, 34, 3, by=3)
for i in result:
    print(i)

# Using Double Asteric: This returns a keword argument. It returnsa a dictionary


def __save_users__(**users):
    return users


# You have to use a formatted string to get the output in dictrionary
print(f"{__save_users__(username="Sahrfear", age=40)}")
