"""
Modules are also known as files.
Package: A container for one or more modules
"""


# from Module.Eccommerce.sales import calc_tax, calc_shipping
from Eccommerce.Shopping.sales import calc_tax  # Absolute import
from Eccommerce.Contact.contact import contact
import sys

calc_tax()
print(dir(contact()))
