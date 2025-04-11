#Return true if any value is 10 or sum is 10
def True_false(a,b):
    if a==10 or b==10 or a+b==10:
        return True
    else:
        return False
x=int(input("Enter a number1: "))
y=int(input("Enter a number2: "))
print(True_false(x,y))

#return true if lengths are equal
def length(arr1,arr2):
    if len(arr1) == len(arr2):
        return True
    else:
        return False
arr1=input("Enter value1: ")
arr2=input("Enter value2: ")
print(length(arr1,arr2))
