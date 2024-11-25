# Python Testing Code

# Test 1: Basic Math
def test_math_operations():
    print("Testing Math Operations:")
    a = 10
    b = 5
    print(f"Addition: {a} + {b} = {a + b}")
    print(f"Subtraction: {a} - {b} = {a - b}")
    print(f"Multiplication: {a} * {b} = {a * b}")
    print(f"Division: {a} / {b} = {a / b}\n")


# Test 2: String Manipulation
def test_string_operations():
    print("Testing String Operations:")
    test_string = "Hello, Python!"
    print(f"Original String: {test_string}")
    print(f"Uppercase: {test_string.upper()}")
    print(f"Lowercase: {test_string.lower()}")
    print(f"Reversed: {test_string[::-1]}")
    print(f"Word Count: {len(test_string.split())}\n")


# Test 3: List Operations
def test_list_operations():
    print("Testing List Operations:")
    test_list = [1, 2, 3, 4, 5]
    print(f"Original List: {test_list}")
    print(f"Append 6: {test_list + [6]}")
    print(f"Reversed List: {test_list[::-1]}")
    print(f"Sum of List: {sum(test_list)}\n")


# Run Tests
if __name__ == "__main__":
    print("Running Python Tests...\n")
    test_math_operations()
    test_string_operations()
    test_list_operations()
    print("Testing Complete!")
