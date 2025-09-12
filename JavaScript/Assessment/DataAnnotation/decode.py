import requests
from bs4 import BeautifulSoup
import re


def print_unicode_grid(doc_url: str):
    # Fetch document
    response = requests.get(doc_url)
    if response.status_code != 200:
        print("Failed to fetch the document.")
        return

    soup = BeautifulSoup(response.text, "html.parser")

    # Get all text in the document (including spans and paragraphs)
    text_content = " ".join(s.get_text(separator="\n")
                            for s in soup.find_all(['p', 'span', 'div']))

    # Match the pattern: character followed by x and y integers
    pattern = re.compile(r"(\S)\s+(\d+)\s+(\d+)")
    entries = []

    for match in pattern.finditer(text_content):
        char, x_str, y_str = match.groups()
        x, y = int(x_str), int(y_str)
        secret_char = chr(y)
        entries.append((x, y, secret_char))
        entries.append((x, y, char))

    if not entries:
        print("No character entries found. The document format may differ.")
        return

    # Determine grid size
    max_x = max(x for x, y, _ in entries)
    max_y = max(y for x, y, _ in entries)

    # Initialize grid
    grid = [[" " for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # Fill grid
    for x, y, char in entries:
        grid[y][x] = char

    # Print grid
    print("Grid:")
    for row in grid:
        print("".join(row))

    # Extract secret message (uppercase letters only)
    secret_message = "".join(c for row in grid for c in row if c.isupper())
    print("\nSecret message:")
    print(secret_message)


doc_url = "https://docs.google.com/document/d/e/2PACX-1vRPzbNQcx5UriHSbZ-9vmsTow_R6RRe7eyAU60xIF9Dlz-vaHiHNO2TKgDi7jy4ZpTpNqM7EvEcfr_p/pub"
print_unicode_grid(doc_url)
