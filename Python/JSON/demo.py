import json
from pathlib import Path

moves = [
    {"id": 1, "title": "Terminator", "year": "1989"},
    {"id": 1, "title": "Terminator", "year": "1989"},
    {"id": 1, "title": "Terminator", "year": "1989"}
]


# Write a data to text.json
# with open("text.json", "w") as file:
#     json.dump(moves, file)

# data = json.dumps(moves)
# Path("movie.json").write_text(data=data)


# To read the data from json
data = Path("movie.json").read_text()
print(data)

# To pass the string to an array of object
movie = json.loads(data)
print(moves)
