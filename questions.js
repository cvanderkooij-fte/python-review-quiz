// Generated question bank for the freeCodeCamp Python Review trainer.
window.QUESTION_BANK = {
 "mcq": [
  {
   "id": "basics-01",
   "topic": "basics",
   "q": "Which of these is a valid Python variable name?",
   "options": [
    "`2nd_user`",
    "`user-age`",
    "`user_age`",
    "`class`"
   ],
   "answer": 2,
   "explain": "Names may contain letters, digits and underscores but cannot start with a digit. `user-age` contains a hyphen (read as minus) and `class` is a reserved keyword.",
   "hint": "Think about which characters a name may contain, which character it may not start with, and which words Python reserves for itself.",
   "why": [
    "A name cannot start with a digit, so `2nd_user` is a `SyntaxError` even though the rest looks fine.",
    "The hyphen is read as the minus operator, so Python sees `user - age`, not one name.",
    "It uses only letters and an underscore and does not start with a digit, so it is a valid name.",
    "`class` is a reserved keyword used to define classes, so it cannot be used as a variable name."
   ],
   "type": "concept"
  },
  {
   "id": "basics-02",
   "topic": "basics",
   "q": "Which naming style is the Python convention for a variable made of multiple words?",
   "options": [
    "`userAge` (camelCase)",
    "`user_age` (snake_case)",
    "`UserAge` (PascalCase)",
    "`USERAGE` (all caps)"
   ],
   "answer": 1,
   "explain": "Python variables use snake_case: lowercase words joined by underscores. camelCase is common in JavaScript, not Python.",
   "hint": "Think about the style PEP 8 recommends for ordinary variable names.",
   "why": [
    "camelCase is the JavaScript/Java convention; it works in Python but is not the Python style for variables.",
    "Python's convention (PEP 8) for variables is lowercase words joined by underscores, which is snake_case.",
    "PascalCase is reserved by convention for class names, not for ordinary variables.",
    "All caps signals a constant by convention, and without underscores the words also run together."
   ],
   "type": "concept"
  },
  {
   "id": "basics-03",
   "topic": "basics",
   "q": "What does this code print?",
   "code": "age = 25\nAge = 30\nprint(age)",
   "options": [
    "`25`",
    "`30`",
    "`55`",
    "A `NameError`"
   ],
   "answer": 0,
   "explain": "Variable names are case-sensitive, so `age` and `Age` are two different variables. `age` still holds 25.",
   "hint": "Are `age` and `Age` the same name to Python?",
   "why": [
    "`age` was set to 25 and never changed, because `Age` is a completely different variable.",
    "This assumes `Age = 30` overwrote `age`, but names are case-sensitive so it created a separate variable.",
    "Nothing adds the two values together; `print(age)` just shows the one variable.",
    "`age` is defined on the first line, so there is no `NameError`; `Age` is simply a second variable."
   ],
   "type": "code"
  },
  {
   "id": "basics-04",
   "topic": "basics",
   "q": "How do you write a single-line comment in Python?",
   "options": [
    "`// note`",
    "`/* note */`",
    "`# note`",
    "`<!-- note -->`"
   ],
   "answer": 2,
   "explain": "Python comments start with `#`. `//` and `/* */` are comment styles from languages like JavaScript and C; in Python `//` is floor division.",
   "hint": "Which single character starts a comment in Python?",
   "why": [
    "`//` is a comment in JavaScript or C, but in Python it is the floor-division operator.",
    "`/* */` block comments come from C-style languages and are a syntax error in Python.",
    "Python comments start with `#` and run to the end of the line.",
    "`<!-- -->` is an HTML comment and means nothing to Python."
   ],
   "type": "concept"
  },
  {
   "id": "basics-05",
   "topic": "basics",
   "q": "You are in a terminal inside the folder that contains `main.py`. Which command runs the program?",
   "options": [
    "`run main.py`",
    "`python main.py`",
    "`main.py --run`",
    "`pip main.py`"
   ],
   "answer": 1,
   "explain": "`python main.py` starts the Python interpreter on that file. `pip` installs packages; it does not run scripts.",
   "hint": "Which program actually interprets a `.py` file?",
   "why": [
    "There is no standard `run` command; you need to start the Python interpreter.",
    "This starts the Python interpreter and tells it to execute `main.py`.",
    "Typing the file name with a made-up flag does not invoke Python; `--run` is not a real option.",
    "`pip` is the package installer; it installs libraries but does not run scripts."
   ],
   "type": "concept"
  },
  {
   "id": "basics-06",
   "topic": "basics",
   "q": "In the Python interactive shell, what does the `>>>` prompt mean?",
   "options": [
    "Python is waiting for you to type a command",
    "The previous command failed",
    "Output from a `print()` call follows",
    "A multi-line block is still open"
   ],
   "answer": 0,
   "explain": "`>>>` is the primary prompt: the shell is ready for your next command. A still-open block shows `...` instead.",
   "hint": "What is the shell telling you when it shows a prompt and waits?",
   "why": [
    "`>>>` is the primary prompt, meaning the shell is ready for your next command.",
    "Errors are shown as a traceback; the prompt appears after both successful and failed commands.",
    "Output from `print()` is shown without any prompt in front of it.",
    "An open multi-line block shows the continuation prompt `...`, not `>>>`."
   ],
   "type": "concept"
  },
  {
   "id": "basics-07",
   "topic": "basics",
   "q": "What does REPL stand for?",
   "options": [
    "Run, Execute, Print, Log",
    "Read, Evaluate, Print, Loop",
    "Read, Execute, Parse, Load",
    "Repeat, Evaluate, Process, Loop"
   ],
   "answer": 1,
   "explain": "The shell Reads your input, Evaluates it, Prints the result, then Loops back to the `>>>` prompt.",
   "hint": "Think about the four things the interactive shell does with every line you type, in order.",
   "why": [
    "The shell does print results, but it does not 'log' them, and the first step is reading your input.",
    "The shell Reads your input, Evaluates it, Prints the result, and Loops back for more.",
    "This keeps Read but drops Print and Loop, the steps that show the result and bring back the prompt.",
    "It does not 'repeat' first; it must read your input before evaluating anything."
   ],
   "type": "concept"
  },
  {
   "id": "basics-08",
   "topic": "basics",
   "q": "What does this code print?",
   "code": "name = 'Ada'\nname = 'Grace'\nprint(name)",
   "options": [
    "`Ada`",
    "`Grace`",
    "`Ada Grace`",
    "An error, because `name` is already defined"
   ],
   "answer": 1,
   "explain": "Assigning to an existing variable simply replaces its value. The latest assignment, `Grace`, is what gets printed.",
   "hint": "What happens to a variable's old value when you assign to it again?",
   "why": [
    "`Ada` was the first value, but the second assignment replaced it.",
    "The second assignment rebinds `name` to `'Grace'`, which is what gets printed.",
    "Assignment replaces the value; it does not append to or combine with the old one.",
    "Reassigning an existing variable is perfectly allowed in Python and raises no error."
   ],
   "type": "code"
  },
  {
   "id": "types-01",
   "topic": "types",
   "q": "What does this code print?",
   "code": "print(type(3.0))",
   "options": [
    "`<class 'float'>`",
    "`<class 'int'>`",
    "`<class 'str'>`",
    "`3.0`"
   ],
   "answer": 0,
   "explain": "Any number written with a decimal point is a float, even if the decimal part is zero.",
   "hint": "Does a zero after the decimal point change which type the number is?",
   "why": [
    "A literal with a decimal point is a float, even when the fractional part is zero.",
    "`3.0` equals 3 in value, but the decimal point makes it a float, not an int.",
    "There are no quotes around `3.0`, so it is a number, not a string.",
    "`type()` returns the type object, not the value, so it prints `<class 'float'>` rather than `3.0`."
   ],
   "type": "code"
  },
  {
   "id": "types-02",
   "topic": "types",
   "q": "What does it mean that Python is *dynamically typed*?",
   "options": [
    "You must declare a type before using a variable",
    "Python works out the type from the value assigned",
    "A variable can only ever hold one type",
    "Types are checked when you save the file"
   ],
   "answer": 1,
   "explain": "You never declare types; Python determines the type from the value at runtime, and a variable can later be given a value of another type.",
   "hint": "When does Python decide what type a variable has: when you write it, or when a value is assigned at runtime?",
   "why": [
    "That describes statically typed languages like Java; Python never requires type declarations.",
    "Python determines the type from the value assigned at runtime, with no declaration needed.",
    "The opposite is true: a dynamically typed variable can be rebound to a value of a different type.",
    "Saving a file does no type checking; Python checks types while the code runs."
   ],
   "type": "concept"
  },
  {
   "id": "types-03",
   "topic": "types",
   "q": "What does this code print?",
   "code": "x = 5\nx = 'five'\nprint(type(x))",
   "options": [
    "`<class 'int'>`",
    "`<class 'str'>`",
    "A `TypeError`",
    "`<class 'five'>`"
   ],
   "answer": 1,
   "explain": "Because Python is dynamically typed, `x` can be rebound to a string. `type()` reports the type of the current value.",
   "hint": "Does `type()` report the variable's first value or its current value?",
   "why": [
    "`x` started as an int, but it was rebound to a string before `type()` was called.",
    "`x` now refers to `'five'`, so `type(x)` reports `str`.",
    "Rebinding a variable to a different type is allowed in a dynamically typed language, so there is no error.",
    "`type()` reports the type name `str`, not the content of the string."
   ],
   "type": "code"
  },
  {
   "id": "types-04",
   "topic": "types",
   "q": "Which of these is a boolean value?",
   "options": [
    "`'True'`",
    "`true`",
    "`True`",
    "`1`"
   ],
   "answer": 2,
   "explain": "Python's booleans are `True` and `False`, capitalised. `'True'` is a string, and lowercase `true` is an undefined name.",
   "hint": "Look carefully at quotes and capitalisation.",
   "why": [
    "The quotes make this a string that merely contains the word True, not a boolean.",
    "Lowercase `true` is how JavaScript spells it; in Python it is an undefined name and raises a `NameError`.",
    "`True` with a capital T is one of Python's two boolean values.",
    "`1` is an int; it behaves like `True` in conditions, but its type is `int`, not `bool`."
   ],
   "type": "concept"
  },
  {
   "id": "types-05",
   "topic": "types",
   "q": "What does this code print?",
   "code": "print(isinstance('42', int))",
   "options": [
    "`True`",
    "`False`",
    "`42`",
    "A `ValueError`"
   ],
   "answer": 1,
   "explain": "`'42'` is a string because of the quotes, so it is not an instance of `int`. `isinstance()` only checks the type; it does not convert.",
   "hint": "Look at the quotes around 42 and remember whether `isinstance()` converts anything.",
   "why": [
    "This assumes Python sees the number 42, but the quotes make `'42'` a string.",
    "`'42'` is a `str`, not an `int`, so `isinstance()` returns `False`.",
    "`isinstance()` returns a boolean answer, never the value being checked.",
    "`isinstance()` only checks the type and never tries a conversion, so no `ValueError` can occur."
   ],
   "type": "code"
  },
  {
   "id": "types-06",
   "topic": "types",
   "q": "Which value is a float?",
   "options": [
    "`7`",
    "`'7.0'`",
    "`7.0`",
    "`True`"
   ],
   "answer": 2,
   "explain": "`7.0` has a decimal point, so it's a float. `7` is an int and `'7.0'` is a string that only looks like a number.",
   "hint": "Which option is a number written with a decimal point and no quotes?",
   "why": [
    "`7` has no decimal point, so it is an int.",
    "The quotes make this a string that only looks like a float.",
    "`7.0` has a decimal point and no quotes, so it is a float.",
    "`True` is a bool, which is a subclass of int, not a float."
   ],
   "type": "concept"
  },
  {
   "id": "types-07",
   "topic": "types",
   "q": "What does this code print?",
   "code": "print(type(10 / 2))",
   "options": [
    "`<class 'int'>`",
    "`<class 'float'>`",
    "`5`",
    "`<class 'number'>`"
   ],
   "answer": 1,
   "explain": "The `/` operator always returns a float in Python 3, even when the division has no remainder (`10 / 2` is `5.0`).",
   "hint": "What type does Python 3's `/` operator return, even when the division comes out even?",
   "why": [
    "`10 / 2` divides evenly, but `/` always returns a float in Python 3.",
    "True division `/` always produces a float, so `10 / 2` is `5.0` and its type is `float`.",
    "`type()` prints the type, not the value, and the value would be `5.0` anyway.",
    "Python has no class called `number`; the result is a concrete type, `float`."
   ],
   "type": "code"
  },
  {
   "id": "types-08",
   "topic": "types",
   "q": "What does this code print? (Tricky!)",
   "code": "print(isinstance(True, int))",
   "options": [
    "`True`",
    "`False`",
    "A `TypeError`",
    "`1`"
   ],
   "answer": 0,
   "explain": "In Python `bool` is a subclass of `int` (`True` behaves like 1), so `isinstance(True, int)` is `True`. `type(True)` is still `bool`.",
   "hint": "How is the `bool` type related to `int` in Python's class hierarchy?",
   "why": [
    "`bool` is a subclass of `int`, so `True` counts as an instance of `int`.",
    "This assumes `bool` and `int` are unrelated, but `bool` inherits from `int`.",
    "`isinstance()` accepts any object and a type, so there is no `TypeError` here.",
    "`True` equals 1, but `isinstance()` returns a boolean, not the integer value."
   ],
   "type": "code"
  },
  {
   "id": "strings-01",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "my_str = 'Hello world'\nprint(my_str[-2])",
   "options": [
    "`r`",
    "`l`",
    "`d`",
    "`o`"
   ],
   "answer": 1,
   "explain": "Negative indexes count from the end: `-1` is `'d'`, `-2` is `'l'`.",
   "hint": "Negative indexes count from the end; which index is the very last character?",
   "why": [
    "`r` is at index `-3`; this comes from counting `-1` as the second-to-last character.",
    "`-1` is `'d'` and `-2` is the character before it, `'l'`.",
    "`d` is the last character, which is index `-1`, not `-2`.",
    "`o` appears in 'world' at index `-4`, not `-2`."
   ],
   "type": "code"
  },
  {
   "id": "strings-02",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "s = 'python'\nprint(s[1:4])",
   "options": [
    "`pyt`",
    "`ytho`",
    "`yth`",
    "`ythn`"
   ],
   "answer": 2,
   "explain": "The slice starts at index 1 and stops *before* index 4, giving indexes 1, 2 and 3: `y`, `t`, `h`.",
   "hint": "Is the stop index of a slice included or excluded?",
   "why": [
    "This starts at index 0, but the slice starts at index 1, which skips `p`.",
    "This includes index 4, but the stop index of a slice is excluded.",
    "Indexes 1, 2 and 3 are `y`, `t`, `h`, and the slice stops before index 4.",
    "This skips `h` and grabs `n`, but a slice takes consecutive characters with step 1."
   ],
   "type": "code"
  },
  {
   "id": "strings-03",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "s = 'abcdef'\nprint(s[::2])",
   "options": [
    "`ace`",
    "`bdf`",
    "`ab`",
    "`abcdef`"
   ],
   "answer": 0,
   "explain": "With an empty start and stop and a step of 2, the slice takes every second character starting at index 0: `a`, `c`, `e`.",
   "hint": "With no start given and a step of 2, which index does the slice begin at?",
   "why": [
    "The slice starts at index 0 and takes every second character: `a`, `c`, `e`.",
    "This would be `s[1::2]`; with no start the slice begins at index 0, not 1.",
    "This reads the 2 as a stop value, but after two colons it is the step.",
    "This ignores the step; a step of 2 skips every other character."
   ],
   "type": "code"
  },
  {
   "id": "strings-04",
   "topic": "strings",
   "q": "What happens when this code runs?",
   "code": "s = 'hello'\ns[0] = 'H'\nprint(s)",
   "options": [
    "It prints `Hello`",
    "A `TypeError` is raised",
    "An `IndexError` is raised",
    "It prints `hello`"
   ],
   "answer": 1,
   "explain": "Strings are immutable: you can't assign to an index. Build a new string instead, e.g. `'H' + s[1:]`.",
   "hint": "Can you change one character of an existing string in place?",
   "why": [
    "This assumes strings can be edited in place, but strings are immutable.",
    "Item assignment on a string raises `TypeError: 'str' object does not support item assignment`.",
    "Index 0 exists in `'hello'`, so the problem is not the index; it is the assignment itself.",
    "The program stops at the failed assignment, so `print(s)` is never reached."
   ],
   "type": "code"
  },
  {
   "id": "strings-05",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "name = 'Ada'\nage = 36\nprint(f'{name} is {age}')",
   "options": [
    "`{name} is {age}`",
    "`Ada is 36`",
    "`name is age`",
    "A `TypeError`, because `age` is an int"
   ],
   "answer": 1,
   "explain": "The `f` prefix makes it an f-string: expressions in `{}` are evaluated and inserted, and non-strings like 36 are converted automatically.",
   "hint": "What does the `f` in front of the quotes do to the text inside the braces?",
   "why": [
    "Without the `f` prefix the braces would stay literal, but the f-string evaluates them.",
    "The f-string evaluates `name` and `age` and inserts their values, giving `Ada is 36`.",
    "The braces insert the variables' values, not their names.",
    "f-strings convert non-strings like `36` automatically, so no `TypeError` occurs."
   ],
   "type": "code"
  },
  {
   "id": "strings-06",
   "topic": "strings",
   "q": "Which line correctly stores the text It's sunny in a single-quoted string?",
   "options": [
    "`msg = 'It's sunny'`",
    "`msg = 'It\\'s sunny'`",
    "`msg = 'It/'s sunny'`",
    "`msg = 'It''s sunny'`"
   ],
   "answer": 1,
   "explain": "A backslash escapes the quote so it doesn't end the string. Without it, `'It'` ends early and the rest is a syntax error.",
   "hint": "How do you tell Python that a quote character is part of the text and not the end of the string?",
   "why": [
    "The apostrophe ends the string after `It`, so the rest causes a `SyntaxError`.",
    "The backslash escapes the apostrophe, so it is kept as a literal character in the string.",
    "A forward slash is not an escape character, so the string still ends at the apostrophe.",
    "`'It''s sunny'` is two adjacent strings that get joined into `Its sunny`, losing the apostrophe."
   ],
   "type": "concept"
  },
  {
   "id": "strings-07",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "print(len('Hi there'))",
   "options": [
    "`7`",
    "`8`",
    "`9`",
    "`2`"
   ],
   "answer": 1,
   "explain": "`len()` counts every character, including the space: H-i-space-t-h-e-r-e is 8.",
   "hint": "Does `len()` count spaces?",
   "why": [
    "This counts only the letters, but the space is a character too.",
    "`len()` counts all 8 characters: 7 letters plus the space.",
    "This overcounts by one, perhaps by counting the quotes or adding an extra character.",
    "This counts words, but `len()` on a string counts characters."
   ],
   "type": "code"
  },
  {
   "id": "strings-08",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "print('cat' in 'concatenate')",
   "options": [
    "`True`",
    "`False`",
    "`3`",
    "`cat`"
   ],
   "answer": 0,
   "explain": "`in` checks whether the substring appears anywhere: con-**cat**-enate contains `'cat'`.",
   "hint": "What does `in` check when both sides are strings?",
   "why": [
    "`'cat'` appears inside `'concatenate'` as consecutive letters, so `in` returns `True`.",
    "This assumes `in` needs an exact whole-word match, but it checks for any substring.",
    "`in` returns a boolean, not the position; that would be `find()`.",
    "`in` returns `True` or `False`, never the substring itself."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-01",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('[' + '  hi  '.strip() + ']')",
   "options": [
    "`[  hi  ]`",
    "`[hi]`",
    "`[hi  ]`",
    "`[  hi]`"
   ],
   "answer": 1,
   "explain": "With no argument, `strip()` removes whitespace from both the start and end. (`lstrip`/`rstrip` remove only one side.)",
   "hint": "Which sides of the string does `strip()` work on when called with no argument?",
   "why": [
    "This assumes `strip()` did nothing, but it removes surrounding whitespace.",
    "`strip()` removes whitespace from both ends, leaving just `hi` between the brackets.",
    "This removes only leading spaces, which is what `lstrip()` does.",
    "This removes only trailing spaces, which is what `rstrip()` does."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-02",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('a,b,c'.split(','))",
   "options": [
    "`['a', 'b', 'c']`",
    "`['a,b,c']`",
    "`('a', 'b', 'c')`",
    "`abc`"
   ],
   "answer": 0,
   "explain": "`split(sep)` breaks the string at each separator and returns a list of the pieces.",
   "hint": "What kind of object does `split()` return?",
   "why": [
    "`split(',')` breaks the string at each comma and returns a list of the pieces.",
    "This would happen only if the separator were not found, but there are commas in the string.",
    "`split()` returns a list with square brackets, not a tuple.",
    "`split()` returns a list of pieces; it does not join them back into one string."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-03",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('-'.join(['2026', '11', '01']))",
   "options": [
    "`['2026', '11', '01']`",
    "`20261101`",
    "`2026-11-01`",
    "`-2026-11-01-`"
   ],
   "answer": 2,
   "explain": "`join()` is called on the separator string and places it *between* the items, not around them.",
   "hint": "Where does `join()` place the separator: between the items or around them?",
   "why": [
    "`join()` returns a single string, not the original list.",
    "This ignores the separator, which would be the result of `''.join(...)`.",
    "`join()` puts `'-'` between each pair of items, giving `2026-11-01`.",
    "`join()` only places the separator between items, never before the first or after the last."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-04",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('banana'.find('n'))",
   "options": [
    "`1`",
    "`2`",
    "`3`",
    "`4`"
   ],
   "answer": 1,
   "explain": "`find()` returns the index of the *first* occurrence. In 'banana' the first `n` is at index 2 (b=0, a=1, n=2).",
   "hint": "Indexes start at 0, and `find()` reports the first match.",
   "why": [
    "Index 1 is `a`; this comes from forgetting that counting starts at 0 or from mixing up the letters.",
    "b is 0, a is 1, and the first `n` is at index 2, which `find()` returns.",
    "This comes from counting positions from 1 instead of 0.",
    "Index 4 is the second `n`, but `find()` returns the first occurrence."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-05",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('banana'.count('an'))",
   "options": [
    "`1`",
    "`2`",
    "`3`",
    "`4`"
   ],
   "answer": 1,
   "explain": "`count()` counts non-overlapping occurrences: b-**an**-**an**-a contains `'an'` twice.",
   "hint": "Split 'banana' into pieces and count how often the two letters appear side by side.",
   "why": [
    "This stops after the first match, but `count()` counts all non-overlapping matches.",
    "`'an'` appears twice in b-an-an-a, so `count()` returns 2.",
    "This counts the letter `a`, which appears 3 times, instead of the substring `'an'`.",
    "This adds up separate letters rather than counting the two-letter substring."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-06",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('hELLO wORLD'.capitalize())",
   "options": [
    "`HELLO wORLD`",
    "`Hello World`",
    "`Hello world`",
    "`HELLO WORLD`"
   ],
   "answer": 2,
   "explain": "`capitalize()` uppercases the first character and *lowercases all the rest*. `title()` would give `Hello World`.",
   "hint": "Does `capitalize()` leave the rest of the string alone, or change it too?",
   "why": [
    "`capitalize()` also lowercases the rest, so `ELLO` cannot stay uppercase.",
    "This capitalises every word, which is what `title()` does, not `capitalize()`.",
    "`capitalize()` uppercases the first character and lowercases everything else.",
    "This is `upper()`; `capitalize()` lowercases everything except the first character."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-07",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "print('hello world'.title())",
   "options": [
    "`Hello world`",
    "`Hello World`",
    "`HELLO WORLD`",
    "`hello World`"
   ],
   "answer": 1,
   "explain": "`title()` capitalises the first letter of every word.",
   "hint": "Does `title()` affect just the first word or every word?",
   "why": [
    "This capitalises only the first word, which is what `capitalize()` does.",
    "`title()` capitalises the first letter of every word.",
    "This uppercases everything, which is what `upper()` does.",
    "`title()` capitalises the first word too, not only the second."
   ],
   "type": "code"
  },
  {
   "id": "string-methods-08",
   "topic": "string-methods",
   "q": "What does this code print?",
   "code": "s = 'hello'\ns.upper()\nprint(s)",
   "options": [
    "`HELLO`",
    "`hello`",
    "`Hello`",
    "`None`"
   ],
   "answer": 1,
   "explain": "String methods never change the original (strings are immutable). `upper()` returns a new string, which is thrown away here. You'd need `s = s.upper()`.",
   "hint": "Does calling a string method change the original string, and where does its result go?",
   "why": [
    "This assumes `upper()` changed `s` in place, but strings are immutable and the result was discarded.",
    "`s.upper()` returns a new string that is not stored, so `s` is still `hello`.",
    "This would be `capitalize()`, and even then the original string would not change.",
    "`upper()` returns a new string, not `None`, and `s` itself was never reassigned."
   ],
   "type": "code"
  },
  {
   "id": "numbers-01",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(7 % 3)",
   "options": [
    "`1`",
    "`2`",
    "`2.33`",
    "`0`"
   ],
   "answer": 0,
   "explain": "`%` (modulo) returns the remainder: 7 = 3 \u00d7 2 + **1**.",
   "hint": "What is left over after dividing 7 into groups of 3?",
   "why": [
    "3 goes into 7 twice (6), leaving a remainder of 1.",
    "2 is the quotient (how many times 3 fits), not the remainder.",
    "That is the result of true division `7 / 3`, not the remainder.",
    "A remainder of 0 would mean 7 is divisible by 3, which it is not."
   ],
   "type": "code"
  },
  {
   "id": "numbers-02",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(7 // 2)",
   "options": [
    "`3.5`",
    "`3`",
    "`4`",
    "`3.0`"
   ],
   "answer": 1,
   "explain": "`//` is floor division: it divides and rounds *down* to a whole number. With two ints the result is an int.",
   "hint": "What does `//` do with the fractional part, and what type does it give for two ints?",
   "why": [
    "That is true division `/`; `//` drops the fractional part.",
    "Floor division rounds 3.5 down to 3, and two ints give an int.",
    "This rounds up, but `//` always rounds down.",
    "The value is right but the type is not: with two ints, `//` returns an int, not a float."
   ],
   "type": "code"
  },
  {
   "id": "numbers-03",
   "topic": "numbers",
   "q": "What does this code print? (Tricky!)",
   "code": "print(-7 // 2)",
   "options": [
    "`-3`",
    "`-4`",
    "`-3.5`",
    "`3`"
   ],
   "answer": 1,
   "explain": "`//` rounds *down* (toward negative infinity), not toward zero. -3.5 rounded down is -4.",
   "hint": "Does `//` round toward zero or toward negative infinity?",
   "why": [
    "This rounds toward zero (like `int(-3.5)`), but `//` rounds down toward negative infinity.",
    "-3.5 rounded down toward negative infinity is -4.",
    "That is the true-division result; `//` returns a whole number.",
    "The minus sign does not disappear; the result is negative."
   ],
   "type": "code"
  },
  {
   "id": "numbers-04",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(2 ** 3)",
   "options": [
    "`6`",
    "`9`",
    "`8`",
    "`5`"
   ],
   "answer": 2,
   "explain": "`**` is exponentiation: 2 to the power 3 = 2 \u00d7 2 \u00d7 2 = 8. (`^` is NOT power in Python.)",
   "hint": "Which operation does `**` perform?",
   "why": [
    "6 is `2 * 3`; this reads `**` as multiplication.",
    "9 is `3 ** 2`; this swaps the base and the exponent.",
    "`**` is exponentiation, and 2 to the power 3 is 8.",
    "5 is `2 + 3`; this treats `**` as addition."
   ],
   "type": "code"
  },
  {
   "id": "numbers-05",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(3 + 2.0)",
   "options": [
    "`5`",
    "`5.0`",
    "`'5.0'`",
    "A `TypeError`"
   ],
   "answer": 1,
   "explain": "Adding an int and a float gives a float, so the result is `5.0`.",
   "hint": "What type do you get when you mix an int and a float in arithmetic?",
   "why": [
    "The value is 5, but mixing an int with a float always gives a float, so it prints `5.0`.",
    "Python converts the int to a float before adding, giving `5.0`.",
    "The result is a number, not a string, and `print()` shows it without quotes.",
    "Python can add ints and floats freely; a `TypeError` happens when mixing numbers with strings."
   ],
   "type": "code"
  },
  {
   "id": "numbers-06",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(int(9.99))",
   "options": [
    "`10`",
    "`9.99`",
    "`9`",
    "`9.0`"
   ],
   "answer": 2,
   "explain": "`int()` drops the decimal part (truncates toward zero); it does not round. Use `round()` to round.",
   "hint": "Does `int()` round a float or just cut off the decimals?",
   "why": [
    "This assumes `int()` rounds, but it truncates the decimal part.",
    "`int()` returns an int, so the decimals cannot be kept.",
    "`int()` drops the decimal part, truncating 9.99 to 9.",
    "`int()` returns an int, which prints without `.0`."
   ],
   "type": "code"
  },
  {
   "id": "numbers-07",
   "topic": "numbers",
   "q": "What does this code print? (Tricky!)",
   "code": "print(round(2.5))",
   "options": [
    "`3`",
    "`2`",
    "`2.5`",
    "`2.0`"
   ],
   "answer": 1,
   "explain": "`round()` rounds an exact .5 to the nearest *even* number. This is called rounding half to even (or banker's rounding), so `round(2.5)` is 2 and `round(3.5)` is 4.",
   "hint": "Python 3's `round()` treats an exact .5 specially: it does not always round up.",
   "why": [
    "This assumes .5 always rounds up, as taught in school, but Python rounds ties to the nearest even number.",
    "Python rounds half to even (banker's rounding), so the tie 2.5 goes to the even number 2.",
    "`round()` with no second argument returns a whole number, not the original value.",
    "`round(x)` with one argument returns an int, so there is no `.0`."
   ],
   "type": "code"
  },
  {
   "id": "numbers-08",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "x = 10\nx -= 3\nx *= 2\nprint(x)",
   "options": [
    "`14`",
    "`7`",
    "`17`",
    "`20`"
   ],
   "answer": 0,
   "explain": "Augmented assignment updates the variable in place: 10 \u2212 3 = 7, then 7 \u00d7 2 = 14.",
   "hint": "Apply each augmented assignment in order, using the result of the previous line.",
   "why": [
    "10 \u2212 3 gives 7, and then 7 \u00d7 2 gives 14.",
    "This stops after `x -= 3` and ignores the `x *= 2` line.",
    "17 comes from adding 7 to the original 10, but neither line adds anything.",
    "This applies `x *= 2` to the original 10 and ignores the subtraction."
   ],
   "type": "code"
  },
  {
   "id": "functions-01",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "def add(a, b):\n    a + b\n\nprint(add(2, 3))",
   "options": [
    "`5`",
    "`None`",
    "`a + b`",
    "A `TypeError`"
   ],
   "answer": 1,
   "explain": "The function calculates `a + b` but never `return`s it, so the call returns the default value `None`.",
   "hint": "What does a function return if it never uses `return`?",
   "why": [
    "The sum is calculated, but without `return` it is thrown away rather than sent back to the caller.",
    "A function without a `return` statement returns `None`, which `print()` shows.",
    "Python evaluates the expression; it never returns the source text of the code.",
    "The function is called with the two arguments it expects, so there is no `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "functions-02",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "def get_sum(num_1, num_2=2):\n    return num_1 + num_2\n\nprint(get_sum(3))",
   "options": [
    "`3`",
    "`5`",
    "A `TypeError`",
    "`None`"
   ],
   "answer": 1,
   "explain": "`num_2` has a default value of 2, so `get_sum(3)` uses it: 3 + 2 = 5.",
   "hint": "What value does a parameter use when you leave it out of the call?",
   "why": [
    "This ignores the default and assumes `num_2` is 0 or skipped, but it defaults to 2.",
    "`num_2` falls back to its default of 2, so the result is 3 + 2 = 5.",
    "`num_2` has a default value, so omitting it is allowed and raises no error.",
    "The function has a `return` statement, so it returns the sum rather than `None`."
   ],
   "type": "code"
  },
  {
   "id": "functions-03",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "def get_sum(num_1, num_2=2):\n    return num_1 + num_2\n\nprint(get_sum(3, 4))",
   "options": [
    "`5`",
    "`7`",
    "`9`",
    "A `TypeError`"
   ],
   "answer": 1,
   "explain": "A passed argument overrides the default: 3 + 4 = 7.",
   "hint": "If you pass a value for a parameter that has a default, which one wins?",
   "why": [
    "This uses the default 2, but a passed argument overrides the default.",
    "The passed 4 replaces the default, so 3 + 4 = 7.",
    "This adds the default as well, but a parameter holds only one value.",
    "A parameter with a default can still receive an argument, so there is no error."
   ],
   "type": "code"
  },
  {
   "id": "functions-04",
   "topic": "functions",
   "q": "What happens when this code runs?",
   "code": "def multiply(a, b):\n    return a * b\n\nprint(multiply(1))",
   "options": [
    "It prints `1`",
    "It prints `None`",
    "A `TypeError` is raised",
    "A `NameError` is raised"
   ],
   "answer": 2,
   "explain": "Calling a function with the wrong number of arguments raises a `TypeError` (missing 1 required positional argument: 'b').",
   "hint": "What happens when a call does not provide every required parameter?",
   "why": [
    "Python does not fill in missing arguments, so the function body never runs.",
    "Missing arguments do not default to `None`; Python raises an error before running the body.",
    "`multiply` needs two arguments but got one, which raises `TypeError: missing 1 required positional argument`.",
    "`multiply` is defined, so the name is found; the problem is the argument count, which is a `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "functions-05",
   "topic": "functions",
   "q": "What happens when this code runs?",
   "code": "def set_value():\n    x = 5\n\nset_value()\nprint(x)",
   "options": [
    "It prints `5`",
    "It prints `None`",
    "A `NameError` is raised",
    "A `TypeError` is raised"
   ],
   "answer": 2,
   "explain": "`x` is created inside the function, so it's local and only exists there. Outside, the name is undefined.",
   "hint": "Where does a variable created inside a function exist?",
   "why": [
    "This assumes `x` is visible outside, but it is local to `set_value` and disappears after the call.",
    "Nothing returns or creates `x` at the global level, so it is undefined rather than `None`.",
    "`x` is local to the function, so referencing it outside raises a `NameError`.",
    "The problem is an undefined name, which is a `NameError`, not a type mismatch."
   ],
   "type": "code"
  },
  {
   "id": "functions-06",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "count = 10\n\ndef show():\n    print(count)\n\nshow()",
   "options": [
    "`10`",
    "A `NameError`",
    "`None`",
    "`count`"
   ],
   "answer": 0,
   "explain": "A variable created outside any function is global, so it can be read inside functions.",
   "hint": "Can a function read a variable defined at the top level of the module?",
   "why": [
    "`count` is global, so `show()` can read it and print 10.",
    "Functions can read global variables, so the name is found and there is no `NameError`.",
    "`show()` returns `None`, but that return value is not printed; only `print(count)` produces output.",
    "`print(count)` prints the variable's value, not its name."
   ],
   "type": "code"
  },
  {
   "id": "functions-07",
   "topic": "functions",
   "q": "The user types 42 at the prompt `age = input('Age: ')`. What is the type of `age`?",
   "options": [
    "`int`",
    "`float`",
    "`str`",
    "It depends on what was typed"
   ],
   "answer": 2,
   "explain": "`input()` always returns a string. Convert it with `int(age)` if you need a number.",
   "hint": "What type does `input()` always give back, no matter what the user types?",
   "why": [
    "This assumes `input()` detects numbers, but it always returns text.",
    "`input()` never converts to float; you would need `float(age)`.",
    "`input()` always returns a string, so `age` is the string `'42'`.",
    "`input()` does not inspect what was typed; the result is a string every time."
   ],
   "type": "concept"
  },
  {
   "id": "functions-08",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "x = 1\n\ndef f():\n    x = 2\n    return x\n\nprint(f(), x)",
   "options": [
    "`2 2`",
    "`1 1`",
    "`2 1`",
    "`1 2`"
   ],
   "answer": 2,
   "explain": "Assigning `x = 2` inside `f` creates a separate local `x`; the global `x` stays 1.",
   "hint": "Does assigning to `x` inside a function change the global `x`?",
   "why": [
    "This assumes the assignment inside `f` changed the global `x`, but it created a local one.",
    "This ignores that `f()` returns its local `x`, which is 2.",
    "`f()` returns the local `x` (2) and the global `x` is still 1.",
    "This swaps the two: the function returns 2 and the global stays 1."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-01",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "age = 15\n\nif age >= 18:\n    print('You are an adult')\nelif age >= 13:\n    print('You are a teenager')\nelse:\n    print('You are a child')",
   "options": [
    "`You are an adult`",
    "`You are a teenager`",
    "`You are a child`",
    "Both teenager and child"
   ],
   "answer": 1,
   "explain": "15 >= 18 is False, 15 >= 13 is True, so the `elif` block runs and the rest is skipped.",
   "hint": "Check the conditions top to bottom; how many branches of an if/elif/else chain can run?",
   "why": [
    "15 >= 18 is `False`, so the first branch is skipped.",
    "The first condition is false and `15 >= 13` is true, so the `elif` branch runs.",
    "`else` runs only when every condition above is false, but the `elif` was true.",
    "Only one branch of an if/elif/else chain runs, so the `else` is skipped after the `elif`."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-02",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "score = 85\n\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelif score >= 70:\n    print('C')",
   "options": [
    "`A`",
    "`B`",
    "`C`",
    "`B` then `C`"
   ],
   "answer": 1,
   "explain": "Only the first true branch in an if/elif chain runs. 85 >= 80 is True, so `B` prints and the `elif score >= 70` is never checked.",
   "hint": "Once a branch in an if/elif chain matches, are later branches still checked?",
   "why": [
    "85 >= 90 is `False`, so the first branch does not run.",
    "85 >= 80 is the first true condition, so `B` prints and the chain ends.",
    "85 >= 70 is true, but an earlier branch already matched, so this one is never checked.",
    "Only the first true branch of an if/elif chain runs, not every true one."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-03",
   "topic": "conditionals",
   "q": "How many lines does this code print?",
   "code": "x = 5\n\nif x > 3:\n    print('a')\nif x > 4:\n    print('b')",
   "options": [
    "0",
    "1",
    "2",
    "A `SyntaxError`"
   ],
   "answer": 2,
   "explain": "These are two *separate* `if` statements, not an if/elif chain, so both are checked and both conditions are True.",
   "hint": "Are these two `if` statements linked to each other, or independent?",
   "why": [
    "Both conditions are true for `x = 5`, so at least one line prints.",
    "This treats the second `if` as an `elif`, but separate `if` statements are each checked.",
    "Both independent `if` statements have true conditions, so `a` and `b` both print.",
    "Two `if` statements in a row are perfectly valid syntax."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-04",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "print(5 != 5)",
   "options": [
    "`True`",
    "`False`",
    "`5`",
    "A `SyntaxError`"
   ],
   "answer": 1,
   "explain": "`!=` means \"not equal\". 5 is equal to 5, so `5 != 5` is False.",
   "hint": "What does `!=` ask about two values?",
   "why": [
    "This reads `!=` as 'equals', but it means 'not equal'.",
    "5 is equal to 5, so 'not equal' is `False`.",
    "A comparison returns a boolean, not one of its operands.",
    "`!=` is a valid Python operator, so there is no syntax error."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-05",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "print('apple' == 'Apple')",
   "options": [
    "`True`",
    "`False`",
    "A `TypeError`",
    "`None`"
   ],
   "answer": 1,
   "explain": "String comparison is case-sensitive: `'a'` and `'A'` are different characters.",
   "hint": "Does Python treat uppercase and lowercase letters as the same when comparing strings?",
   "why": [
    "This assumes comparison ignores case, but `'a'` and `'A'` are different characters.",
    "String comparison is case-sensitive, so the two strings are not equal.",
    "Comparing two strings with `==` is always allowed, so there is no `TypeError`.",
    "`==` always returns `True` or `False`, never `None`."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-06",
   "topic": "conditionals",
   "q": "When does an `elif` block run?",
   "options": [
    "Whenever its own condition is True",
    "Only if all previous conditions were False and its own condition is True",
    "Only if the `if` condition was True",
    "Always, after the `if` block"
   ],
   "answer": 1,
   "explain": "An `elif` is only checked when every condition above it was False; then it runs if its own condition is True.",
   "hint": "What has to be true of the conditions above an `elif` before it is even checked?",
   "why": [
    "This treats `elif` like a separate `if`, but it is skipped when an earlier condition was true.",
    "An `elif` is checked only when every earlier condition was `False`, and it runs if its own is `True`.",
    "This is backwards: if the `if` condition was true, the `elif` is skipped.",
    "An `elif` has its own condition and is never automatic; that confuses it with code after the whole block."
   ],
   "type": "concept"
  },
  {
   "id": "conditionals-07",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "temp = 30\nraining = True\n\nif temp > 25:\n    if raining:\n        print('Warm rain')\n    else:\n        print('Sunny heat')\nelse:\n    print('Cool')",
   "options": [
    "`Warm rain`",
    "`Sunny heat`",
    "`Cool`",
    "`Warm rain` then `Cool`"
   ],
   "answer": 0,
   "explain": "The outer condition (30 > 25) is True, so the nested `if` is checked; `raining` is True so `Warm rain` prints.",
   "hint": "Evaluate the outer condition first, then the nested one.",
   "why": [
    "30 > 25 is true and `raining` is `True`, so the nested `if` prints `Warm rain`.",
    "The inner `else` runs only when `raining` is false, but it is `True`.",
    "The outer `else` runs only when `temp > 25` is false, but 30 is greater than 25.",
    "Once the outer `if` branch runs, its `else` is skipped, so `Cool` never prints."
   ],
   "type": "code"
  },
  {
   "id": "conditionals-08",
   "topic": "conditionals",
   "q": "What happens when this code runs?",
   "code": "x = 5\n\nif x = 5:\n    print(\"It's five\")",
   "options": [
    "It prints `It's five`",
    "Nothing is printed",
    "A `SyntaxError` is raised",
    "A `TypeError` is raised"
   ],
   "answer": 2,
   "explain": "A single `=` is assignment, which is not allowed as an `if` condition. Comparison needs `==`.",
   "hint": "Is `=` the comparison operator in Python?",
   "why": [
    "This assumes `=` compares values, but a single `=` is assignment and is not allowed here.",
    "The code never runs at all, because Python rejects it before execution.",
    "Using `=` in an `if` condition is invalid syntax, so Python raises a `SyntaxError` before running anything.",
    "The error is caught while parsing, before any types are checked, so it is a `SyntaxError`, not a `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "booleans-01",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(bool(''))",
   "options": [
    "`True`",
    "`False`",
    "`''`",
    "`None`"
   ],
   "answer": 1,
   "explain": "The empty string is falsy, so `bool()` converts it to `False`.",
   "hint": "Is an empty string truthy or falsy?",
   "why": [
    "Only non-empty strings are truthy; the empty string is falsy.",
    "The empty string is falsy, so `bool('')` returns `False`.",
    "`bool()` always returns a boolean, not the original value.",
    "`bool()` returns `True` or `False`, never `None`."
   ],
   "type": "code"
  },
  {
   "id": "booleans-02",
   "topic": "booleans",
   "q": "What does this code print? (Tricky!)",
   "code": "print(bool('False'))",
   "options": [
    "`True`",
    "`False`",
    "`'False'`",
    "A `ValueError`"
   ],
   "answer": 0,
   "explain": "`'False'` is a non-empty string, and every non-empty string is truthy, whatever its text says.",
   "hint": "Does `bool()` read the words inside a string, or only check whether it is empty?",
   "why": [
    "`'False'` is a non-empty string, and every non-empty string is truthy.",
    "This assumes `bool()` interprets the text, but it only checks whether the string is empty.",
    "`bool()` always returns a boolean, not the string itself.",
    "`bool()` accepts any value and never raises a `ValueError` for a string."
   ],
   "type": "code"
  },
  {
   "id": "booleans-03",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(0 or 'default')",
   "options": [
    "`0`",
    "`default`",
    "`True`",
    "`False`"
   ],
   "answer": 1,
   "explain": "`or` returns the first operand if it is truthy, otherwise the second. 0 is falsy, so the result is `default`.",
   "hint": "What does `or` return: a boolean, or one of its operands?",
   "why": [
    "`or` returns the first operand only if it is truthy, and 0 is falsy.",
    "0 is falsy, so `or` returns the second operand, `'default'`.",
    "`or` returns one of its operands as-is, not a converted `True`.",
    "`or` never returns `False` here; it returns the actual second operand."
   ],
   "type": "code"
  },
  {
   "id": "booleans-04",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print('a' and 'b')",
   "options": [
    "`True`",
    "`a`",
    "`b`",
    "`ab`"
   ],
   "answer": 2,
   "explain": "`and` returns the first operand if it is falsy, otherwise the second. `a` is truthy, so you get the second operand, `b`.",
   "hint": "When the first operand of `and` is truthy, which operand does it return?",
   "why": [
    "`and` returns one of its operands, not a converted boolean.",
    "`and` returns the first operand only if it is falsy, and `'a'` is truthy.",
    "`'a'` is truthy, so `and` returns the second operand, `'b'`.",
    "`and` is a logical operator, not string concatenation."
   ],
   "type": "code"
  },
  {
   "id": "booleans-05",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(0 and 5)",
   "options": [
    "`0`",
    "`5`",
    "`False`",
    "`True`"
   ],
   "answer": 0,
   "explain": "`and` short-circuits on the falsy first operand and returns it as-is: `0`, not `False`.",
   "hint": "When the first operand of `and` is falsy, does Python look at the second one?",
   "why": [
    "0 is falsy, so `and` short-circuits and returns the first operand, 0.",
    "The second operand is returned only when the first is truthy, and 0 is falsy.",
    "`and` returns the operand itself, not a converted `False`.",
    "0 is falsy, so the result cannot be truthy."
   ],
   "type": "code"
  },
  {
   "id": "booleans-06",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(not 'hi')",
   "options": [
    "`True`",
    "`False`",
    "`''`",
    "`None`"
   ],
   "answer": 1,
   "explain": "`'hi'` is truthy and `not` inverts it. Unlike `and`/`or`, `not` always returns a real bool.",
   "hint": "Is `'hi'` truthy, and what type does `not` always return?",
   "why": [
    "This forgets that `'hi'` is already truthy, so negating it gives `False`.",
    "`'hi'` is truthy, so `not 'hi'` is `False`.",
    "`not` always returns a real bool, never a string.",
    "`not` always returns `True` or `False`, never `None`."
   ],
   "type": "code"
  },
  {
   "id": "booleans-07",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "def side():\n    print('called')\n    return True\n\nresult = True or side()\nprint(result)",
   "options": [
    "`True`",
    "`called` then `True`",
    "`called`",
    "`False`"
   ],
   "answer": 0,
   "explain": "With `or`, Python stops as soon as it finds a truthy operand. `True` is enough, so `side()` is never called (short-circuiting).",
   "hint": "Once `or` has found a truthy operand, does it evaluate the rest?",
   "why": [
    "`True or ...` short-circuits, so `side()` is never called and only `True` is printed.",
    "This assumes both operands are always evaluated, but `or` stops at the first truthy one.",
    "`side()` never runs, and the final `print(result)` still prints something.",
    "`True or anything` can never be `False`."
   ],
   "type": "code"
  },
  {
   "id": "booleans-08",
   "topic": "booleans",
   "q": "Which value is truthy?",
   "options": [
    "`''`",
    "`0.0`",
    "`None`",
    "`' '` (a single space)"
   ],
   "answer": 3,
   "explain": "A string with a space is not empty, so it's truthy. `''`, `0.0` and `None` are all falsy.",
   "hint": "Is a string containing only a space empty?",
   "why": [
    "The empty string is falsy because it has no characters.",
    "Zero is falsy whether it is an int or a float.",
    "`None` is always falsy.",
    "A single space is a character, so the string is not empty and therefore truthy."
   ],
   "type": "concept"
  },
  {
   "id": "lists-01",
   "topic": "lists",
   "q": "What does this code print?",
   "code": "cities = ['Los Angeles', 'London', 'Tokyo']\nprint(cities[-1])",
   "options": [
    "`Tokyo`",
    "`Los Angeles`",
    "`London`",
    "`IndexError`"
   ],
   "answer": 0,
   "explain": "Negative indexing counts from the end, so `-1` is the last element. Index `0` would give 'Los Angeles'.",
   "hint": "Think about which end of the list a negative index counts from.",
   "why": [
    "Correct: `-1` counts back from the end, so it refers to the last element, 'Tokyo'.",
    "This would be `cities[0]`; picking it confuses `-1` with the first position.",
    "This is `cities[1]` (or `cities[-2]`); `-1` points one step further, to the very last item.",
    "Negative indices are valid in Python as long as they stay within the list's length, and `-1` does."
   ],
   "type": "code"
  },
  {
   "id": "lists-02",
   "topic": "lists",
   "q": "What happens when this code runs?",
   "code": "nums = [10, 20, 30]\nprint(nums[3])",
   "options": [
    "`30`",
    "`IndexError`",
    "`None`",
    "`KeyError`"
   ],
   "answer": 1,
   "explain": "Lists are zero-indexed, so the valid indices are 0 to 2. Index 3 is out of range and raises `IndexError`, not `KeyError` (that one is for dictionaries).",
   "hint": "List indices start at 0, so work out the highest valid index for three items.",
   "why": [
    "`30` sits at index 2; thinking index 3 is the third item forgets that counting starts at 0.",
    "Correct: valid indices are 0 to 2, so `nums[3]` is out of range and raises `IndexError`.",
    "Python never returns `None` for a missing list index; it raises an error instead.",
    "`KeyError` is raised for missing dictionary keys, not for out-of-range list positions."
   ],
   "type": "code"
  },
  {
   "id": "lists-03",
   "topic": "lists",
   "q": "What does this code print?",
   "code": "developer = ['Alice', 25, ['Python', 'Rust', 'C++']]\nprint(developer[2][1])",
   "options": [
    "`25`",
    "`Python`",
    "`Rust`",
    "`['Python', 'Rust', 'C++']`"
   ],
   "answer": 2,
   "explain": "`developer[2]` is the nested list, and index `1` of that list is 'Rust'. Remember both indices start at 0.",
   "hint": "Evaluate the indexing one step at a time: first `developer[2]`, then index into that result.",
   "why": [
    "`25` is `developer[1]`; the second index is applied to the nested list, not to `developer`.",
    "'Python' is at index 0 of the nested list; picking it treats index `1` as if counting started at 1.",
    "Correct: `developer[2]` is the nested list and its index `1` is 'Rust'.",
    "That is only `developer[2]`; the extra `[1]` then picks a single item out of it."
   ],
   "type": "code"
  },
  {
   "id": "lists-04",
   "topic": "lists",
   "q": "What does this code print?",
   "code": "desserts = ['cake', 'pie', 'cookies', 'ice cream']\nprint(desserts[1:3])",
   "options": [
    "`['cake', 'pie', 'cookies']`",
    "`['pie', 'cookies', 'ice cream']`",
    "`['cake', 'pie']`",
    "`['pie', 'cookies']`"
   ],
   "answer": 3,
   "explain": "Slicing includes the start index (1) but stops before the stop index (3), so you get the items at indices 1 and 2.",
   "hint": "Remember which of the slice boundaries is included and which is excluded.",
   "why": [
    "This would be `desserts[0:3]`; the slice starts at index 1, so 'cake' is not included.",
    "This would be `desserts[1:4]`; the stop index 3 is excluded, so 'ice cream' is left out.",
    "This would be `desserts[0:2]`; it starts too early and stops too early.",
    "Correct: the slice takes indices 1 and 2 and stops before index 3."
   ],
   "type": "code"
  },
  {
   "id": "lists-05",
   "topic": "lists",
   "q": "What does this code print?",
   "code": "print([1, 2, 3, 4, 5, 6][1::2])",
   "options": [
    "`[2, 4, 6]`",
    "`[1, 3, 5]`",
    "`[2, 3]`",
    "`[1, 2]`"
   ],
   "answer": 0,
   "explain": "The slice starts at index 1 (value 2), runs to the end, and takes every second item. Starting at 0 would give `[1, 3, 5]`.",
   "hint": "The slice `[start::step]` begins at `start` and jumps by `step`; check which value is at index 1.",
   "why": [
    "Correct: starting at index 1 (value 2) and taking every second item gives 2, 4 and 6.",
    "This would be `[::2]` starting at index 0; the slice starts at index 1, not 0.",
    "This looks like `[1:3]`; the `::2` means a step of 2 to the end, not a stop of 2.",
    "This treats `1::2` like `[0:2]`; the first number is the start and the last is the step."
   ],
   "type": "code"
  },
  {
   "id": "lists-06",
   "topic": "lists",
   "q": "What happens when this code runs?",
   "code": "developer = ['Alice', 34, 'Rust Developer']\nname, age = developer",
   "options": [
    "`name` is 'Alice' and `age` is 34; the last item is ignored",
    "`ValueError`",
    "`TypeError`",
    "`IndexError`"
   ],
   "answer": 1,
   "explain": "When unpacking, the number of variables must match the number of items. Three items into two variables raises `ValueError: too many values to unpack`.",
   "hint": "Compare the number of variables on the left with the number of items being unpacked.",
   "why": [
    "Python does not silently ignore extra items when unpacking; you'd need `*rest` or a slice for that.",
    "Correct: three items cannot be unpacked into two names, so Python raises `ValueError: too many values to unpack`.",
    "The types are fine here; a count mismatch during unpacking is reported as a `ValueError`, not a `TypeError`.",
    "No index is accessed directly, so `IndexError` doesn't apply; unpacking mismatches raise `ValueError`."
   ],
   "type": "code"
  },
  {
   "id": "lists-07",
   "topic": "lists",
   "q": "What does this code print?",
   "code": "developer = ['Alice', 34, 'Rust Developer']\nname, *rest = developer\nprint(rest)",
   "options": [
    "`34`",
    "`(34, 'Rust Developer')`",
    "`['Alice', 34, 'Rust Developer']`",
    "`[34, 'Rust Developer']`"
   ],
   "answer": 3,
   "explain": "The asterisk collects all remaining items into a new list. It is always a list, even when unpacking from a tuple.",
   "hint": "Think about what kind of object the starred variable always collects the leftover items into.",
   "why": [
    "`*rest` collects all remaining items, not just the next one, so it holds more than `34`.",
    "Starred unpacking always produces a list, never a tuple, regardless of the source type.",
    "`name` already took 'Alice', so `rest` only gets the items after it.",
    "Correct: `*rest` gathers the remaining items into a new list `[34, 'Rust Developer']`."
   ],
   "type": "code"
  },
  {
   "id": "lists-08",
   "topic": "lists",
   "q": "Which statement about Python lists is true?",
   "options": [
    "Lists are immutable, so you must create a new list to change an item",
    "Lists are ordered, mutable and zero-based indexed",
    "Lists can only hold items of the same data type",
    "Lists are unordered, so items cannot be accessed by index"
   ],
   "answer": 1,
   "explain": "Lists keep their order, can be changed in place (e.g. `nums[0] = 5`) and start indexing at 0. They can mix data types, including other lists.",
   "hint": "Think about whether you can change items in place, mix types, and how positions are numbered.",
   "why": [
    "Lists are mutable, so you can change an item in place with e.g. `nums[0] = 5`; it's tuples that are immutable.",
    "Correct: lists keep insertion order, can be modified in place and start indexing at 0.",
    "Lists can mix types freely, e.g. `['Alice', 25, [1, 2]]`.",
    "Lists are ordered and support indexing; it's sets that are unordered."
   ],
   "type": "concept"
  },
  {
   "id": "list-methods-01",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "numbers = [1, 2, 3]\nnumbers.append([4, 5])\nprint(numbers)",
   "options": [
    "`[1, 2, 3, 4, 5]`",
    "`[1, 2, 3, [4, 5]]`",
    "`[[1, 2, 3], [4, 5]]`",
    "`[1, 2, 3, (4, 5)]`"
   ],
   "answer": 1,
   "explain": "`append()` adds its argument as a single item, so the whole list becomes a nested element. Use `extend()` to add the items one by one.",
   "hint": "Consider whether this method adds its argument as one item or adds each of its items separately.",
   "why": [
    "That result comes from `extend([4, 5])`; `append()` doesn't unpack its argument.",
    "Correct: `append()` adds the whole list `[4, 5]` as a single nested element at the end.",
    "`append()` modifies the existing list in place rather than wrapping it in a new outer list.",
    "`append()` adds the object exactly as given, so the list `[4, 5]` stays a list, not a tuple."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-02",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "numbers = [1, 2, 3]\nnumbers.extend([4, 5])\nprint(numbers)",
   "options": [
    "`[1, 2, 3, [4, 5]]`",
    "`None`",
    "`[1, 2, 3, 4, 5]`",
    "`[4, 5, 1, 2, 3]`"
   ],
   "answer": 2,
   "explain": "`extend()` adds each item of the iterable to the end of the list. It modifies the list in place.",
   "hint": "Think about how this method treats the items of the iterable you pass it, and where it puts them.",
   "why": [
    "That is what `append([4, 5])` would do; `extend()` adds each item separately.",
    "`extend()` itself returns `None`, but here we print the list, which was modified in place.",
    "Correct: `extend()` adds 4 and 5 one by one to the end of the existing list.",
    "`extend()` adds items to the end, not the beginning of the list."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-03",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "nums = [3, 1, 2]\nresult = nums.sort()\nprint(result)",
   "options": [
    "`[1, 2, 3]`",
    "`[3, 1, 2]`",
    "`None`",
    "`TypeError`"
   ],
   "answer": 2,
   "explain": "`sort()` sorts the list in place and returns `None`. Use `sorted(nums)` if you want a new sorted list back.",
   "hint": "Pay attention to what the method returns, not to what it does to `nums`.",
   "why": [
    "`nums` is now `[1, 2, 3]`, but `result` holds the return value of `sort()`, not the list.",
    "`sort()` does change the list in place, and either way `result` isn't the list itself.",
    "Correct: `list.sort()` sorts in place and returns `None`, which is what gets printed.",
    "Sorting a list of integers works fine, so no `TypeError` is raised."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-04",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "nums = [3, 1, 2]\nnew_nums = sorted(nums)\nprint(nums, new_nums)",
   "options": [
    "`[3, 1, 2] [1, 2, 3]`",
    "`[1, 2, 3] [1, 2, 3]`",
    "`[3, 1, 2] None`",
    "`[1, 2, 3] None`"
   ],
   "answer": 0,
   "explain": "`sorted()` returns a new sorted list and leaves the original unchanged, unlike the `sort()` method.",
   "hint": "Consider whether this built-in function changes the original list or gives you a new one.",
   "why": [
    "Correct: `sorted()` returns a new sorted list and leaves `nums` unchanged.",
    "This assumes `sorted()` sorts in place like `nums.sort()`; it doesn't touch the original.",
    "This mixes up `sorted()` with `sort()`; `sorted()` returns a new list, not `None`.",
    "This describes the behaviour of `nums.sort()` (in place, returns `None`), not `sorted()`."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-05",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "letters = ['a', 'b', 'a', 'c']\nletters.remove('a')\nprint(letters)",
   "options": [
    "`['b', 'c']`",
    "`['b', 'a', 'c']`",
    "`['a', 'b', 'c']`",
    "`ValueError`"
   ],
   "answer": 1,
   "explain": "`remove()` deletes only the first occurrence of the value. The second 'a' stays in the list.",
   "hint": "Check whether this method removes every matching value or only some of them.",
   "why": [
    "This assumes `remove()` deletes every 'a'; it only removes the first occurrence.",
    "Correct: `remove('a')` deletes only the first 'a', so the second one stays.",
    "This removes the second 'a' instead; `remove()` always takes the first match.",
    "'a' is in the list, so there's no `ValueError`; that only happens when the value is missing."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-06",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "nums = [10, 20, 30, 40]\nitem = nums.pop()\nprint(item, nums)",
   "options": [
    "`10 [20, 30, 40]`",
    "`None [10, 20, 30]`",
    "`40 [10, 20, 30, 40]`",
    "`40 [10, 20, 30]`"
   ],
   "answer": 3,
   "explain": "Without an argument, `pop()` removes and returns the last item. With an index, e.g. `pop(0)`, it removes that item instead.",
   "hint": "Recall which item this method takes when called without an argument, and whether it also removes it.",
   "why": [
    "This would be `pop(0)`; without an argument `pop()` takes the last item, not the first.",
    "`pop()` returns the removed item, not `None`.",
    "`pop()` both returns the item and removes it, so 40 is no longer in the list.",
    "Correct: `pop()` removes and returns the last item, 40, leaving `[10, 20, 30]`."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-07",
   "topic": "list-methods",
   "q": "What happens when this code runs?",
   "code": "langs = ['Rust', 'Java']\nprint(langs.index('Python'))",
   "options": [
    "`-1`",
    "`None`",
    "`ValueError`",
    "`IndexError`"
   ],
   "answer": 2,
   "explain": "`index()` raises `ValueError` when the value is not in the list. It's `str.find()` that returns `-1`.",
   "hint": "Think about how this list method signals that a value can't be found.",
   "why": [
    "Returning `-1` is how `str.find()` behaves; `list.index()` raises an error instead.",
    "`index()` never returns `None` for a missing value; it raises an exception.",
    "Correct: `list.index()` raises `ValueError` when the value isn't in the list.",
    "`IndexError` is for out-of-range positions; here we search for a value, which raises `ValueError`."
   ],
   "type": "code"
  },
  {
   "id": "list-methods-08",
   "topic": "list-methods",
   "q": "What does this code print?",
   "code": "nums = [1, 2, 4]\nnums.insert(2, 3)\nprint(nums)",
   "options": [
    "`[1, 2, 3, 4]`",
    "`[1, 2, 2, 3]`",
    "`[1, 3, 2, 4]`",
    "`[1, 2, 4, 3]`"
   ],
   "answer": 0,
   "explain": "`insert(index, item)` places the item at that index and shifts the rest right. The first argument is the position, the second is the value.",
   "hint": "Figure out which argument is the position and which is the value to insert.",
   "why": [
    "Correct: `insert(2, 3)` puts 3 at index 2 and shifts 4 one place to the right.",
    "This looks like the value 2 was inserted and 4 was overwritten by 3, mixing up the argument order; `insert()` takes the position first and never overwrites anything.",
    "This places 3 at index 1; the first argument 2 means index 2, i.e. before the 4.",
    "This appends 3 to the end; `insert()` puts it at the given index, not at the end."
   ],
   "type": "code"
  },
  {
   "id": "tuples-01",
   "topic": "tuples",
   "q": "What happens when this code runs?",
   "code": "developer = ('Alice', 34, 'Rust Developer')\ndeveloper[1] = 35\nprint(developer)",
   "options": [
    "`('Alice', 35, 'Rust Developer')`",
    "`TypeError`",
    "`ValueError`",
    "`AttributeError`"
   ],
   "answer": 1,
   "explain": "Tuples are immutable, so assigning to an index raises `TypeError: 'tuple' object does not support item assignment`.",
   "hint": "Think about whether a tuple can be changed after it's created.",
   "why": [
    "That would happen with a list; tuples can't be changed in place.",
    "Correct: tuples are immutable, so item assignment raises `TypeError`.",
    "The value 35 itself is fine; the problem is the operation on the type, which is a `TypeError`.",
    "The error isn't about a missing attribute or method; it's an unsupported operation on the type, a `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "tuples-02",
   "topic": "tuples",
   "q": "What does this code print?",
   "code": "programming_languages = ('Rust', 'Java', 'Python', 'Rust')\nprint(programming_languages.count('Rust'))",
   "options": [
    "`1`",
    "`0`",
    "`2`",
    "`3`"
   ],
   "answer": 2,
   "explain": "`count()` returns how many times the item appears. 'Rust' appears twice. A missing item would return `0`.",
   "hint": "Count every occurrence of the value in the tuple, including repeats.",
   "why": [
    "This counts only the first 'Rust'; `count()` counts all occurrences.",
    "'Rust' is in the tuple, so the count isn't 0; `0` is only returned for missing items.",
    "Correct: 'Rust' appears at indices 0 and 3, so `count()` returns 2.",
    "There are only two 'Rust' entries; nothing else matches."
   ],
   "type": "code"
  },
  {
   "id": "tuples-03",
   "topic": "tuples",
   "q": "What does this code print?",
   "code": "print(tuple('hi'))",
   "options": [
    "`('hi',)`",
    "`('h', 'i')`",
    "`['h', 'i']`",
    "`TypeError`"
   ],
   "answer": 1,
   "explain": "The `tuple()` constructor takes an iterable and creates a tuple of its items; a string is iterated character by character.",
   "hint": "Think about what you get when you iterate over a string.",
   "why": [
    "That would be `('hi',)`, a one-element tuple literal; `tuple()` iterates the string instead.",
    "Correct: `tuple()` iterates the string character by character, giving `('h', 'i')`.",
    "`tuple()` produces a tuple (parentheses), not a list; that would be `list('hi')`.",
    "A string is an iterable, so `tuple()` accepts it without error."
   ],
   "type": "code"
  },
  {
   "id": "tuples-04",
   "topic": "tuples",
   "q": "What does this code print?",
   "code": "desserts = ('cake', 'pie', 'cookies', 'ice cream')\nprint(desserts[1:3])",
   "options": [
    "`['pie', 'cookies']`",
    "`('cake', 'pie', 'cookies')`",
    "`('pie', 'cookies')`",
    "`('pie', 'cookies', 'ice cream')`"
   ],
   "answer": 2,
   "explain": "Slicing a tuple returns a new tuple (not a list). The stop index 3 is excluded.",
   "hint": "Consider what type a slice of a tuple returns, and which index is excluded.",
   "why": [
    "These are the right items, but slicing a tuple returns a tuple, not a list.",
    "This would be `desserts[0:3]`; the slice starts at index 1.",
    "Correct: the slice takes indices 1 and 2 and returns them as a new tuple.",
    "This would be `desserts[1:4]`; the stop index 3 is excluded."
   ],
   "type": "code"
  },
  {
   "id": "tuples-05",
   "topic": "tuples",
   "q": "What does this code print?",
   "code": "langs = ('Rust', 'Java', 'Rust', 'Go')\nprint(langs.index('Rust', 1))",
   "options": [
    "`0`",
    "`1`",
    "`2`",
    "`ValueError`"
   ],
   "answer": 2,
   "explain": "The second argument is the start index for the search. Searching from index 1 skips the first 'Rust' and finds the one at index 2.",
   "hint": "The second argument to `index()` changes where the search begins.",
   "why": [
    "Index 0 is the first 'Rust', but the search starts at index 1 so it is skipped.",
    "Index 1 is where the search starts, but the value there is 'Java', not 'Rust'.",
    "Correct: searching from index 1 finds the next 'Rust' at index 2.",
    "There is a 'Rust' at or after index 1, so no `ValueError` is raised."
   ],
   "type": "code"
  },
  {
   "id": "tuples-06",
   "topic": "tuples",
   "q": "What does this code print?",
   "code": "langs = ('Python', 'Go', 'Rust')\nprint(sorted(langs, key=len))",
   "options": [
    "`('Go', 'Rust', 'Python')`",
    "`['Go', 'Python', 'Rust']`",
    "`['Python', 'Rust', 'Go']`",
    "`['Go', 'Rust', 'Python']`"
   ],
   "answer": 3,
   "explain": "`sorted()` always returns a new list, even for a tuple. `key=len` sorts by string length (2, 4, 6) instead of alphabetically.",
   "hint": "Think about both the return type of `sorted()` and what `key=len` compares.",
   "why": [
    "The order is right, but `sorted()` always returns a list, even when given a tuple.",
    "This is alphabetical order; `key=len` sorts by length instead.",
    "This is longest first; `sorted()` is ascending unless you pass `reverse=True`.",
    "Correct: `sorted()` returns a list ordered by length: 'Go' (2), 'Rust' (4), 'Python' (6)."
   ],
   "type": "code"
  },
  {
   "id": "tuples-07",
   "topic": "tuples",
   "q": "What happens when this code runs?",
   "code": "point = (4, 7)\nprint(point[2])",
   "options": [
    "`IndexError`",
    "`None`",
    "`7`",
    "`TypeError`"
   ],
   "answer": 0,
   "explain": "A tuple of length 2 has indices 0 and 1. An index equal to or greater than the length raises `IndexError`.",
   "hint": "Work out the valid indices for a tuple with two items.",
   "why": [
    "Correct: a 2-item tuple only has indices 0 and 1, so index 2 raises `IndexError`.",
    "Python raises an error for an out-of-range index rather than returning `None`.",
    "`7` is `point[1]`; picking it assumes indices start at 1.",
    "Indexing a tuple with an integer is a valid operation; only the position is out of range."
   ],
   "type": "code"
  },
  {
   "id": "tuples-08",
   "topic": "tuples",
   "q": "When should you choose a tuple over a list?",
   "options": [
    "When you need to add and remove items often",
    "When the collection is fixed and should not change",
    "When you need to sort the items in place",
    "When the items must all be the same data type"
   ],
   "answer": 1,
   "explain": "Tuples are immutable, so they suit fixed data like coordinates or records. A list is better for a dynamic collection you add to, remove from or update.",
   "hint": "Think about the one key property that separates tuples from lists.",
   "why": [
    "Frequent adding and removing needs a mutable type, which is a list, not a tuple.",
    "Correct: tuples are immutable, so they suit fixed data like coordinates or records.",
    "Tuples have no `sort()` method because they can't change; in-place sorting needs a list.",
    "Tuples can hold mixed data types, just like lists, so this isn't a reason to pick one."
   ],
   "type": "concept"
  },
  {
   "id": "loops-01",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "print(list(range(2, 11, 2)))",
   "options": [
    "`[2, 4, 6, 8, 10]`",
    "`[2, 4, 6, 8]`",
    "`[2, 4, 6, 8, 10, 12]`",
    "`[0, 2, 4, 6, 8, 10]`"
   ],
   "answer": 0,
   "explain": "`range(start, stop, step)` starts at 2 and adds 2 each time, stopping before 11, so 10 is the last value.",
   "hint": "Remember that `range()` stops before the stop value; check whether the last step reaches it.",
   "why": [
    "Correct: counting from 2 in steps of 2 gives 2, 4, 6, 8, 10, and the next value 12 is past 11.",
    "This stops too early; 10 is less than the stop value 11, so it's included.",
    "12 is greater than the stop value 11, so `range()` never produces it.",
    "The start argument is 2, so the sequence doesn't begin at 0."
   ],
   "type": "code"
  },
  {
   "id": "loops-02",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "print(list(range(5)))",
   "options": [
    "`[1, 2, 3, 4, 5]`",
    "`[0, 1, 2, 3, 4, 5]`",
    "`[0, 1, 2, 3, 4]`",
    "`[5]`"
   ],
   "answer": 2,
   "explain": "With one argument, `start` defaults to 0 and the stop value 5 is excluded.",
   "hint": "Think about the default start value and whether the stop value is included.",
   "why": [
    "This assumes counting starts at 1; with one argument `range()` starts at 0.",
    "This includes 5, but the stop value is always excluded.",
    "Correct: `range(5)` starts at 0 and stops before 5, giving five numbers 0 to 4.",
    "The single argument is the stop value, not a value to put in the list."
   ],
   "type": "code"
  },
  {
   "id": "loops-03",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "for i in range(5):\n    if i == 3:\n        break\n    print(i, end=' ')",
   "options": [
    "`0 1 2 3`",
    "`0 1 2`",
    "`0 1 2 4`",
    "`3`"
   ],
   "answer": 1,
   "explain": "`break` exits the loop immediately when `i` is 3, so 3 and 4 are never printed.",
   "hint": "Consider what `break` does to the rest of the loop, and when it runs relative to `print`.",
   "why": [
    "The `break` happens before `print`, so 3 is never printed.",
    "Correct: when `i` is 3 the loop exits immediately, so only 0, 1 and 2 are printed.",
    "This describes `continue`; `break` ends the whole loop, so 4 is never reached.",
    "The `print` runs for every value before 3, and 3 itself is never printed."
   ],
   "type": "code"
  },
  {
   "id": "loops-04",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "for i in range(5):\n    if i == 3:\n        continue\n    print(i, end=' ')",
   "options": [
    "`0 1 2`",
    "`0 1 2 3 4`",
    "`3`",
    "`0 1 2 4`"
   ],
   "answer": 3,
   "explain": "`continue` skips the rest of the current iteration only, so 3 isn't printed but the loop goes on to 4.",
   "hint": "Consider whether this keyword ends the loop or only skips part of one iteration.",
   "why": [
    "This is what `break` would do; `continue` lets the loop go on to 4.",
    "`continue` skips the `print` when `i` is 3, so 3 is missing from the output.",
    "The condition skips 3 rather than printing only 3.",
    "Correct: `continue` skips printing 3 but the loop carries on, printing 0, 1, 2 and 4."
   ],
   "type": "code"
  },
  {
   "id": "loops-05",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "for n in [1, 2, 3]:\n    if n == 5:\n        break\nelse:\n    print('done')",
   "options": [
    "`done`",
    "Nothing is printed",
    "`SyntaxError`",
    "`5`"
   ],
   "answer": 0,
   "explain": "A loop's `else` block runs when the loop finishes without hitting `break`. 5 is never found, so there is no break and 'done' prints.",
   "hint": "Think about when a loop's `else` block runs.",
   "why": [
    "Correct: the loop never hits `break` (5 isn't in the list), so the `else` block runs and prints 'done'.",
    "This assumes the `else` runs only if the `if` matched; a loop `else` runs when no `break` occurred.",
    "`for ... else` is valid Python syntax, so there is no `SyntaxError`.",
    "Nothing prints `n`, and 5 is never in the list anyway."
   ],
   "type": "code"
  },
  {
   "id": "loops-06",
   "topic": "loops",
   "q": "What happens when this code runs?",
   "code": "for i in range(0, 1, 0.5):\n    print(i)",
   "options": [
    "It prints `0` and `0.5`",
    "`ValueError`",
    "`TypeError`",
    "It prints `0` only"
   ],
   "answer": 2,
   "explain": "`range()` only accepts integers. Passing a float raises a `TypeError`.",
   "hint": "Check what kind of numbers `range()` accepts as arguments.",
   "why": [
    "This assumes `range()` supports floats; it only accepts integers.",
    "The value isn't the problem, the type is: a float where an int is required raises `TypeError`.",
    "Correct: `range()` only accepts integers, so a float step raises `TypeError`.",
    "The loop never starts, because `range()` raises an error before producing any values."
   ],
   "type": "code"
  },
  {
   "id": "loops-07",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "print(list(range(5, 0, -1)))",
   "options": [
    "`[5, 4, 3, 2, 1, 0]`",
    "`[]`",
    "`[0, 1, 2, 3, 4, 5]`",
    "`[5, 4, 3, 2, 1]`"
   ],
   "answer": 3,
   "explain": "A negative step counts down. The stop value 0 is excluded, so the sequence ends at 1.",
   "hint": "With a negative step, think about where the sequence ends relative to the stop value.",
   "why": [
    "This includes 0, but the stop value is excluded even when counting down.",
    "A negative step makes `range()` count down from 5 toward 0, so it isn't empty.",
    "This is ascending; a step of `-1` counts downward.",
    "Correct: it counts down from 5 and stops before 0, giving 5, 4, 3, 2, 1."
   ],
   "type": "code"
  },
  {
   "id": "loops-08",
   "topic": "loops",
   "q": "What does this code print?",
   "code": "count = 0\nwhile count < 3:\n    count += 1\nprint(count)",
   "options": [
    "`2`",
    "`3`",
    "`4`",
    "The loop never ends"
   ],
   "answer": 1,
   "explain": "The loop runs while `count` is 0, 1 and 2, adding 1 each time. When `count` reaches 3 the condition is `False` and the loop stops.",
   "hint": "Trace `count` through each check of the condition and see when it becomes false.",
   "why": [
    "The loop runs one more time after `count` is 2, raising it to 3.",
    "Correct: the loop adds 1 three times (from 0, 1 and 2) and stops when `count` is 3.",
    "When `count` reaches 3 the condition `count < 3` is false, so it never goes to 4.",
    "`count` increases each pass, so the condition eventually becomes false and the loop ends."
   ],
   "type": "code"
  },
  {
   "id": "iteration-01",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "langs = ['Spanish', 'English']\nfor i, lang in enumerate(langs, 1):\n    print(i, lang)",
   "options": [
    "`0 Spanish` / `1 English`",
    "`1 Spanish` / `2 English`",
    "`1 English` / `2 Spanish`",
    "`(1, 'Spanish')` / `(2, 'English')`"
   ],
   "answer": 1,
   "explain": "The second argument to `enumerate()` sets the starting count, so counting starts at 1 instead of 0.",
   "hint": "Look at what the second argument to `enumerate()` controls.",
   "why": [
    "This is the default start of 0; the second argument `1` makes counting start at 1.",
    "Correct: `enumerate(langs, 1)` numbers the items from 1 in their original order.",
    "`enumerate()` keeps the original order of the list; it doesn't reverse it.",
    "The tuples are unpacked into `i` and `lang`, so `print` shows the two values separately."
   ],
   "type": "code"
  },
  {
   "id": "iteration-02",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "names = ['Naomi', 'Dario', 'Tom']\nids = [1, 2]\nprint(list(zip(names, ids)))",
   "options": [
    "`[('Naomi', 1), ('Dario', 2), ('Tom', None)]`",
    "`ValueError`",
    "`[('Naomi', 1), ('Dario', 2)]`",
    "`[['Naomi', 1], ['Dario', 2]]`"
   ],
   "answer": 2,
   "explain": "`zip()` pairs items in parallel and stops at the shortest iterable, so 'Tom' is dropped. Each pair is a tuple.",
   "hint": "Think about what `zip()` does when the iterables have different lengths.",
   "why": [
    "`zip()` doesn't pad shorter iterables with `None`; that's `itertools.zip_longest()`.",
    "By default `zip()` doesn't complain about unequal lengths; it just stops early.",
    "Correct: `zip()` stops at the shortest iterable, so only two tuples are produced and 'Tom' is dropped.",
    "`zip()` yields tuples, not lists."
   ],
   "type": "code"
  },
  {
   "id": "iteration-03",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "print([n * 2 for n in range(5) if n % 2 == 0])",
   "options": [
    "`[0, 4, 8]`",
    "`[0, 2, 4]`",
    "`[2, 6]`",
    "`[0, 2, 4, 6, 8]`"
   ],
   "answer": 0,
   "explain": "The condition keeps 0, 2 and 4 (the even numbers), and the expression doubles each one.",
   "hint": "Apply the `if` filter first, then the expression to each value that passes.",
   "why": [
    "Correct: the even numbers 0, 2 and 4 pass the filter and are doubled to 0, 4 and 8.",
    "These are the filtered values before doubling; the expression `n * 2` is still applied.",
    "This doubles the odd numbers 1 and 3; the condition `n % 2 == 0` keeps the even ones.",
    "This doubles every number from 0 to 4; the `if` clause filters out the odd ones first."
   ],
   "type": "code"
  },
  {
   "id": "iteration-04",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "words = ['tree', 'python', 'cat', 'laptop']\nprint(list(filter(lambda w: len(w) > 4, words)))",
   "options": [
    "`['tree', 'python', 'laptop']`",
    "`[False, True, False, True]`",
    "`['tree', 'cat']`",
    "`['python', 'laptop']`"
   ],
   "answer": 3,
   "explain": "`filter()` keeps only items for which the function returns `True`. 'tree' has exactly 4 letters, which isn't greater than 4.",
   "hint": "Check each word's length carefully against the condition, especially the boundary case.",
   "why": [
    "'tree' has exactly 4 letters, and `4 > 4` is `False`, so it's filtered out.",
    "`filter()` returns the items that pass, not the boolean results of the test; that would be `map()`.",
    "These are the short words, i.e. the ones the condition rejects.",
    "Correct: only 'python' and 'laptop' have more than 4 letters."
   ],
   "type": "code"
  },
  {
   "id": "iteration-05",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "print(list(map(lambda x: x * 10, [1, 2, 3])))",
   "options": [
    "`[1, 2, 3]`",
    "`[10, 20, 30]`",
    "`60`",
    "`[True, True, True]`"
   ],
   "answer": 1,
   "explain": "`map()` applies the function to every item and returns an iterator of the results; `list()` turns it into a list.",
   "hint": "Think about what `map()` does with the function for each item.",
   "why": [
    "These are the original items; `map()` returns the results of applying the function.",
    "Correct: `map()` multiplies every item by 10, and `list()` collects 10, 20 and 30.",
    "`map()` transforms each item separately; it doesn't add them up like `sum()`.",
    "The lambda returns `x * 10`, not a boolean, so the results are numbers."
   ],
   "type": "code"
  },
  {
   "id": "iteration-06",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "print(sum([5, 10, 15, 20], 10))",
   "options": [
    "`50`",
    "`10`",
    "`60`",
    "`TypeError`"
   ],
   "answer": 2,
   "explain": "The second argument is `start`, the initial value of the sum: 10 + 5 + 10 + 15 + 20 = 60.",
   "hint": "Consider what the second argument to `sum()` represents.",
   "why": [
    "This is the total of the list alone, ignoring the start value of 10.",
    "The second argument is the starting value, not the result.",
    "Correct: `sum()` starts at 10 and adds 5, 10, 15 and 20 for a total of 60.",
    "Passing an integer start value to `sum()` is valid, so no `TypeError` occurs."
   ],
   "type": "code"
  },
  {
   "id": "iteration-07",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "result = map(lambda x: x + 1, [1, 2])\nprint(type(result).__name__)",
   "options": [
    "`list`",
    "`map`",
    "`tuple`",
    "`function`"
   ],
   "answer": 1,
   "explain": "`map()` (like `filter()`) returns a lazy iterator object, not a list. Wrap it in `list()` to see all values.",
   "hint": "Think about whether `map()` builds all its results right away or hands back something lazy.",
   "why": [
    "`map()` doesn't return a list in Python 3; you need `list()` to get one.",
    "Correct: `map()` returns a lazy `map` iterator object, so its type name is `map`.",
    "`map()` doesn't produce a tuple; you'd need `tuple()` to get one.",
    "The lambda is a function, but `result` is the object `map()` returns, not the lambda."
   ],
   "type": "code"
  },
  {
   "id": "iteration-08",
   "topic": "iteration",
   "q": "Which is considered a best practice for lambda functions?",
   "options": [
    "Use them for short, one-off functions passed to other functions",
    "Assign them to a variable so they can be reused, e.g. `add = lambda a, b: a + b`",
    "Use them for complex logic with several statements",
    "Prefer them over `def` for every function to keep code short"
   ],
   "answer": 0,
   "explain": "Lambdas should be simple and used inline, for example as the argument to `filter()`, `map()` or `sorted(key=...)`. If you'd name it, use `def` instead.",
   "hint": "Think about the situations where an anonymous function is clearer than a named one.",
   "why": [
    "Correct: lambdas fit short, single-use functions passed inline to things like `sorted(key=...)` or `map()`.",
    "Style guides (PEP 8) discourage assigning a lambda to a name; if you need a name, use `def`.",
    "A lambda can only contain a single expression, so it can't hold multi-statement logic.",
    "Lambdas are limited to one expression and are harder to read and debug, so `def` remains the default."
   ],
   "type": "concept"
  },
  {
   "id": "dicts-01",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "user = {'name': 'Ada', 'age': 36}\nprint(user.get('email', 'n/a'))",
   "options": [
    "`None`",
    "`KeyError`",
    "`n/a`",
    "`email`"
   ],
   "answer": 2,
   "explain": "`get(key, default)` returns the default when the key doesn't exist, instead of raising an error like bracket notation would.",
   "hint": "Look at what the second argument to `get()` does when the key is missing.",
   "why": [
    "`get()` returns `None` only when no default is given; here a default is supplied.",
    "`get()` never raises `KeyError`; bracket notation does.",
    "Correct: 'email' isn't a key, so `get()` returns the default value 'n/a'.",
    "`get()` returns a value, not the key you asked for."
   ],
   "type": "code"
  },
  {
   "id": "dicts-02",
   "topic": "dicts",
   "q": "What happens when this code runs?",
   "code": "user = {'name': 'Ada'}\nprint(user['email'])",
   "options": [
    "`None`",
    "`KeyError`",
    "`IndexError`",
    "An empty string is printed"
   ],
   "answer": 1,
   "explain": "Bracket notation raises `KeyError` for a missing key. Use `get()` if the key might not exist.",
   "hint": "Think about how bracket access behaves when the key doesn't exist, compared with `get()`.",
   "why": [
    "Returning `None` is what `user.get('email')` does; bracket notation raises an error instead.",
    "Correct: accessing a missing key with brackets raises `KeyError`.",
    "`IndexError` is for sequence positions; dictionaries raise `KeyError` for missing keys.",
    "Python doesn't fill in a default value for missing keys with bracket notation."
   ],
   "type": "code"
  },
  {
   "id": "dicts-03",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "pairs = [('a', 1), ('b', 2)]\nprint(dict(pairs))",
   "options": [
    "`{'a': 1, 'b': 2}`",
    "`{('a', 1), ('b', 2)}`",
    "`[{'a': 1}, {'b': 2}]`",
    "`TypeError`"
   ],
   "answer": 0,
   "explain": "The `dict()` constructor accepts a list of tuples; the first element of each tuple becomes the key and the second the value.",
   "hint": "Think about how `dict()` interprets a sequence of two-item pairs.",
   "why": [
    "Correct: each tuple becomes a key-value pair, giving `{'a': 1, 'b': 2}`.",
    "This is a set of tuples; `dict()` turns each pair into a key and a value.",
    "`dict()` builds one dictionary, not a list of separate dictionaries.",
    "A list of two-item tuples is a valid input to `dict()`, so no error occurs."
   ],
   "type": "code"
  },
  {
   "id": "dicts-04",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "prices = {'Laptop': 990, 'Tablet': 250}\nprices.update({'Tablet': 199, 'Mouse': 25})\nprint(prices)",
   "options": [
    "`{'Laptop': 990, 'Tablet': 250, 'Mouse': 25}`",
    "`{'Tablet': 199, 'Mouse': 25}`",
    "`{'Laptop': 990, 'Tablet': 250, 'Tablet': 199, 'Mouse': 25}`",
    "`{'Laptop': 990, 'Tablet': 199, 'Mouse': 25}`"
   ],
   "answer": 3,
   "explain": "`update()` overwrites the value of keys that already exist and adds new keys. A dictionary can never hold duplicate keys.",
   "hint": "Think about what happens when `update()` gets a key that already exists.",
   "why": [
    "This keeps the old Tablet price; `update()` overwrites existing keys with the new value.",
    "`update()` merges into the existing dictionary instead of replacing it, so 'Laptop' stays.",
    "A dictionary can't hold duplicate keys; the second 'Tablet' replaces the first value.",
    "Correct: 'Tablet' is overwritten with 199 and 'Mouse' is added as a new key."
   ],
   "type": "code"
  },
  {
   "id": "dicts-05",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "stock = {'apples': 5}\nprint(stock.pop('pears', 0))",
   "options": [
    "`0`",
    "`KeyError`",
    "`None`",
    "`5`"
   ],
   "answer": 0,
   "explain": "`pop(key, default)` returns the default when the key is missing. Without the default, a missing key raises `KeyError`.",
   "hint": "Look at what the second argument to `pop()` does when the key isn't there.",
   "why": [
    "Correct: 'pears' is missing, so `pop()` returns the default value 0.",
    "`pop()` raises `KeyError` only when no default is given; here 0 is supplied.",
    "`pop()` returns the given default, not `None`, when the key is missing.",
    "`5` belongs to 'apples'; `pop()` doesn't fall back to another key's value."
   ],
   "type": "code"
  },
  {
   "id": "dicts-06",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "d = {'a': 1, 'b': 2}\nd['c'] = 3\nprint(d.popitem())",
   "options": [
    "`('a', 1)`",
    "`('c', 3)`",
    "`3`",
    "`{'c': 3}`"
   ],
   "answer": 1,
   "explain": "Since Python 3.7, `popitem()` removes and returns the last inserted key-value pair as a tuple.",
   "hint": "Recall which key-value pair `popitem()` removes in modern Python, and what form it returns it in.",
   "why": [
    "This assumes `popitem()` removes the first item; since 3.7 it removes the last inserted one.",
    "Correct: `popitem()` removes and returns the last inserted pair as the tuple `('c', 3)`.",
    "`popitem()` returns the whole key-value pair, not just the value.",
    "`popitem()` returns a tuple, not a dictionary."
   ],
   "type": "code"
  },
  {
   "id": "dicts-07",
   "topic": "dicts",
   "q": "What happens when this code runs?",
   "code": "d = {['x', 'y']: 1}",
   "options": [
    "A dictionary with one key is created",
    "The list is converted to a tuple key automatically",
    "`TypeError`",
    "`KeyError`"
   ],
   "answer": 2,
   "explain": "Dictionary keys must be immutable (hashable). A list is mutable, so this raises a `TypeError` saying the list is unhashable. A tuple key would work.",
   "hint": "Think about which types are allowed as dictionary keys.",
   "why": [
    "A list can't be a key because it's mutable and unhashable, so the dictionary is never created.",
    "Python doesn't convert keys automatically; you'd have to write the tuple `('x', 'y')` yourself.",
    "Correct: a list is unhashable, so using it as a key raises `TypeError: unhashable type: 'list'`.",
    "`KeyError` is for looking up a missing key; here the key itself is an invalid type."
   ],
   "type": "code"
  },
  {
   "id": "dicts-08",
   "topic": "dicts",
   "q": "What does this code print?",
   "code": "products = {'Laptop': 990, 'Tablet': 250}\nfor i, (name, price) in enumerate(products.items(), 1):\n    print(i, name, price)",
   "options": [
    "`0 Laptop 990` / `1 Tablet 250`",
    "`1 ('Laptop', 990)` / `2 ('Tablet', 250)`",
    "`1 Laptop 990` / `2 Tablet 250`",
    "`ValueError`"
   ],
   "answer": 2,
   "explain": "`enumerate(..., 1)` starts counting at 1, and the parentheses unpack each `(key, value)` tuple from `items()` into `name` and `price`.",
   "hint": "Consider what `items()` yields, how the parentheses unpack it, and where `enumerate` starts.",
   "why": [
    "The second argument `1` makes counting start at 1, not 0.",
    "The parentheses in `(name, price)` unpack each tuple, so the key and value print separately.",
    "Correct: counting starts at 1 and each `(key, value)` pair is unpacked into `name` and `price`.",
    "Each item from `enumerate()` has exactly two parts (index and pair), and each pair has two, so unpacking works."
   ],
   "type": "code"
  },
  {
   "id": "sets-01",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "nums = {1, 2, 2, 3, 3, 3}\nprint(len(nums))",
   "options": [
    "`6`",
    "`3`",
    "`1`",
    "`TypeError`"
   ],
   "answer": 1,
   "explain": "Sets don't allow duplicate values, so only 1, 2 and 3 are stored.",
   "hint": "Think about what a set does with repeated values.",
   "why": [
    "This counts every value written in the literal; a set stores each value only once.",
    "Correct: duplicates are dropped, leaving 1, 2 and 3, so the length is 3.",
    "The set keeps one copy of each distinct value, not just one value in total.",
    "Repeated values in a set literal are allowed; they're simply removed, no error."
   ],
   "type": "code"
  },
  {
   "id": "sets-02",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "empty = {}\nprint(type(empty).__name__)",
   "options": [
    "`set`",
    "`dict`",
    "`tuple`",
    "`NoneType`"
   ],
   "answer": 1,
   "explain": "Empty curly braces create an empty dictionary. Use `set()` to create an empty set.",
   "hint": "Think about which type empty curly braces create in Python.",
   "why": [
    "Empty braces don't make a set; you need `set()` for an empty set.",
    "Correct: `{}` creates an empty dictionary, so the type name is `dict`.",
    "Tuples use parentheses, so `{}` can't be a tuple.",
    "`{}` creates an object, not `None`."
   ],
   "type": "code"
  },
  {
   "id": "sets-03",
   "topic": "sets",
   "q": "What happens when this code runs?",
   "code": "colors = {'red', 'blue'}\ncolors.remove('green')",
   "options": [
    "Nothing happens",
    "`ValueError`",
    "`IndexError`",
    "`KeyError`"
   ],
   "answer": 3,
   "explain": "`remove()` raises `KeyError` when the element is not in the set. `discard()` would silently do nothing.",
   "hint": "Consider how `remove()` reacts to a missing element, and which error sets use for that.",
   "why": [
    "That's how `discard()` behaves; `remove()` raises an error for a missing element.",
    "`list.remove()` raises `ValueError`, but `set.remove()` raises `KeyError`.",
    "Sets have no positions, so `IndexError` doesn't apply.",
    "Correct: `set.remove()` raises `KeyError` when the element isn't in the set."
   ],
   "type": "code"
  },
  {
   "id": "sets-04",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b == {2, 3})",
   "options": [
    "`True`",
    "`False`",
    "`TypeError`",
    "`{2, 3}`"
   ],
   "answer": 0,
   "explain": "`&` is the intersection operator: it keeps only elements in both sets, which is `{2, 3}`.",
   "hint": "Work out what `a & b` produces first, then evaluate the comparison.",
   "why": [
    "Correct: `a & b` is `{2, 3}`, and comparing it with `{2, 3}` gives `True`.",
    "The intersection really is `{2, 3}`, so the equality holds.",
    "`&` is a valid set operator and comparing sets with `==` is allowed.",
    "`==` is evaluated last, so the printed result is a boolean rather than the set."
   ],
   "type": "code"
  },
  {
   "id": "sets-05",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a ^ b))",
   "options": [
    "`[2, 3]`",
    "`[1, 2, 3, 4]`",
    "`[1, 4]`",
    "`[1]`"
   ],
   "answer": 2,
   "explain": "`^` is symmetric difference: elements in either set but not both. 2 and 3 are shared, so 1 and 4 remain.",
   "hint": "Recall which elements `^` keeps: those in both sets, or those in only one.",
   "why": [
    "These are the shared elements, which is intersection (`&`), not symmetric difference.",
    "This is the union (`|`); `^` excludes elements found in both sets.",
    "Correct: `^` keeps elements in exactly one set, so 1 and 4 remain.",
    "This is `a - b`; symmetric difference also includes 4 from `b`."
   ],
   "type": "code"
  },
  {
   "id": "sets-06",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nprint(sorted(a - b))",
   "options": [
    "`[4]`",
    "`[1, 4]`",
    "`[2, 3]`",
    "`[1]`"
   ],
   "answer": 3,
   "explain": "`-` is difference: elements of the first set that aren't in the second. Order matters: `b - a` would be `{4}`.",
   "hint": "Think about which set's elements remain after subtracting the other, and that order matters.",
   "why": [
    "This is `b - a`; the order is reversed here.",
    "This is the symmetric difference `a ^ b`, which also includes elements only in `b`.",
    "These are the shared elements, which subtraction removes.",
    "Correct: `a - b` keeps the elements of `a` not in `b`, which is just 1."
   ],
   "type": "code"
  },
  {
   "id": "sets-07",
   "topic": "sets",
   "q": "What does this code print?",
   "code": "print({1, 2}.issubset({1, 2, 3}), {1, 2}.isdisjoint({3, 4}))",
   "options": [
    "`True True`",
    "`True False`",
    "`False True`",
    "`False False`"
   ],
   "answer": 0,
   "explain": "Every element of `{1, 2}` is in `{1, 2, 3}`, so it's a subset. `{1, 2}` and `{3, 4}` share no elements, so they are disjoint.",
   "hint": "Check two things separately: whether every element of `{1, 2}` is in the bigger set, and whether the other two sets share anything.",
   "why": [
    "Correct: `{1, 2}` is a subset of `{1, 2, 3}`, and `{1, 2}` and `{3, 4}` share no elements.",
    "`isdisjoint()` is `True` when sets share nothing, which is the case for `{1, 2}` and `{3, 4}`.",
    "Every element of `{1, 2}` is in `{1, 2, 3}`, so `issubset()` returns `True`.",
    "Both checks succeed here: the subset test holds and the sets are disjoint."
   ],
   "type": "code"
  },
  {
   "id": "sets-08",
   "topic": "sets",
   "q": "What happens when this code runs?",
   "code": "s = {1, 2}\ns.add([3, 4])",
   "options": [
    "`s` becomes `{1, 2, 3, 4}`",
    "`s` becomes `{1, 2, [3, 4]}`",
    "`TypeError`",
    "`KeyError`"
   ],
   "answer": 2,
   "explain": "Sets can only contain immutable (hashable) values. A list is mutable, so `add()` raises a `TypeError` saying the list is unhashable.",
   "hint": "Think about what kinds of values a set can store.",
   "why": [
    "`add()` adds a single element and doesn't unpack it; unpacking would be `update()`.",
    "A list can't be stored in a set at all because it's mutable and unhashable.",
    "Correct: lists are unhashable, so adding one to a set raises `TypeError`.",
    "`KeyError` is for removing a missing element; an invalid element type raises `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "modules-01",
   "topic": "modules",
   "q": "Which of these is NOT a module in Python's standard library?",
   "options": [
    "`math`",
    "`random`",
    "`numpy`",
    "`datetime`"
   ],
   "answer": 2,
   "explain": "`numpy` is a popular third-party package you must install separately. `math`, `random`, `re` and `datetime` ship with Python.",
   "hint": "Think about which of these you can import right after installing Python, without running `pip install` first.",
   "why": [
    "`math` ships with Python as part of the standard library, so it is not the odd one out.",
    "`random` is built into Python's standard library, so it doesn't need to be installed.",
    "Correct: `numpy` is a third-party package that you install separately with `pip install numpy`.",
    "`datetime` comes with every Python installation, so it is a standard library module."
   ],
   "type": "concept"
  },
  {
   "id": "modules-02",
   "topic": "modules",
   "q": "What does this code print?",
   "code": "import math as m\n\nprint(m.sqrt(36))",
   "options": [
    "`6.0`",
    "`6`",
    "`NameError: name 'math' is not defined`",
    "`36`"
   ],
   "answer": 0,
   "explain": "The alias `m` refers to the `math` module, and `math.sqrt()` always returns a float, so you get `6.0`, not `6`.",
   "hint": "Consider what name the alias creates and what type `sqrt()` always returns.",
   "why": [
    "Correct: `m` is just another name for `math`, and `math.sqrt()` always returns a float, so it prints `6.0`.",
    "It's tempting to expect an int because 36 is a perfect square, but `math.sqrt()` always returns a float.",
    "The code never uses the name `math`; it calls `m.sqrt()`, and `m` is defined by the alias.",
    "`sqrt()` returns the square root of its argument, not the argument itself."
   ],
   "type": "code"
  },
  {
   "id": "modules-03",
   "topic": "modules",
   "q": "What happens when you run this code?",
   "code": "from math import sqrt\n\nprint(math.sqrt(16))",
   "options": [
    "It prints `4.0`",
    "`NameError: name 'math' is not defined`",
    "It prints `4`",
    "`AttributeError: module has no attribute 'sqrt'`"
   ],
   "answer": 1,
   "explain": "`from math import sqrt` only brings the name `sqrt` into your file; the name `math` itself is never defined. Call `sqrt(16)` directly instead.",
   "hint": "Ask yourself which names `from math import sqrt` actually adds to your file.",
   "why": [
    "This assumes `from math import sqrt` also defines `math`, but it only brings in the name `sqrt`.",
    "Correct: only `sqrt` was imported, so the name `math` doesn't exist and Python raises `NameError`.",
    "The code never gets to compute anything because looking up `math` fails first; also `sqrt()` returns a float, not `4`.",
    "An `AttributeError` would need a module object to look in, but `math` isn't defined at all, so the lookup fails earlier with `NameError`."
   ],
   "type": "code"
  },
  {
   "id": "modules-04",
   "topic": "modules",
   "q": "What does this code print?",
   "code": "from math import sqrt as square_root\n\nprint(square_root(25))",
   "options": [
    "`5`",
    "`NameError: name 'square_root' is not defined`",
    "`5.0`",
    "`25.0`"
   ],
   "answer": 2,
   "explain": "`sqrt` is imported under the alias `square_root`, so `square_root(25)` returns the float `5.0`.",
   "hint": "An alias only changes the name you call; think about the type the original function returns.",
   "why": [
    "`sqrt()` always returns a float, even for perfect squares, so the result isn't the int `5`.",
    "`as square_root` defines exactly that name, so calling `square_root` works fine.",
    "Correct: `square_root` is `sqrt` under another name, and `sqrt(25)` returns the float `5.0`.",
    "The function returns the square root of 25, not 25 converted to a float."
   ],
   "type": "code"
  },
  {
   "id": "modules-05",
   "topic": "modules",
   "q": "Why is `from math import *` generally discouraged?",
   "options": [
    "It is slower than `import math` because every function is copied",
    "It only works for modules written in C",
    "It imports private names that start with an underscore",
    "It can cause namespace collisions and makes it hard to tell where a name came from"
   ],
   "answer": 3,
   "explain": "A star import dumps many names into your namespace, which can silently overwrite your own names. It does not copy code or import underscore-prefixed names.",
   "hint": "Think about what happens to the names already in your file when many unknown names are pulled in at once.",
   "why": [
    "Imports don't copy function code; both forms load the module once and just bind names, so speed isn't the issue.",
    "Star imports work with any module, whether it's written in Python or C.",
    "This is backwards: without `__all__`, a star import skips names that start with an underscore.",
    "Correct: it floods your namespace with names that can silently overwrite yours and hides where each name came from."
   ],
   "type": "concept"
  },
  {
   "id": "modules-06",
   "topic": "modules",
   "q": "You have two files in the same folder. What does `python main.py` print?",
   "code": "# greet.py\nprint(__name__)\n\n# main.py\nimport greet",
   "options": [
    "`greet`",
    "`__main__`",
    "`main`",
    "Nothing is printed"
   ],
   "answer": 0,
   "explain": "When `greet.py` is imported, its `__name__` is set to the module name `'greet'`. It would only be `'__main__'` if you ran `python greet.py` directly.",
   "hint": "Python sets `__name__` differently depending on whether a file is run directly or imported.",
   "why": [
    "Correct: when `greet.py` is imported, its `__name__` is the module name `'greet'`, so that is printed.",
    "`'__main__'` is the `__name__` of the file you run directly, which here is `main.py`, not `greet.py`.",
    "`main` is the name of the importing file, but `greet.py` prints its own `__name__`, not the importer's.",
    "Importing a module executes its top-level code, so the `print()` in `greet.py` does run."
   ],
   "type": "code"
  },
  {
   "id": "modules-07",
   "topic": "modules",
   "q": "What is the purpose of `if __name__ == '__main__':` in a script?",
   "options": [
    "It defines the program's main function, like in C or Java",
    "It runs the indented code only when the file is executed directly, not when it is imported",
    "It is required for Python to start executing the file",
    "It prevents other files from importing this module"
   ],
   "answer": 1,
   "explain": "Python sets `__name__` to `'__main__'` only for the file you run directly. The block is optional and doesn't stop imports; it just skips that code during an import.",
   "hint": "Consider what value `__name__` has when a file is run directly versus when it is imported.",
   "why": [
    "Python has no required main function; this is just an `if` statement checking a variable.",
    "Correct: the block runs only when the file is executed directly, because only then is `__name__` equal to `'__main__'`.",
    "Python runs a file's top-level code from top to bottom without it; the check is entirely optional.",
    "Other files can still import the module; the guarded code is simply skipped during the import."
   ],
   "type": "concept"
  },
  {
   "id": "modules-08",
   "topic": "modules",
   "q": "What does this code print?",
   "code": "from math import pi\n\npi = 3\nprint(pi)",
   "options": [
    "`3.141592653589793`",
    "`TypeError: cannot assign to imported name`",
    "`3`",
    "`NameError: name 'pi' is not defined`"
   ],
   "answer": 2,
   "explain": "Your assignment `pi = 3` overwrites the imported name: a naming conflict. Python doesn't protect imported names, which is one risk of `from ... import`.",
   "hint": "Think about whether an imported name behaves any differently from a variable you create yourself.",
   "why": [
    "This assumes imported names are protected, but `pi = 3` rebinds the name, so the original value is no longer used.",
    "Python has no such rule; an imported name is an ordinary variable that can be reassigned.",
    "Correct: the assignment `pi = 3` overwrites the imported `pi`, so `print(pi)` shows `3`.",
    "`pi` is defined twice (by the import and the assignment), so it certainly exists when printed."
   ],
   "type": "code"
  },
  {
   "id": "errors-01",
   "topic": "errors",
   "q": "Which error does this line raise?",
   "code": "print(\"Hello there\"",
   "options": [
    "`SyntaxError: '(' was never closed`",
    "`NameError: name 'print' is not defined`",
    "`TypeError: print() missing argument`",
    "`IndexError: string index out of range`"
   ],
   "answer": 0,
   "explain": "The closing parenthesis is missing, so the code breaks Python's grammar rules. Syntax errors are detected before any code runs.",
   "hint": "Look at whether this line follows Python's grammar before thinking about what it would do when run.",
   "why": [
    "Correct: the opening parenthesis is never closed, so Python reports a `SyntaxError` before running anything.",
    "`print` is a built-in function that is always defined, and the code never runs far enough to look it up.",
    "The problem is the missing `)`, not a missing argument, and a parse error is caught before any call happens.",
    "No indexing is happening on this line, so an `IndexError` makes no sense here."
   ],
   "type": "code"
  },
  {
   "id": "errors-02",
   "topic": "errors",
   "q": "What happens when you run this code (no other code in the file)?",
   "code": "print(username)",
   "options": [
    "It prints an empty line",
    "`NameError: name 'username' is not defined`",
    "It prints `None`",
    "`SyntaxError: invalid syntax`"
   ],
   "answer": 1,
   "explain": "Using a variable that was never assigned raises a `NameError`. Python does not default undefined names to `None` or an empty value.",
   "hint": "Think about what Python does when it looks up a variable that has never been assigned.",
   "why": [
    "Python doesn't treat unknown names as empty values; it raises an error instead of printing a blank line.",
    "Correct: `username` was never assigned, so looking it up raises `NameError`.",
    "Python does not default undefined variables to `None`; that only happens when you assign `None` explicitly.",
    "The line is grammatically valid Python; the problem only shows up at runtime when the name is looked up."
   ],
   "type": "code"
  },
  {
   "id": "errors-03",
   "topic": "errors",
   "q": "Which error does this code raise?",
   "code": "age = 25\nprint('Age: ' + age)",
   "options": [
    "`ValueError: invalid literal for int()`",
    "`NameError: name 'age' is not defined`",
    "`TypeError: can only concatenate str (not \"int\") to str`",
    "No error; it prints `Age: 25`"
   ],
   "answer": 2,
   "explain": "`+` can't combine a string and an integer. Convert first with `str(age)` or use an f-string: `f'Age: {age}'`.",
   "hint": "Think about what types `+` is willing to combine.",
   "why": [
    "No call to `int()` happens here, so there is no invalid literal to complain about.",
    "`age` is assigned on the first line, so the name is defined.",
    "Correct: `+` can't join a `str` and an `int`, so Python raises `TypeError` instead of converting automatically.",
    "Python doesn't automatically convert numbers to strings for `+`; you need `str(age)` or an f-string."
   ],
   "type": "code"
  },
  {
   "id": "errors-04",
   "topic": "errors",
   "q": "What happens when you run this code?",
   "code": "greet = 'hello world'\nprint(greet[11])",
   "options": [
    "It prints `d`",
    "It prints an empty string",
    "`TypeError: string indices must be integers`",
    "`IndexError: string index out of range`"
   ],
   "answer": 3,
   "explain": "`'hello world'` has 11 characters, so the last valid index is `10`. Index `11` is out of range.",
   "hint": "Count the characters and remember where indexing starts.",
   "why": [
    "`'d'` is at index `10`, the last valid index, because counting starts at `0`.",
    "Indexing past the end raises an error; only slicing out of range gives an empty string.",
    "`11` is an integer, so the index type is fine; the problem is its value.",
    "Correct: the string has 11 characters (indexes `0` to `10`), so index `11` is out of range."
   ],
   "type": "code"
  },
  {
   "id": "errors-05",
   "topic": "errors",
   "q": "Which error does this code raise?",
   "code": "'hello'.append('!')",
   "options": [
    "`TypeError: 'str' object is immutable`",
    "`AttributeError: 'str' object has no attribute 'append'`",
    "`NameError: name 'append' is not defined`",
    "No error; the result is `'hello!'`"
   ],
   "answer": 1,
   "explain": "Strings don't have an `append()` method (lists do). Calling a method that doesn't exist for that type raises `AttributeError`. Use `'hello' + '!'` instead.",
   "hint": "Consider which types actually have an `append()` method.",
   "why": [
    "Strings are immutable, but Python reports the missing method, not immutability, and the message is about an attribute.",
    "Correct: `str` objects have no `append` method, so looking it up raises `AttributeError`.",
    "`append` is accessed as an attribute of the string, not looked up as a standalone variable, so it isn't a `NameError`.",
    "`append()` is a list method; to add to a string you'd write `'hello' + '!'`."
   ],
   "type": "code"
  },
  {
   "id": "errors-06",
   "topic": "errors",
   "q": "Why insert `print()` statements while debugging?",
   "options": [
    "They automatically fix type errors",
    "They pause the program so you can step through it",
    "They show the values of variables and how the code flows at different points",
    "They speed up the program"
   ],
   "answer": 2,
   "explain": "Print debugging gives a quick view of values and execution order. Pausing and stepping is what a debugger like `pdb` does, not `print()`.",
   "hint": "Think about what you can learn by seeing output at specific moments while the program runs.",
   "why": [
    "`print()` only displays information; you still have to fix the error yourself.",
    "Pausing and stepping through code is what a debugger like `pdb` does; `print()` doesn't stop execution.",
    "Correct: printed output shows variable values and which parts of the code ran, and in what order.",
    "Extra output adds a little work, so `print()` never makes a program faster."
   ],
   "type": "concept"
  },
  {
   "id": "errors-07",
   "topic": "errors",
   "q": "What does calling `pdb.set_trace()` in your code do?",
   "options": [
    "Pauses execution at that line and opens an interactive debugger to inspect variables and step through code",
    "Prints a full traceback and exits the program",
    "Writes all variable values to a log file",
    "Catches every exception raised after that line"
   ],
   "answer": 0,
   "explain": "`set_trace()` sets a breakpoint: execution stops and you get a `(Pdb)` prompt. `pdb` is part of the standard library, so it is always available.",
   "hint": "Think of it as placing a breakpoint directly in your code.",
   "why": [
    "Correct: it pauses at that line and opens a `(Pdb)` prompt where you can inspect variables and step through code.",
    "Printing a traceback and exiting is what an uncaught exception does, not `set_trace()`.",
    "`pdb` is interactive; it doesn't write variable values to a log file.",
    "Catching exceptions requires `try`/`except`; `set_trace()` doesn't handle any errors."
   ],
   "type": "concept"
  },
  {
   "id": "errors-08",
   "topic": "errors",
   "q": "In an IDE such as VS Code or PyCharm, what is a breakpoint?",
   "options": [
    "A line where Python raises an error on purpose",
    "A comment that disables a line of code",
    "The last line of the program",
    "A marker on a line where execution pauses so you can inspect variables and step through"
   ],
   "answer": 3,
   "explain": "Breakpoints let IDE debuggers pause at a chosen line; you can then step line by line and inspect variables. They don't change or disable your code.",
   "hint": "Think about how a debugger knows where to stop so you can look around.",
   "why": [
    "A breakpoint doesn't raise anything; to cause an error on purpose you use `raise`.",
    "Commenting out code disables it, but a breakpoint leaves the code unchanged and still runs it.",
    "You can place a breakpoint on any line, not just the last one.",
    "Correct: a breakpoint marks a line where the debugger pauses so you can inspect variables and step through."
   ],
   "type": "concept"
  },
  {
   "id": "exceptions-01",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('A')\nelse:\n    print('B')\nfinally:\n    print('C')",
   "options": [
    "`A` then `C`",
    "`A` then `B` then `C`",
    "Only `A`",
    "Only `C`"
   ],
   "answer": 0,
   "explain": "The division raises `ZeroDivisionError`, so `except` prints `A`. `else` only runs when no exception occurred, and `finally` always runs, printing `C`.",
   "hint": "Work out whether an exception happens, then recall which blocks run in that case.",
   "why": [
    "Correct: the division fails so `except` prints `A`, `else` is skipped, and `finally` always prints `C`.",
    "This assumes `else` always runs, but `else` only runs when no exception occurred.",
    "This forgets that `finally` runs no matter what happened in the `try`.",
    "The `ZeroDivisionError` is caught by the matching `except`, so `A` is printed before `C`."
   ],
   "type": "code"
  },
  {
   "id": "exceptions-02",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    result = 100 / 4\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nelse:\n    print(f'Result is {result}')\nfinally:\n    print('Done')",
   "options": [
    "`Result is 25.0` only",
    "`Result is 25.0` then `Done`",
    "`Done` only",
    "`Result is 25` then `Done`"
   ],
   "answer": 1,
   "explain": "No exception occurs, so `else` runs, then `finally` always runs. `/` always returns a float, so the result is `25.0`.",
   "hint": "Decide whether the division fails, and remember what type `/` returns.",
   "why": [
    "This forgets that `finally` always runs, so `Done` is printed too.",
    "Correct: no exception occurs so `else` prints `Result is 25.0`, then `finally` prints `Done`.",
    "`else` runs whenever the `try` block finishes without an exception, which is the case here.",
    "`/` always returns a float in Python 3, so the value is `25.0`, not `25`."
   ],
   "type": "code"
  },
  {
   "id": "exceptions-03",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    value = int('abc')\nexcept ValueError as e:\n    print(type(e).__name__)",
   "options": [
    "`TypeError`",
    "`e`",
    "`ValueError`",
    "`Exception`"
   ],
   "answer": 2,
   "explain": "`int('abc')` raises a `ValueError` (right type, invalid value). `as e` binds the exception object, and `type(e).__name__` is its class name.",
   "hint": "Consider whether the problem is the argument's type or its value, and what `type(e).__name__` gives you.",
   "why": [
    "`'abc'` is a string, which `int()` accepts as a type; it's the content that's invalid, so it's not a `TypeError`.",
    "`e` is a variable name for the exception object; the code prints its class name, not the variable's name.",
    "Correct: `int('abc')` raises `ValueError`, and `type(e).__name__` is that class's name.",
    "`Exception` is a parent class, but `type(e)` returns the exact class of the object, which is more specific."
   ],
   "type": "code"
  },
  {
   "id": "exceptions-04",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    nums = [1, 2, 3]\n    print(nums[5])\nexcept ZeroDivisionError:\n    print('zero')\nexcept IndexError:\n    print('index')",
   "options": [
    "`zero`",
    "`zero` then `index`",
    "Nothing; the program crashes",
    "`index`"
   ],
   "answer": 3,
   "explain": "Python checks `except` blocks in order and runs the first one that matches. `nums[5]` raises `IndexError`, which skips the `ZeroDivisionError` block.",
   "hint": "Identify which exception the `try` block raises, then see which `except` matches it.",
   "why": [
    "No division happens, so no `ZeroDivisionError` is raised and that block is skipped.",
    "Only the first matching `except` runs, and the `ZeroDivisionError` block doesn't match at all.",
    "The `IndexError` is caught by the second `except` block, so the program doesn't crash.",
    "Correct: `nums[5]` raises `IndexError`, which skips the first block and matches the second, printing `index`."
   ],
   "type": "code"
  },
  {
   "id": "exceptions-05",
   "topic": "exceptions",
   "q": "What is the correct way to define a custom exception?",
   "options": [
    "`def InvalidAgeError(Exception): pass`",
    "`class InvalidAgeError(Exception): pass`",
    "`exception InvalidAgeError: pass`",
    "`InvalidAgeError = raise Exception`"
   ],
   "answer": 1,
   "explain": "Custom exceptions are classes that inherit from `Exception`. You can then `raise InvalidAgeError('...')` and catch it with `except InvalidAgeError:`.",
   "hint": "Think about what kind of thing `Exception` is and how you build on it.",
   "why": [
    "`def` creates a function, and you can't raise a function or catch it with `except`.",
    "Correct: a custom exception is a class that inherits from `Exception`.",
    "`exception` is not a Python keyword, so this is a syntax error.",
    "`raise` is a statement, not a value, so it can't appear on the right side of `=`."
   ],
   "type": "concept"
  },
  {
   "id": "exceptions-06",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "def check(age):\n    if age < 0:\n        raise ValueError('Age cannot be negative')\n    return age\n\ntry:\n    check(-5)\nexcept ValueError as e:\n    print(e)",
   "options": [
    "`ValueError`",
    "`-5`",
    "`Age cannot be negative`",
    "`ValueError: Age cannot be negative`"
   ],
   "answer": 2,
   "explain": "Printing the exception object `e` shows its message only, without the class name. The full `ValueError: ...` form appears in an uncaught traceback.",
   "hint": "Think about what you see when you convert an exception object to text with `print()`.",
   "why": [
    "Printing `e` shows its message, not its class name; you'd need `type(e).__name__` for that.",
    "The argument `-5` triggers the error, but it isn't part of the message that was passed to `ValueError`.",
    "Correct: `print(e)` shows just the message passed to `ValueError`.",
    "The `ClassName: message` format appears in an uncaught traceback, not when you print the exception object."
   ],
   "type": "code"
  },
  {
   "id": "exceptions-07",
   "topic": "exceptions",
   "q": "What does `raise ValueError('Config missing') from None` do inside an `except` block?",
   "options": [
    "Raises the new error and hides the original exception from the traceback",
    "Raises the new error with the value `None`",
    "Cancels the exception so nothing is raised",
    "Re-raises the original exception unchanged"
   ],
   "answer": 0,
   "explain": "`from None` suppresses exception chaining, so the traceback doesn't show the original error. `from e` does the opposite: it explicitly links the new error to `e`.",
   "hint": "Think about exception chaining and what `from` controls in a traceback.",
   "why": [
    "Correct: `from None` raises the new error and suppresses the chained original exception in the traceback.",
    "`from None` doesn't set the error's value; the message is still `'Config missing'`.",
    "The `raise` still happens; `from None` only changes what the traceback shows about the earlier error.",
    "Re-raising the original unchanged is done with a bare `raise`, not by raising a new `ValueError`."
   ],
   "type": "concept"
  },
  {
   "id": "exceptions-08",
   "topic": "exceptions",
   "q": "When does a `finally` block run?",
   "options": [
    "Only when an exception was raised",
    "Only when no exception was raised",
    "Only when the exception was not caught by an `except` block",
    "Always, whether or not an exception occurred"
   ],
   "answer": 3,
   "explain": "`finally` always runs, which makes it ideal for cleanup such as closing files. The block that runs only on success is `else`.",
   "hint": "Think about why `finally` is used for cleanup like closing files.",
   "why": [
    "`except` is the block that handles raised exceptions; `finally` also runs when nothing went wrong.",
    "Running only on success describes `else`, not `finally`.",
    "`finally` runs whether the exception was caught, uncaught, or never raised.",
    "Correct: `finally` always runs, whether or not an exception occurred."
   ],
   "type": "concept"
  },
  {
   "id": "classes-01",
   "topic": "classes",
   "q": "What is a class in Python?",
   "options": [
    "A blueprint that defines the attributes and methods its objects will have",
    "A specific object holding actual data",
    "A built-in data type like `list` or `dict` only",
    "A function that must return an object"
   ],
   "answer": 0,
   "explain": "A class is a reusable template; an object (instance) is a concrete thing created from it with actual data.",
   "hint": "Think about the difference between a template and the things made from it.",
   "why": [
    "Correct: a class is a blueprint that defines the attributes and methods its objects will have.",
    "That describes an object (instance) created from a class, not the class itself.",
    "`list` and `dict` are classes, but you can define your own classes with `class` too.",
    "A class is defined with `class`, not `def`; calling it creates an instance, but it isn't an ordinary function."
   ],
   "type": "concept"
  },
  {
   "id": "classes-02",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        print(f'{self.name.upper()} says woof woof!')\n\ndog = Dog('Jack', 3)\ndog.bark()",
   "options": [
    "`Jack says woof woof!`",
    "`JACK says woof woof!`",
    "`TypeError: bark() missing 1 required positional argument: 'self'`",
    "`DOG says woof woof!`"
   ],
   "answer": 1,
   "explain": "Python passes `dog` automatically as `self`, so `self.name` is `'Jack'`, and `.upper()` makes it `JACK`.",
   "hint": "Follow what `self.name` holds and what `.upper()` does to it.",
   "why": [
    "This misses the `.upper()` call, which converts the name to uppercase.",
    "Correct: `self` is `dog`, `self.name` is `'Jack'`, and `.upper()` turns it into `JACK`.",
    "Python passes the instance as `self` automatically when you call `dog.bark()`, so no argument is missing.",
    "`self.name` is the instance's name `'Jack'`, not the class name `Dog`."
   ],
   "type": "code"
  },
  {
   "id": "classes-03",
   "topic": "classes",
   "q": "What does `self` refer to inside a method?",
   "options": [
    "The class itself",
    "The parent class",
    "The specific instance the method was called on",
    "The module the class is defined in"
   ],
   "answer": 2,
   "explain": "`self` is the instance. In `dog.bark()`, Python effectively calls `Dog.bark(dog)`, so `self` is `dog`.",
   "hint": "Think about what Python passes in automatically when you call `dog.bark()`.",
   "why": [
    "`self` is the object the method was called on; the class itself is what `cls` refers to in a class method.",
    "The parent class is reached with `super()`, not `self`.",
    "Correct: `self` is the specific instance, so `dog.bark()` is effectively `Dog.bark(dog)`.",
    "`self` has nothing to do with modules; it's a reference to the instance."
   ],
   "type": "concept"
  },
  {
   "id": "classes-04",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Dog:\n    species = 'Canis familiaris'\n\n    def __init__(self, name):\n        self.name = name\n\na = Dog('Rex')\nb = Dog('Fido')\nDog.species = 'Wolf'\nprint(a.species, b.name)",
   "options": [
    "`Canis familiaris Fido`",
    "`Wolf Rex`",
    "`AttributeError: 'Dog' object has no attribute 'species'`",
    "`Wolf Fido`"
   ],
   "answer": 3,
   "explain": "`species` is a class attribute, shared by all instances, so changing `Dog.species` affects `a` too. `name` is an instance attribute, so `b.name` is `'Fido'`.",
   "hint": "Separate the attributes shared by all instances from the ones each instance stores itself.",
   "why": [
    "This assumes each instance keeps its own copy of `species`, but class attributes are shared, so the change is visible.",
    "`b.name` is `'Fido'`; `'Rex'` belongs to `a`.",
    "Instances can read class attributes through attribute lookup, so `a.species` exists.",
    "Correct: changing `Dog.species` affects every instance, so `a.species` is `'Wolf'`, and `b.name` is `'Fido'`."
   ],
   "type": "code"
  },
  {
   "id": "classes-05",
   "topic": "classes",
   "q": "Which dunder method does Python call when you run `len(obj)`?",
   "options": [
    "`obj.__len__()`",
    "`obj.__size__()`",
    "`obj.__length__()`",
    "`obj.__count__()`"
   ],
   "answer": 0,
   "explain": "Built-in operations call dunder methods behind the scenes: `len()` calls `__len__`. The other names aren't special to Python.",
   "hint": "Built-in functions call special methods whose names usually mirror the function's name.",
   "why": [
    "Correct: `len(obj)` calls `obj.__len__()` behind the scenes.",
    "`__size__` isn't a special method name in Python, even though 'size' sounds like length.",
    "`__length__` sounds right, but Python uses the shorter name matching `len()`.",
    "`__count__` isn't special; `count()` is an ordinary method on lists and strings."
   ],
   "type": "concept"
  },
  {
   "id": "classes-06",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Book:\n    def __init__(self, title):\n        self.title = title\n\n    def __str__(self):\n        return f'Book: {self.title}'\n\nprint(Book('Dune'))",
   "options": [
    "`<__main__.Book object at 0x...>`",
    "`Book: Dune`",
    "`Dune`",
    "`None`"
   ],
   "answer": 1,
   "explain": "`print()` converts the object to text by calling `__str__`, which returns `'Book: Dune'`. Without `__str__` you'd see the default `<__main__.Book object at ...>`.",
   "hint": "Think about which special method `print()` uses to turn an object into text.",
   "why": [
    "That default representation only appears when the class has no `__str__` (or `__repr__`).",
    "Correct: `print()` calls `__str__`, which returns `'Book: Dune'`.",
    "This ignores the `'Book: '` prefix that `__str__` adds before the title.",
    "`Book('Dune')` returns a `Book` instance, not `None`, and printing it shows the string from `__str__`."
   ],
   "type": "code"
  },
  {
   "id": "classes-07",
   "topic": "classes",
   "q": "When `a` and `b` are objects of your own class, what does `a + b` call?",
   "options": [
    "`b.__add__(a)`",
    "`a.__plus__(b)`",
    "`a.__add__(b)`",
    "`a.__sum__(b)`"
   ],
   "answer": 2,
   "explain": "The `+` operator calls `__add__` on the left operand with the right operand as the argument. `__add__` is also what `+` uses for string concatenation.",
   "hint": "Consider which operand Python asks first and the special method name for addition.",
   "why": [
    "Python first calls the method on the left operand; `b.__radd__(a)` is only a fallback, and it's `__radd__`, not `__add__`.",
    "`__plus__` isn't a special method; Python uses `__add__` for `+`.",
    "Correct: `a + b` calls `a.__add__(b)`, using the left operand's method with the right operand as the argument.",
    "`__sum__` isn't a special method; `sum()` is a built-in that uses `+` internally."
   ],
   "type": "concept"
  },
  {
   "id": "classes-08",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Point:\n    def __init__(self, x):\n        self.x = x\n\nprint(Point(1) == Point(1))",
   "options": [
    "`True`",
    "`TypeError: '==' not supported`",
    "`1`",
    "`False`"
   ],
   "answer": 3,
   "explain": "Without `__eq__`, `==` falls back to identity: two separate objects are never equal, even with the same data. Define `__eq__` to compare by value.",
   "hint": "Think about what `==` compares when a class doesn't define how its objects are equal.",
   "why": [
    "This assumes `==` compares attribute values, but without `__eq__` it compares identity.",
    "Every object supports `==` because the default `__eq__` is inherited from `object`.",
    "`==` returns a boolean, not the value of an attribute.",
    "Correct: without `__eq__`, `==` checks identity, and two separately created objects are different objects."
   ],
   "type": "code"
  },
  {
   "id": "oop-01",
   "topic": "oop",
   "q": "What are the four key principles of object-oriented programming?",
   "options": [
    "Encapsulation, inheritance, polymorphism, abstraction",
    "Encapsulation, iteration, recursion, abstraction",
    "Inheritance, compilation, polymorphism, modularity",
    "Classes, objects, methods, attributes"
   ],
   "answer": 0,
   "explain": "The four OOP principles are encapsulation, inheritance, polymorphism and abstraction. Classes and objects are the building blocks, not the principles.",
   "hint": "Look for the ideas about how objects hide details, share behavior, and take many forms.",
   "why": [
    "Correct: encapsulation, inheritance, polymorphism and abstraction are the four OOP principles.",
    "Iteration and recursion are general programming techniques, not OOP principles.",
    "Compilation and modularity aren't among the four; compilation is about running code, not designing objects.",
    "These are the building blocks of OOP, not the principles that guide how you use them."
   ],
   "type": "concept"
  },
  {
   "id": "oop-02",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Wallet:\n    def __init__(self):\n        self.__balance = 100\n\nw = Wallet()\nprint(w._Wallet__balance)",
   "options": [
    "`AttributeError: 'Wallet' object has no attribute '_Wallet__balance'`",
    "`100`",
    "`None`",
    "`NameError: name '_Wallet__balance' is not defined`"
   ],
   "answer": 1,
   "explain": "Name mangling renames `__balance` to `_Wallet__balance`. The attribute still exists under that name, so double underscores don't make it truly private. **Review note:** the freeCodeCamp review says a double underscore \"effectively prevents\" outside access. That holds for the plain name (`w.__balance` raises `AttributeError`), but the mangled name `_Wallet__balance` still works.",
   "hint": "Think about what name mangling does to an attribute that starts with two underscores.",
   "why": [
    "Name mangling stores `__balance` exactly as `_Wallet__balance`, so that attribute does exist.",
    "Correct: `__balance` is mangled to `_Wallet__balance`, and accessing that name returns `100`.",
    "The attribute was set to `100`, and Python never returns `None` for an existing attribute.",
    "This is an attribute lookup on `w`, not a variable lookup, so it can't raise `NameError`."
   ],
   "type": "code"
  },
  {
   "id": "oop-03",
   "topic": "oop",
   "q": "What happens when you run this code?",
   "code": "class Wallet:\n    def __init__(self):\n        self.__balance = 100\n\nw = Wallet()\nprint(w.__balance)",
   "options": [
    "It prints `100`",
    "It prints `None`",
    "`AttributeError: 'Wallet' object has no attribute '__balance'`",
    "`SyntaxError: invalid attribute name`"
   ],
   "answer": 2,
   "explain": "Inside the class, `self.__balance` was stored as `_Wallet__balance` (name mangling), so no attribute called `__balance` exists from the outside.",
   "hint": "Remember that a double leading underscore inside a class changes the stored attribute name.",
   "why": [
    "Name mangling stored the value as `_Wallet__balance`, so `w.__balance` from outside doesn't find it.",
    "Python raises an error for a missing attribute rather than returning `None`.",
    "Correct: the attribute was stored as `_Wallet__balance`, so no attribute named `__balance` exists outside the class.",
    "`__balance` is a valid identifier; the error happens at runtime, not when parsing."
   ],
   "type": "code"
  },
  {
   "id": "oop-04",
   "topic": "oop",
   "q": "What does a single leading underscore, as in `self._balance`, mean?",
   "options": [
    "Python blocks all access to it from outside the class",
    "Python renames it to `_ClassName_balance`",
    "It is a class attribute instead of an instance attribute",
    "It's a convention meaning 'for internal use'; Python doesn't enforce it"
   ],
   "answer": 3,
   "explain": "A single underscore is only a signal to other developers; `obj._balance` still works. A double underscore triggers name mangling.",
   "hint": "Ask whether Python enforces anything for one underscore, or whether it's a message to developers.",
   "why": [
    "Python doesn't block access for a single underscore; `obj._balance` works fine.",
    "Renaming (name mangling) only happens with a double leading underscore, and the result is `_ClassName__balance`.",
    "It's set on `self`, so it's an instance attribute; the underscore doesn't change where it lives.",
    "Correct: a single underscore is a convention meaning 'internal use', and Python doesn't enforce it."
   ],
   "type": "concept"
  },
  {
   "id": "oop-05",
   "topic": "oop",
   "q": "What happens on the last line?",
   "code": "class Circle:\n    def __init__(self, radius):\n        self.radius = radius\n\n    @property\n    def radius(self):\n        return self._radius\n\n    @radius.setter\n    def radius(self, value):\n        if value <= 0:\n            raise ValueError('Radius must be positive')\n        self._radius = value\n\nc = Circle(5)\nc.radius = -1",
   "options": [
    "`ValueError: Radius must be positive` is raised",
    "`c.radius` becomes `-1`",
    "`AttributeError` saying the property has no setter",
    "`RecursionError` is raised"
   ],
   "answer": 0,
   "explain": "Assigning to a property calls its setter, which validates the value and raises `ValueError`. Properties allow this extra logic while keeping plain attribute syntax.",
   "hint": "Think about what Python actually runs when you assign to a property.",
   "why": [
    "Correct: `c.radius = -1` calls the setter, which sees a value `<= 0` and raises `ValueError`.",
    "This assumes the assignment stores the value directly, but it goes through the setter's validation.",
    "That error occurs for a property without a setter, but this property defines one with `@radius.setter`.",
    "The setter stores into `self._radius`, not `self.radius`, so it doesn't call itself."
   ],
   "type": "code"
  },
  {
   "id": "oop-06",
   "topic": "oop",
   "q": "In a property setter for `radius`, what happens if you write `self.radius = value` instead of `self._radius = value`?",
   "options": [
    "It works the same way",
    "`RecursionError`: the setter keeps calling itself",
    "The value is silently ignored",
    "`AttributeError` saying the property has no setter"
   ],
   "answer": 1,
   "explain": "`self.radius = ...` calls the setter again, which calls itself again, and so on until Python raises `RecursionError`. Store the value in a separate internal attribute like `_radius`.",
   "hint": "Think about what `self.radius = ...` triggers when `radius` is a property.",
   "why": [
    "Assigning to `self.radius` calls the setter instead of storing a value, so it doesn't behave the same.",
    "Correct: `self.radius = value` calls the setter again, which calls itself endlessly until `RecursionError`.",
    "Python doesn't silently ignore it; the assignment keeps re-triggering the setter.",
    "The property does have a setter, so the 'no setter' `AttributeError` doesn't apply."
   ],
   "type": "concept"
  },
  {
   "id": "oop-07",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog('Rex', 'Beagle')\nprint(d.name, d.breed)",
   "options": [
    "`AttributeError: 'Dog' object has no attribute 'name'`",
    "`None Beagle`",
    "`Rex Beagle`",
    "`TypeError: __init__() missing 1 required positional argument`"
   ],
   "answer": 2,
   "explain": "`super().__init__(name)` runs the parent's `__init__`, which sets `self.name`. Without that call, `name` would never be set.",
   "hint": "Trace what `super().__init__(name)` runs before `self.breed` is set.",
   "why": [
    "This would happen without the `super()` call, but here the parent's `__init__` sets `self.name`.",
    "`name` is set to `'Rex'` by the parent's `__init__`, not left as `None`.",
    "Correct: `super().__init__(name)` sets `self.name`, and `self.breed` is set next, so it prints `Rex Beagle`.",
    "`super().__init__(name)` passes exactly the one argument `Animal.__init__` needs, so nothing is missing."
   ],
   "type": "code"
  },
  {
   "id": "oop-08",
   "topic": "oop",
   "q": "What happens on the last line?",
   "code": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\ns = Shape()",
   "options": [
    "A `Shape` object is created and `area()` returns `None`",
    "`NotImplementedError`",
    "`AttributeError: 'Shape' has no attribute 'area'`",
    "`TypeError`: you can't instantiate the abstract class `Shape`"
   ],
   "answer": 3,
   "explain": "A class inheriting from `ABC` with an `@abstractmethod` can't be instantiated. Only a subclass that implements `area()` can be.",
   "hint": "Think about what `@abstractmethod` means for a class that inherits from `ABC`.",
   "why": [
    "Python refuses to create an object from a class that still has abstract methods, so no `Shape` is created.",
    "`NotImplementedError` is something you raise yourself inside a method; Python's check here raises a different error.",
    "`area` is defined on the class, so it isn't missing; the problem is that it's abstract.",
    "Correct: a class with an unimplemented `@abstractmethod` is abstract, and instantiating it raises `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "big-o-01",
   "topic": "big-o",
   "q": "What does Big O notation describe?",
   "options": [
    "How an algorithm's resource usage grows in the worst case as input size increases",
    "The exact number of seconds an algorithm takes to run",
    "The best-case running time of an algorithm",
    "How many lines of code an algorithm needs"
   ],
   "answer": 0,
   "explain": "Big O describes worst-case growth rate relative to input size. It ignores exact timings and constant factors, so it is not a measure of seconds or best-case speed.",
   "hint": "Think about what happens to an algorithm's cost as the input keeps getting bigger, not about any single run.",
   "why": [
    "Right: Big O captures the growth rate of time or memory as input size increases, usually as a worst-case upper bound.",
    "Exact seconds depend on hardware and language, which Big O deliberately ignores in favor of growth rate.",
    "Best case is described by other notation; Big O is conventionally used for the worst-case upper bound.",
    "Code length has nothing to do with complexity; a short function can be slow and a long one fast."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-02",
   "topic": "big-o",
   "q": "What is the time complexity of this function?",
   "code": "def has_duplicate(items):\n    for i in range(len(items)):\n        for j in range(len(items)):\n            if i != j and items[i] == items[j]:\n                return True\n    return False",
   "options": [
    "O(1)",
    "O(n)",
    "O(n\u00b2)",
    "O(log n)"
   ],
   "answer": 2,
   "explain": "For each of the n items, the inner loop runs n times, giving n \u00d7 n = n\u00b2 steps. Nested loops over the same input are the classic quadratic pattern.",
   "hint": "Count how many times the inner comparison can run for a list of length n when no duplicate exists.",
   "why": [
    "O(1) would mean constant work regardless of input, but the loops run more times as the list grows.",
    "O(n) fits a single loop, but here a second loop over all n items is nested inside the first.",
    "Right: the inner loop runs n times for each of the n outer iterations, giving n \u00d7 n comparisons in the worst case.",
    "O(log n) requires shrinking the problem by a fraction each step, which nothing in these loops does."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-03",
   "topic": "big-o",
   "q": "An algorithm takes `3n\u00b2 + 5n + 20` steps. What is its Big O?",
   "options": [
    "O(3n\u00b2)",
    "O(n\u00b2 + n)",
    "O(n\u00b2)",
    "O(n)"
   ],
   "answer": 2,
   "explain": "Big O drops constant factors and lower-order terms, leaving only the fastest-growing term: n\u00b2. Writing O(3n\u00b2) keeps a constant that Big O ignores.",
   "hint": "Big O keeps only the part of the expression that dominates as n becomes very large.",
   "why": [
    "Keeping the 3 is the mistake: Big O drops constant factors because they don't change the growth rate.",
    "The `5n` term grows far slower than `n\u00b2`, so lower-order terms are dropped too.",
    "Right: after dropping the constant factor 3 and the lower-order terms `5n` and `20`, only `n\u00b2` remains.",
    "The `n\u00b2` term dominates for large n, so the growth is quadratic, not linear."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-04",
   "topic": "big-o",
   "q": "What is the time complexity of this function?",
   "code": "def count_halvings(n):\n    steps = 0\n    while n > 1:\n        n = n // 2\n        steps += 1\n    return steps",
   "options": [
    "O(n)",
    "O(log n)",
    "O(n log n)",
    "O(1)"
   ],
   "answer": 1,
   "explain": "The value of `n` is halved on every iteration, so the loop runs about log\u2082(n) times. Repeatedly reducing the problem by a fraction is the signature of O(log n).",
   "hint": "Look at how `n` changes on each pass of the loop rather than how much it decreases by one.",
   "why": [
    "O(n) would require decreasing `n` by a constant each step, but here it is divided by 2.",
    "Right: halving `n` each iteration means the loop runs about log\u2082(n) times.",
    "O(n log n) needs log n work repeated n times, but each iteration here does only constant work.",
    "The loop count depends on `n` (larger n means more halvings), so it is not constant."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-05",
   "topic": "big-o",
   "q": "Which time complexity is typical for efficient sorting algorithms like merge sort and quick sort?",
   "options": [
    "O(n)",
    "O(n\u00b2)",
    "O(log n)",
    "O(n log n)"
   ],
   "answer": 3,
   "explain": "Efficient comparison sorts run in O(n log n). O(n\u00b2) is typical of simpler sorts that use nested loops.",
   "hint": "Efficient comparison sorts divide the data repeatedly and do linear work at each level.",
   "why": [
    "O(n) is too fast for a general comparison sort; you cannot sort arbitrary data by just reading it once.",
    "O(n\u00b2) is typical of simpler nested-loop sorts like bubble sort, not merge sort or quick sort's average case.",
    "O(log n) is less than the time needed to even look at every element, so no sort can be that fast.",
    "Right: these sorts split the data about log n times and do O(n) work per level, giving O(n log n)."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-06",
   "topic": "big-o",
   "q": "What is the space complexity of this function?",
   "code": "def doubled(nums):\n    result = []\n    for n in nums:\n        result.append(n * 2)\n    return result",
   "options": [
    "O(1)",
    "O(n)",
    "O(n\u00b2)",
    "O(log n)"
   ],
   "answer": 1,
   "explain": "It builds a new list with one element per input item, so memory grows linearly with n. The loop variable alone would be O(1), but the `result` list is O(n).",
   "hint": "Consider how much new memory the function allocates relative to the size of `nums`.",
   "why": [
    "This would be true if only the loop variable were stored, but the `result` list grows with the input.",
    "Right: `result` gets one element per input item, so the extra memory grows linearly with n.",
    "O(n\u00b2) would need something like a list of lists of size n; here each item adds just one element.",
    "Memory is not halved or reduced at each step; it grows by one element per input item."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-07",
   "topic": "big-o",
   "q": "Which of these is an edge case for a function that returns the largest number in a list?",
   "options": [
    "A list of 10 random positive integers",
    "An empty list",
    "A list sorted in ascending order with 5 items",
    "A list of 3 different integers"
   ],
   "answer": 1,
   "explain": "Edge cases are valid inputs at the boundaries of what the algorithm must handle; an empty list has no largest value and often breaks naive code. The other inputs are ordinary cases.",
   "hint": "Which input sits at the boundary of what the function must handle and could break naive code?",
   "why": [
    "Ten random positive integers is a typical, ordinary input, not a boundary case.",
    "Right: an empty list has no largest value, so it tests a boundary that naive code often fails on.",
    "A sorted list of five items is still a normal input that any max function handles routinely.",
    "Three different integers is an ordinary small input, not an extreme or boundary condition."
   ],
   "type": "concept"
  },
  {
   "id": "big-o-08",
   "topic": "big-o",
   "q": "What is pseudocode?",
   "options": [
    "A high-level, language-independent description of an algorithm mixing plain language with constructs like IF, FOR and WHILE",
    "Python code that has not been tested yet",
    "Compiled machine code generated from Python",
    "Code with intentional bugs used for debugging practice"
   ],
   "answer": 0,
   "explain": "Pseudocode describes the logic of an algorithm without being tied to any programming language. It is not runnable Python, tested or not.",
   "hint": "Think of a way to plan an algorithm's logic before choosing any specific programming language.",
   "why": [
    "Right: pseudocode describes an algorithm's steps in plain language mixed with control constructs, independent of any language.",
    "Pseudocode is not runnable Python at all, so whether it has been tested is beside the point.",
    "Compiled machine code is the opposite of pseudocode: it is low-level and meant for the computer, not humans.",
    "Code with planted bugs is a debugging exercise; pseudocode is about expressing logic clearly."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-01",
   "topic": "linear-ds",
   "q": "What is printed?",
   "code": "stack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\nprint(stack.pop())",
   "options": [
    "`3`",
    "`1`",
    "`[1, 2]`",
    "`2`"
   ],
   "answer": 0,
   "explain": "A list used as a stack is LIFO: `pop()` removes the last item pushed with `append()`, which is 3.",
   "hint": "A list used with `append()` and `pop()` behaves like a stack of plates.",
   "why": [
    "Right: `pop()` with no argument removes and returns the last appended item, which is 3 (LIFO).",
    "Returning 1 would be FIFO queue behavior; `pop()` takes from the end, not the front.",
    "`pop()` returns the removed item, not the remaining list, even though `[1, 2]` is what's left in `stack`.",
    "2 is the item below the top; `pop()` removes only the most recently added item."
   ],
   "type": "code"
  },
  {
   "id": "linear-ds-02",
   "topic": "linear-ds",
   "q": "What is printed?",
   "code": "from collections import deque\n\nqueue = deque()\nqueue.append('a')\nqueue.append('b')\nqueue.append('c')\nprint(queue.popleft())",
   "options": [
    "`c`",
    "`a`",
    "`b`",
    "`deque(['b', 'c'])`"
   ],
   "answer": 1,
   "explain": "A queue is FIFO: `popleft()` removes the element that was added first, `'a'`. `pop()` would have removed `'c'` from the right end.",
   "hint": "A queue serves items in the same order they arrived.",
   "why": [
    "`'c'` is what `pop()` would return from the right end; `popleft()` takes from the left.",
    "Right: `popleft()` removes the first item added, `'a'`, because a queue is FIFO.",
    "`'b'` is the middle item; `popleft()` only removes the leftmost element.",
    "`popleft()` returns the removed element, not the deque that remains after removal."
   ],
   "type": "code"
  },
  {
   "id": "linear-ds-03",
   "topic": "linear-ds",
   "q": "What is the time complexity of accessing `my_list[i]` in a Python list?",
   "options": [
    "O(n)",
    "O(log n)",
    "O(1)",
    "O(n\u00b2)"
   ],
   "answer": 2,
   "explain": "Python lists are dynamic arrays stored in adjacent memory, so any index can be reached directly in constant time. Linked lists, not arrays, need O(n) traversal.",
   "hint": "Python lists store elements in contiguous memory, so think about how an index maps to a position.",
   "why": [
    "O(n) is the cost of reaching an index in a linked list, not in an array-backed Python list.",
    "O(log n) would require a halving search, but indexing jumps directly to the position.",
    "Right: a dynamic array computes the element's location directly from the index in constant time.",
    "O(n\u00b2) would require nested work per access, which indexing never does."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-04",
   "topic": "linear-ds",
   "q": "In a Python list (dynamic array), why is inserting in the middle O(n)?",
   "options": [
    "Every element after the insertion point must shift one position",
    "Python must sort the list after every insert",
    "The list must be traversed node by node from the head",
    "A new hash must be computed for every element"
   ],
   "answer": 0,
   "explain": "Arrays store elements contiguously, so inserting in the middle shifts all later elements. Node-by-node traversal describes linked lists, not arrays.",
   "hint": "Picture what must happen to the elements after the insertion point in contiguous memory.",
   "why": [
    "Right: to open a gap in contiguous memory, every later element must move one slot over, which is O(n).",
    "Python never sorts a list automatically on insert; order is preserved exactly as given.",
    "Node-by-node traversal describes linked lists; a Python list is an array that can jump to any index.",
    "Lists don't hash their elements; hashing is how dicts and sets work."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-05",
   "topic": "linear-ds",
   "q": "Why is appending to a Python list O(1) on average but sometimes O(n)?",
   "options": [
    "When the underlying array is full, all elements are copied to a larger array",
    "Python sorts the list every few appends",
    "Every append traverses the list to find the end",
    "Appending duplicates triggers a uniqueness check"
   ],
   "answer": 0,
   "explain": "Dynamic arrays resize by copying everything into a bigger array when capacity runs out. That occasional O(n) copy is rare, so the average stays O(1).",
   "hint": "Dynamic arrays have a fixed capacity under the hood that occasionally runs out.",
   "why": [
    "Right: when capacity is full, all elements are copied into a bigger array (O(n)), but this is rare so the amortized cost is O(1).",
    "Python never sorts a list on its own during appends.",
    "A Python list knows its length, so it can jump straight to the end without traversing.",
    "Lists allow duplicates and never check uniqueness; that behavior belongs to sets."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-06",
   "topic": "linear-ds",
   "q": "According to the review, what is the time complexity of inserting at the END of a singly linked list (with only a head reference)?",
   "options": [
    "O(1)",
    "O(log n)",
    "O(n\u00b2)",
    "O(n)"
   ],
   "answer": 3,
   "explain": "You must traverse from the head to the last node before linking the new one, which is O(n). Inserting at the beginning is the O(1) operation.",
   "hint": "With only a head reference, ask how you would reach the last node before linking a new one.",
   "why": [
    "O(1) is inserting at the beginning, or at the end only if a tail reference is kept, which isn't the case here.",
    "O(log n) would require halving the search space, but a linked list can only be walked one node at a time.",
    "O(n\u00b2) would mean a full traversal per node, but you only walk the list once.",
    "Right: you must traverse all n nodes from the head to find the tail before attaching the new node."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-07",
   "topic": "linear-ds",
   "q": "In a singly linked list, what does the tail node's `next` reference point to?",
   "options": [
    "The head node",
    "`None`",
    "Itself",
    "The previous node"
   ],
   "answer": 1,
   "explain": "The tail is the last node, so its next reference is `None`. Pointing back to the head would create a circular list.",
   "hint": "The tail is the last node, so think about what marks the end of the list.",
   "why": [
    "Pointing back to the head would make the list circular, which a standard singly linked list is not.",
    "Right: the tail has no next node, so its `next` is `None`, which marks the end of the list.",
    "A node pointing to itself would create an infinite loop during traversal.",
    "A singly linked list has no backward references; previous pointers belong to doubly linked lists."
   ],
   "type": "concept"
  },
  {
   "id": "linear-ds-08",
   "topic": "linear-ds",
   "q": "What is a key trade-off of a doubly linked list compared to a singly linked list?",
   "options": [
    "It can be traversed in both directions but needs more memory per node",
    "It allows O(1) access by index but cannot grow",
    "It uses less memory but can only move forward",
    "It must be kept sorted at all times"
   ],
   "answer": 0,
   "explain": "Each node stores both a next and a previous reference, enabling two-way traversal at the cost of extra memory. Neither kind of linked list offers O(1) index access.",
   "hint": "Consider what extra information each node of a doubly linked list stores.",
   "why": [
    "Right: each node stores both `next` and `prev` references, allowing two-way traversal at the cost of extra memory.",
    "No linked list offers O(1) index access, and linked lists can grow freely.",
    "This reverses the trade-off: the extra `prev` reference means more memory and two-way movement.",
    "Linked lists have no ordering requirement; sortedness is unrelated to having two references."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-01",
   "topic": "hashing",
   "q": "What is the average-case time complexity of looking up a key in a Python dictionary?",
   "options": [
    "O(n)",
    "O(1)",
    "O(log n)",
    "O(n log n)"
   ],
   "answer": 1,
   "explain": "Dictionaries are hash maps: the hash of the key points almost directly to its storage location, giving O(1) on average. O(n) only happens in the worst case with many collisions.",
   "hint": "Think about how a key's hash lets Python jump almost directly to where the value is stored.",
   "why": [
    "O(n) only happens in the worst case with many collisions, not on average.",
    "Right: hashing the key points almost directly to its slot, so average lookup is constant time.",
    "O(log n) describes searching a sorted structure such as a balanced tree, not a hash map.",
    "O(n log n) is the cost of sorting, which a dictionary lookup never does."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-02",
   "topic": "hashing",
   "q": "When can a hash map lookup degrade to O(n)?",
   "options": [
    "When many keys produce the same hash value (hash collisions)",
    "When the keys are strings instead of integers",
    "When the dictionary has more than 1,000 items",
    "When values are repeated across keys"
   ],
   "answer": 0,
   "explain": "Many collisions put lots of keys in the same spot, so the lookup must search through them one by one. Repeated values have no effect, since only keys are hashed.",
   "hint": "A hash map is fast only when keys are spread out across different slots.",
   "why": [
    "Right: when many keys share a hash, they pile into the same slot and must be checked one by one, which is O(n).",
    "Strings are hashable just like integers, and their lookups are still O(1) on average.",
    "Dictionaries resize as they grow, so a large size alone doesn't make lookups slow.",
    "Only keys are hashed, so repeated values have no effect on lookup speed."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-03",
   "topic": "hashing",
   "q": "What happens when this code runs?",
   "code": "my_set = {[1, 2]}\nprint(my_set)",
   "options": [
    "A `TypeError`, because a list is unhashable",
    "It prints `{[1, 2]}`",
    "It prints `{1, 2}`",
    "`KeyError`"
   ],
   "answer": 0,
   "explain": "Set elements must be hashable (immutable) so their hash stays constant. A list is mutable, so Python raises a TypeError.",
   "hint": "Set elements must have a hash value that can never change.",
   "why": [
    "Right: lists are mutable and therefore unhashable, so putting one in a set raises a `TypeError`.",
    "Python can't store a list in a set at all, so it never gets to print anything.",
    "Writing `{[1, 2]}` makes a set containing one list, not a set of the list's items; that would be `set([1, 2])`.",
    "`KeyError` is raised for a missing dictionary key; a type problem raises `TypeError`."
   ],
   "type": "code"
  },
  {
   "id": "hashing-04",
   "topic": "hashing",
   "q": "What is printed?",
   "code": "nums = [1, 2, 2, 3, 3, 3, 4]\nprint(len(set(nums)))",
   "options": [
    "`7`",
    "`5`",
    "`4`",
    "`{1, 2, 3, 4}`"
   ],
   "answer": 2,
   "explain": "Sets keep only unique elements, so `{1, 2, 3, 4}` remains and its length is 4.",
   "hint": "Converting to a set removes something, and `len` then counts what remains.",
   "why": [
    "7 is the length of the original list; the set drops the duplicate 2s and 3s.",
    "5 might come from removing only some duplicates, but a set keeps exactly one copy of each value.",
    "Right: the unique values are 1, 2, 3 and 4, so the set has length 4.",
    "`len` returns a number, not the set itself, even though `{1, 2, 3, 4}` is the set being measured."
   ],
   "type": "code"
  },
  {
   "id": "hashing-05",
   "topic": "hashing",
   "q": "In the \"chaining\" collision resolution strategy, what happens to keys that hash to the same index?",
   "options": [
    "They are stored together in a linked list at that index",
    "The second key overwrites the first",
    "The hash map searches for the next free index in a predefined sequence",
    "Python raises a KeyError"
   ],
   "answer": 0,
   "explain": "Chaining keeps a linked list at each array index holding every element with that hash. Searching for the next free slot is open addressing.",
   "hint": "The name \"chaining\" hints at how colliding entries are kept together.",
   "why": [
    "Right: chaining keeps a linked list at each index, holding every entry that hashes there.",
    "Overwriting would lose data; collision handling exists to keep both keys.",
    "Searching for the next free slot in a sequence is open addressing, a different strategy.",
    "A collision is normal and handled internally; `KeyError` is only for looking up a missing key."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-06",
   "topic": "hashing",
   "q": "Which data structure is best suited for implementing an \"undo\" feature?",
   "options": [
    "Queue",
    "Stack",
    "Set",
    "Hash map"
   ],
   "answer": 1,
   "explain": "Undo reverses the most recent action first, which is LIFO behavior: a stack. A queue would undo the oldest action first.",
   "hint": "Undo must reverse the most recent action first.",
   "why": [
    "A queue is FIFO, so it would undo the oldest action first instead of the latest.",
    "Right: a stack is LIFO, so the last action pushed is the first one undone.",
    "A set has no order, so it can't tell you which action happened most recently.",
    "A hash map gives fast key lookup but no built-in notion of most recent order."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-07",
   "topic": "hashing",
   "q": "Which data structure is the best fit for task scheduling where tasks are handled in arrival order?",
   "options": [
    "Stack",
    "Set",
    "Queue",
    "Hash map"
   ],
   "answer": 2,
   "explain": "Handling tasks in the order they arrive is FIFO, which is a queue. A stack would always process the newest task first.",
   "hint": "Tasks should be handled first-come, first-served.",
   "why": [
    "A stack is LIFO, so the newest task would always jump ahead of older ones.",
    "A set is unordered, so it can't preserve arrival order.",
    "Right: a queue is FIFO, so tasks come out in the order they arrived.",
    "A hash map is for lookup by key and doesn't track the order tasks arrived for processing."
   ],
   "type": "concept"
  },
  {
   "id": "hashing-08",
   "topic": "hashing",
   "q": "In the map abstract data type, which statement is true?",
   "options": [
    "Keys must be unique, but values can be repeated",
    "Values must be unique, but keys can be repeated",
    "Both keys and values must be unique",
    "Keys must be stored in sorted order"
   ],
   "answer": 0,
   "explain": "Each key identifies exactly one entry, so keys are unique; different keys may share the same value.",
   "hint": "A key is how you find an entry, so ask which side must identify entries unambiguously.",
   "why": [
    "Right: each key identifies one entry so keys are unique, while different keys can map to the same value.",
    "This is reversed: keys must be unique, and values may repeat.",
    "Values don't need to be unique; for example two people can both have age 30.",
    "The map ADT doesn't require sorted keys; that's a property of specific structures like ordered trees."
   ],
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-01",
   "topic": "recursion-search-sort",
   "q": "What is printed?",
   "code": "def find_factorial(n):\n    if n == 0:\n        return 1\n    return n * find_factorial(n - 1)\n\nprint(find_factorial(4))",
   "options": [
    "`24`",
    "`10`",
    "`6`",
    "`0`"
   ],
   "answer": 0,
   "explain": "`find_factorial(4)` = 4 \u00d7 3 \u00d7 2 \u00d7 1 \u00d7 `find_factorial(0)`, and the base case returns 1, so the result is 24.",
   "hint": "Expand the calls down to the base case and multiply on the way back up.",
   "why": [
    "Right: 4 \u00d7 3 \u00d7 2 \u00d7 1 \u00d7 1 = 24, with the base case returning 1.",
    "10 is 4 + 3 + 2 + 1, which would be the result if the function added instead of multiplied.",
    "6 is 3!, which comes from stopping one level too early.",
    "0 would result if the base case returned 0, but it returns 1 so the product isn't zeroed."
   ],
   "type": "code"
  },
  {
   "id": "recursion-search-sort-02",
   "topic": "recursion-search-sort",
   "q": "What happens when `countdown(3)` is called?",
   "code": "def countdown(n):\n    print(n)\n    countdown(n - 1)",
   "options": [
    "It prints 3, 2, 1 and stops",
    "It prints 3, 2, 1, 0 and stops",
    "It keeps calling itself until Python raises a `RecursionError`",
    "It raises a `TypeError` immediately"
   ],
   "answer": 2,
   "explain": "There is no base case, so the function never stops calling itself; the call stack overflows and Python raises a RecursionError.",
   "hint": "Look for the condition that would make the function stop calling itself.",
   "why": [
    "It would stop at 1 only with a base case like `if n == 0: return`, which this code lacks.",
    "Nothing stops it at 0; it continues to -1, -2 and beyond.",
    "Right: with no base case the calls never end, so the call stack overflows and Python raises `RecursionError`.",
    "All operations are valid on integers, so there is no type problem; it prints 3 before anything goes wrong."
   ],
   "type": "code"
  },
  {
   "id": "recursion-search-sort-03",
   "topic": "recursion-search-sort",
   "q": "What is printed?",
   "code": "def total(nums):\n    if not nums:\n        return 0\n    return nums[0] + total(nums[1:])\n\nprint(total([1, 2, 3]))",
   "options": [
    "`10`",
    "`6`",
    "`4`",
    "`0`"
   ],
   "answer": 1,
   "explain": "`total([1, 2, 3])` = 1 + `total([2, 3])` = 1 + 2 + `total([3])` = 1 + 2 + 3 + `total([])` = 6 + 0. The base case (empty list) returns 0.",
   "hint": "Trace each call: the first element plus the total of the rest, until the list is empty.",
   "why": [
    "10 would need an extra 4 somewhere; the list only contains 1, 2 and 3.",
    "Right: 1 + 2 + 3 + `total([])`, and the empty-list base case returns 0, giving 6.",
    "4 comes from adding only the first and last elements, but every element is included.",
    "0 is only what the base case returns; each level adds its `nums[0]` on the way back."
   ],
   "type": "code"
  },
  {
   "id": "recursion-search-sort-04",
   "topic": "recursion-search-sort",
   "q": "What is required for binary search to work?",
   "options": [
    "The list must be sorted",
    "The list must have an even number of items",
    "The list must contain only unique values",
    "The list must be shorter than 1,000 items"
   ],
   "answer": 0,
   "explain": "Binary search decides which half to discard by comparing with the middle element, which only works when the items are sorted (ascending or descending).",
   "hint": "Binary search throws away half the list after comparing with the middle element.",
   "why": [
    "Right: discarding half only works if all smaller values are on one side and larger values on the other, which requires sorting.",
    "Odd lengths work fine; the middle index is just rounded down.",
    "Duplicates are allowed; binary search still finds a matching element.",
    "List size doesn't matter; binary search shines most on very large lists."
   ],
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-05",
   "topic": "recursion-search-sort",
   "q": "What is the time complexity of binary search?",
   "options": [
    "O(n)",
    "O(1)",
    "O(n log n)",
    "O(log n)"
   ],
   "answer": 3,
   "explain": "Each step halves the remaining search space, so the number of steps grows logarithmically. O(n) is linear search.",
   "hint": "Each comparison in binary search removes half of the remaining candidates.",
   "why": [
    "O(n) is linear search, which checks items one at a time.",
    "O(1) would mean a fixed number of steps regardless of size, but bigger lists need more halvings.",
    "O(n log n) is the cost of efficient sorting, not of searching an already-sorted list.",
    "Right: halving the search space each step takes about log\u2082(n) steps."
   ],
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-06",
   "topic": "recursion-search-sort",
   "q": "What does this linear search return?",
   "code": "def linear_search(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i\n    return -1\n\nprint(linear_search([4, 7, 9, 2], 9))",
   "options": [
    "`-1`",
    "`2`",
    "`3`",
    "`None`"
   ],
   "answer": 1,
   "explain": "Linear search checks items from the start and returns the index of the first match; 9 is at index 2. It would return -1 only if the target were not found.",
   "hint": "The function returns a position, so count indexes starting from 0.",
   "why": [
    "-1 is returned only when the target is missing, but 9 is in the list.",
    "Right: 9 is at index 2 (4 is 0, 7 is 1), so the function returns 2.",
    "3 is counting positions from 1; Python indexes start at 0.",
    "The function always returns either an index or -1, never `None`."
   ],
   "type": "code"
  },
  {
   "id": "recursion-search-sort-07",
   "topic": "recursion-search-sort",
   "q": "What is the space complexity of merge sort, and why?",
   "options": [
    "O(n), because it is not an in-place sorting algorithm",
    "O(1), because it sorts the list in place",
    "O(n\u00b2), because it uses nested loops",
    "O(log n), because it halves the list"
   ],
   "answer": 0,
   "explain": "Merge sort creates new sub-lists while merging, so it needs extra memory proportional to n. It is not in-place, so O(1) is wrong.",
   "hint": "Think about where merge sort puts the merged results.",
   "why": [
    "Right: merging builds new sub-lists, so merge sort needs extra memory proportional to n and is not in-place.",
    "Merge sort is not in-place; it copies elements into new lists during merging.",
    "Merge sort doesn't compare all pairs with nested loops, and its memory use isn't quadratic.",
    "Halving gives a recursion depth of log n, but the merged lists still need O(n) extra space."
   ],
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-08",
   "topic": "recursion-search-sort",
   "q": "How does merge sort follow the divide-and-conquer approach?",
   "options": [
    "It recursively splits the list into one-element sub-lists, then merges them back in sorted order",
    "It compares every pair of elements with nested loops",
    "It picks the smallest element and moves it to the front repeatedly",
    "It searches the middle element and discards half the list"
   ],
   "answer": 0,
   "explain": "Merge sort divides until each sub-list has one element (trivially sorted) and then conquers by merging. Discarding half the list describes binary search.",
   "hint": "Divide-and-conquer splits a problem into smaller pieces, solves them, and combines the results.",
   "why": [
    "Right: it splits until each sub-list has one element, then merges them back in sorted order.",
    "Comparing every pair with nested loops is a brute-force O(n\u00b2) approach like bubble sort.",
    "Repeatedly moving the smallest element to the front is selection sort.",
    "Checking the middle element and discarding half is binary search, which never merges anything."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-01",
   "topic": "graphs-trees",
   "q": "Which traversal uses a queue and explores a graph level by level?",
   "options": [
    "Depth-First Search (DFS)",
    "Breadth-First Search (BFS)",
    "Binary search",
    "Merge sort"
   ],
   "answer": 1,
   "explain": "BFS uses a queue to visit all neighbors at one level before moving deeper. DFS uses a stack (or recursion) and goes deep first.",
   "hint": "First-in, first-out processing naturally visits nodes in order of distance from the start.",
   "why": [
    "DFS goes deep along one path first, using a stack or recursion rather than a queue.",
    "Right: BFS uses a queue to visit all nodes at one level before moving to the next.",
    "Binary search works on sorted lists, not graphs.",
    "Merge sort is a sorting algorithm, not a graph traversal."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-02",
   "topic": "graphs-trees",
   "q": "Which traversal finds the shortest path in an unweighted graph?",
   "options": [
    "DFS",
    "BFS",
    "Linear search",
    "Either one, they always give the same path"
   ],
   "answer": 1,
   "explain": "BFS explores in order of distance from the start, so the first time it reaches a node is via the shortest path. DFS may find a long path first.",
   "hint": "In an unweighted graph, the shortest path is the one with the fewest edges.",
   "why": [
    "DFS may wander down a long path and reach the target before trying shorter routes.",
    "Right: BFS explores nodes in order of distance, so it first reaches each node via a shortest path.",
    "Linear search scans a list for a value; it doesn't traverse graph edges.",
    "DFS and BFS visit nodes in different orders and can find different paths."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-03",
   "topic": "graphs-trees",
   "q": "What is printed?",
   "code": "import heapq\n\nheap = []\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 1)\nheapq.heappush(heap, 3)\nprint(heapq.heappop(heap))",
   "options": [
    "`1`",
    "`5`",
    "`3`",
    "`[1, 3, 5]`"
   ],
   "answer": 0,
   "explain": "`heapq` implements a min-heap, so `heappop` always removes the smallest element, 1, regardless of insertion order.",
   "hint": "`heapq` maintains a specific kind of heap, regardless of insertion order.",
   "why": [
    "Right: `heapq` is a min-heap, so `heappop` returns the smallest value, 1.",
    "5 was pushed first, but a heap isn't a queue; it pops by value, not by arrival order.",
    "3 was pushed last, but a heap isn't a stack either; it always pops the smallest.",
    "`heappop` returns a single element, not the heap contents."
   ],
   "type": "code"
  },
  {
   "id": "graphs-trees-04",
   "topic": "graphs-trees",
   "q": "What is printed?",
   "code": "import heapq\n\ntasks = []\nheapq.heappush(tasks, (3, 'A'))\nheapq.heappush(tasks, (2, 'B'))\nheapq.heappush(tasks, (1, 'C'))\nprint(heapq.heappop(tasks))",
   "options": [
    "`(1, 'C')`",
    "`(3, 'A')`",
    "`(2, 'B')`",
    "`'C'`"
   ],
   "answer": 0,
   "explain": "Tuples are compared by their first element, the priority. The lowest number is removed first in a min-heap, so `(1, 'C')` is served first.",
   "hint": "Tuples are compared element by element, starting with the first.",
   "why": [
    "Right: tuples compare by their first element, so `(1, 'C')` has the lowest priority number and is popped first.",
    "`(3, 'A')` was pushed first, but a min-heap pops by smallest value, not by arrival.",
    "`(2, 'B')` is neither the first nor the smallest; it would come out second.",
    "`heappop` returns the whole stored item, the tuple, not just its second element."
   ],
   "type": "code"
  },
  {
   "id": "graphs-trees-05",
   "topic": "graphs-trees",
   "q": "What two properties make a graph a tree?",
   "options": [
    "It is acyclic and connected",
    "It is directed and weighted",
    "It is cyclic and disconnected",
    "Every node has exactly two children"
   ],
   "answer": 0,
   "explain": "A tree has no cycles and every node can be reached. \"At most two children\" describes a binary tree, a specific kind of tree.",
   "hint": "Think about whether you can loop back to a node and whether every node is reachable.",
   "why": [
    "Right: a tree has no cycles (acyclic) and every node is reachable from every other (connected).",
    "Direction and weights are optional edge properties and don't define a tree.",
    "This is the opposite: cycles and disconnected parts are exactly what a tree cannot have.",
    "That describes only one narrow kind of binary tree; a binary tree allows *at most* two children, and trees in general allow any number."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-06",
   "topic": "graphs-trees",
   "q": "In a binary search tree (BST), which statement is true?",
   "options": [
    "Every left child is less than its parent and every right child is greater",
    "Every parent is greater than both of its children",
    "Each node can have any number of children",
    "Each node represents one character of a string"
   ],
   "answer": 0,
   "explain": "That ordering rule defines a BST. \"Parent greater than children\" is the max-heap property, and one character per node describes a trie.",
   "hint": "A BST is built so that you can decide to go left or right when searching for a value.",
   "why": [
    "Right: smaller values go left and larger go right, which is the BST ordering rule.",
    "Parent greater than both children is the max-heap property, not the BST property.",
    "A BST is a binary tree, so each node has at most two children.",
    "One character per node describes a trie, used for storing strings."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-07",
   "topic": "graphs-trees",
   "q": "Which graph representation is fast for checking whether an edge exists between two nodes, but space intensive for large graphs?",
   "options": [
    "Adjacency list",
    "Adjacency matrix",
    "Trie",
    "Linked list"
   ],
   "answer": 1,
   "explain": "An adjacency matrix is a 2D array, so checking `matrix[a][b]` is immediate, but it stores a cell for every pair of nodes. Adjacency lists are space efficient for sparse graphs.",
   "hint": "Picture a 2D grid with a cell for every possible pair of nodes.",
   "why": [
    "Adjacency lists save space on sparse graphs, but checking an edge means scanning a neighbor list.",
    "Right: `matrix[a][b]` gives an instant answer, but storing every pair takes n\u00b2 space.",
    "A trie stores strings by character, not graph edges.",
    "A linked list is a linear structure and isn't a standard graph representation."
   ],
   "type": "concept"
  },
  {
   "id": "graphs-trees-08",
   "topic": "graphs-trees",
   "q": "What is printed?",
   "code": "import heapq\n\nnums = [9, 5, 1, 3]\nheapq.heapify(nums)\nprint(nums[0])",
   "options": [
    "`[1, 3, 5, 9]`",
    "`1`",
    "`[9, 5, 3, 1]`",
    "`9`"
   ],
   "answer": 1,
   "explain": "`heapify` turns the list into a min-heap in place, so the smallest element is at index 0 (the root).",
   "hint": "`heapify` rearranges the list in place so a particular element ends up at the root.",
   "why": [
    "`nums[0]` is a single element, not a list; also `heapify` doesn't fully sort the list (it becomes `[1, 3, 9, 5]`).",
    "Right: `heapify` makes a min-heap, so the smallest value, 1, sits at index 0.",
    "`heapify` doesn't reverse or sort descending, and printing `nums[0]` gives one element, not the list.",
    "9 was at index 0 before `heapify`, but the min-heap moves the smallest value to the root."
   ],
   "type": "code"
  },
  {
   "id": "dp-01",
   "topic": "dp",
   "q": "What is dynamic programming?",
   "options": [
    "Breaking a problem into simpler subproblems and storing their results to avoid redundant calculations",
    "Writing programs whose variables change type at runtime",
    "Splitting a problem into independent halves that never repeat",
    "Choosing the locally best option at each step without storing anything"
   ],
   "answer": 0,
   "explain": "DP solves subproblems once and reuses stored results. Splitting into independent, non-repeating halves is plain divide-and-conquer.",
   "hint": "The key idea is not solving the same smaller problem twice.",
   "why": [
    "Right: DP breaks a problem into subproblems and stores their results so each is solved only once.",
    "Variables changing type at runtime is dynamic typing, unrelated to dynamic programming.",
    "Independent, non-repeating halves describe plain divide-and-conquer, where caching wouldn't help.",
    "Choosing the locally best option without storing anything describes a greedy algorithm."
   ],
   "type": "concept"
  },
  {
   "id": "dp-02",
   "topic": "dp",
   "q": "What does \"overlapping subproblems\" mean?",
   "options": [
    "The same smaller problems appear multiple times while solving the larger problem",
    "Two different algorithms solve the same problem",
    "Subproblems must be solved in parallel",
    "The problem has more than one correct answer"
   ],
   "answer": 0,
   "explain": "When the same subproblem recurs (like `fib(3)` inside `fib(5)`), storing its answer avoids recalculating it.",
   "hint": "Think of how `fib(5)` ends up needing `fib(3)` more than once.",
   "why": [
    "Right: the same subproblems recur many times, so storing their answers avoids redundant work.",
    "Multiple algorithms for one problem is about alternatives, not about repeated subproblems.",
    "Overlapping refers to repetition, not to parallel execution.",
    "Having several correct answers is unrelated to whether subproblems repeat."
   ],
   "type": "concept"
  },
  {
   "id": "dp-03",
   "topic": "dp",
   "q": "What does \"optimal substructure\" mean?",
   "options": [
    "The optimal solution to a problem contains optimal solutions to its subproblems",
    "The algorithm uses the least possible memory",
    "The input data is already sorted",
    "Every subproblem has the same size"
   ],
   "answer": 0,
   "explain": "Optimal substructure means you can build the best overall answer by combining the best answers to smaller parts.",
   "hint": "This property is about whether the best answers to smaller parts build the best overall answer.",
   "why": [
    "Right: the optimal solution is built from optimal solutions to its subproblems.",
    "Memory usage is a separate concern; optimal substructure is about how solutions compose.",
    "Sorted input is a requirement of algorithms like binary search, not a DP property.",
    "Subproblems can be of different sizes; the property is about optimality, not size."
   ],
   "type": "concept"
  },
  {
   "id": "dp-04",
   "topic": "dp",
   "q": "Which approach does this code use?",
   "code": "memo = {}\n\ndef fib(n):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]",
   "options": [
    "Memoization (top-down)",
    "Tabulation (bottom-up)",
    "Binary search",
    "Greedy algorithm"
   ],
   "answer": 0,
   "explain": "It recursively calls itself from the top and caches results in `memo` \u2014 that is memoization. Tabulation would fill a table iteratively from the smallest case upward.",
   "hint": "Notice whether the function recurses from `n` downward and where it saves results.",
   "why": [
    "Right: it recurses from the top and caches results in `memo`, which is top-down memoization.",
    "Tabulation fills a table iteratively from the base cases up, without recursion.",
    "Binary search finds a value in a sorted list; there's no searching here.",
    "A greedy algorithm picks a locally best option each step; this code computes and caches exact subresults."
   ],
   "type": "concept"
  },
  {
   "id": "dp-05",
   "topic": "dp",
   "q": "Which approach does this code use?",
   "code": "def fib(n):\n    table = [0] * (n + 1)\n    if n > 0:\n        table[1] = 1\n    for i in range(2, n + 1):\n        table[i] = table[i - 1] + table[i - 2]\n    return table[n]",
   "options": [
    "Memoization (top-down)",
    "Tabulation (bottom-up)",
    "Recursion without caching",
    "Divide-and-conquer with merging"
   ],
   "answer": 1,
   "explain": "It fills a table from the smallest subproblems up to `n` with a loop and no recursion \u2014 that is tabulation.",
   "hint": "Look at whether the function calls itself or uses a loop to fill a structure.",
   "why": [
    "Memoization uses recursion with a cache, but this function never calls itself.",
    "Right: it fills `table` from the smallest cases up to `n` in a loop, which is bottom-up tabulation.",
    "There's no recursion at all here, so it can't be uncached recursion.",
    "Nothing is split into halves or merged; it simply builds on previous table entries."
   ],
   "type": "concept"
  },
  {
   "id": "dp-06",
   "topic": "dp",
   "q": "What is printed?",
   "code": "def fib(n):\n    table = [0] * (n + 1)\n    if n > 0:\n        table[1] = 1\n    for i in range(2, n + 1):\n        table[i] = table[i - 1] + table[i - 2]\n    return table[n]\n\nprint(fib(10))",
   "options": [
    "`55`",
    "`34`",
    "`89`",
    "`10`"
   ],
   "answer": 0,
   "explain": "The table holds Fibonacci numbers 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, so `table[10]` is 55.",
   "hint": "Write out the table entries starting from 0 and 1 and keep going to index 10.",
   "why": [
    "Right: the sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 gives `table[10]` = 55.",
    "34 is `table[9]`, an off-by-one error in counting the index.",
    "89 is `table[11]`, one step too far.",
    "10 is just the input `n`, not the Fibonacci value at that position."
   ],
   "type": "code"
  },
  {
   "id": "dp-07",
   "topic": "dp",
   "q": "Which trade-off does dynamic programming typically make?",
   "options": [
    "It uses more memory (space) to save time",
    "It uses more time to save memory",
    "It gives up correctness for speed",
    "It avoids recursion to reduce code size"
   ],
   "answer": 0,
   "explain": "DP stores subproblem results, spending extra space so repeated calculations are avoided and running time drops.",
   "hint": "Storing subproblem results costs something but saves recomputation.",
   "why": [
    "Right: DP spends extra memory on stored results so repeated calculations are skipped and runtime drops.",
    "This reverses the trade-off: DP saves time by spending memory, not the other way around.",
    "DP gives exact answers; it doesn't sacrifice correctness.",
    "Memoization is often recursive, and DP's goal is speed, not shorter code."
   ],
   "type": "concept"
  },
  {
   "id": "dp-08",
   "topic": "dp",
   "q": "Which is a real-world application of dynamic programming mentioned in the review?",
   "options": [
    "Calculating edit distances for spell checkers",
    "Sorting a deck of cards by hand",
    "Printing a list in reverse",
    "Converting Celsius to Fahrenheit"
   ],
   "answer": 0,
   "explain": "Spell checkers and autocomplete use DP to compute edit distances. The other tasks have no overlapping subproblems to reuse.",
   "hint": "Look for a task that compares sequences and reuses answers for their smaller prefixes.",
   "why": [
    "Right: edit distance reuses results for smaller prefixes of the words, a classic DP problem used by spell checkers.",
    "Sorting cards by hand is a manual sorting task with no stored subproblems to reuse.",
    "Reversing a list is a simple linear operation with no overlapping subproblems.",
    "Converting Celsius to Fahrenheit is a single formula, so there's nothing to break down or store."
   ],
   "type": "concept"
  },
  {
   "id": "basics-c01",
   "topic": "basics",
   "q": "A hobbyist wants to program a Raspberry Pi to read a temperature sensor, and a data analyst wants to clean up large spreadsheets. Which statement about using Python for both jobs is accurate?",
   "options": [
    "Python fits both: it is a general-purpose language used for microcomputers and IoT boards as well as for data science.",
    "Python only suits the spreadsheet work; boards like the Raspberry Pi can only be programmed in C.",
    "Python only suits the Raspberry Pi; data analysis requires a dedicated statistics language.",
    "Neither: Python is mainly a language for styling web pages in the browser, like CSS."
   ],
   "answer": 0,
   "hint": "Think about how broad Python's list of common use cases is.",
   "why": [
    "Python is general-purpose: the review lists embedded systems/IoT (Raspberry Pi, MicroPython boards) and data science among its common uses.",
    "Misconception: the Raspberry Pi runs Python out of the box, and MicroPython runs on even smaller boards.",
    "Misconception: data science and machine learning are among Python's best-known uses.",
    "This confuses Python with front-end web languages; Python is a general-purpose language that runs on servers, desktops and boards."
   ],
   "explain": "Python is a general-purpose language known for simplicity; it is used in data science, machine learning, web development, cybersecurity, automation and on microcomputers like the Raspberry Pi.",
   "type": "concept"
  },
  {
   "id": "basics-c02",
   "topic": "basics",
   "q": "A teammate's script fails with a `SyntaxError` before running a single line. Which line causes it?",
   "code": "course_name = 'Python 101'\nclass = 'Beginners'\nlevel_2 = True\n_id = 7",
   "options": [
    "`_id = 7`",
    "`class = 'Beginners'`",
    "`level_2 = True`",
    "`course_name = 'Python 101'`"
   ],
   "answer": 1,
   "hint": "Three of these names follow the naming rules; one collides with a word Python already uses.",
   "why": [
    "Misconception: names may start with an underscore, so `_id` is valid.",
    "`class` is a reserved keyword (used to define classes), so it can't be used as a variable name.",
    "Misconception: digits are allowed in a name as long as they don't come first.",
    "This is a valid snake_case name; the digits are inside the string value, not the name."
   ],
   "explain": "Variable names start with a letter or `_`, contain only letters, digits and `_`, are case-sensitive, and can't be reserved keywords such as `if`, `class` or `def`.",
   "type": "concept"
  },
  {
   "id": "basics-c03",
   "topic": "basics",
   "q": "A developer wants to leave a two-line note above a function explaining why it exists. Which approach writes a proper multi-line comment in Python?",
   "options": [
    "Wrap the note in `/* ... */`",
    "Wrap the note in `<!-- ... -->`",
    "Start each line of the note with `#`",
    "Put a single `#` before the first line; it comments out everything until a blank line"
   ],
   "answer": 2,
   "hint": "A `#` only affects the line it is on.",
   "why": [
    "Misconception from C or JavaScript: `/* */` is not valid Python and raises a `SyntaxError`.",
    "Misconception from HTML: that syntax means nothing to Python and raises a `SyntaxError`.",
    "Python has no block-comment syntax; you comment several lines by putting `#` at the start of each one.",
    "Misconception: `#` only comments out the rest of its own line, so the second line would run as code."
   ],
   "explain": "Use `#` for comments; for a multi-line comment, start every line with `#`. (A triple-quoted string is sometimes used as a note, but technically it is a string, not a comment.)",
   "type": "concept"
  },
  {
   "id": "basics-c04",
   "topic": "basics",
   "q": "Your team uses a Windows laptop, a MacBook and an Ubuntu desktop with GNOME. Which pairing of default terminal apps is correct?",
   "options": [
    "Windows: Terminal; macOS: PowerShell; GNOME: Konsole",
    "Windows: Bash; macOS: Command Prompt; GNOME: PowerShell",
    "All three use the Python interactive shell (`>>>`) as their terminal",
    "Windows: Command Prompt or PowerShell; macOS: Terminal; GNOME: GNOME Terminal"
   ],
   "answer": 3,
   "hint": "Each operating system ships its own text-based app for typing commands.",
   "why": [
    "This mixes them up: PowerShell is the Windows shell, and Konsole belongs to the KDE desktop, not GNOME.",
    "Command Prompt is Windows-only, and Bash is not the default terminal app on Windows.",
    "Misconception: the Python shell is a program you start *inside* a terminal by typing `python`; it is not the terminal itself.",
    "Correct: each OS ships its own terminal app, and on Linux it depends on the desktop environment (GNOME Terminal, Konsole, ...)."
   ],
   "explain": "A terminal is a text interface for typing commands. macOS has Terminal, Windows has Command Prompt and PowerShell, and Linux desktops have their own (GNOME Terminal, Konsole).",
   "type": "concept"
  },
  {
   "id": "basics-c05",
   "topic": "basics",
   "q": "A new developer writes Python in a plain text editor. A colleague recommends an IDE such as PyCharm or VS Code. What would the IDE add?",
   "options": [
    "A code editor bundled with tools such as a debugger, testing tools and a built-in terminal",
    "A newer version of the Python language that makes scripts run faster",
    "The ability to run Python at all; scripts can't run without an IDE",
    "A cloud service that runs your code on remote servers instead of your computer"
   ],
   "answer": 0,
   "hint": "Expand the three letters: what does the 'I' integrate?",
   "why": [
    "An Integrated Development Environment combines an editor with debugging, testing and a terminal in one app.",
    "Misconception: the IDE is a tool around your code; the Python interpreter that runs it is installed separately.",
    "Misconception: you can run any script from a terminal with `python main.py`, no IDE needed.",
    "IDEs like VS Code, PyCharm and Spyder run on your own machine and run your code locally."
   ],
   "explain": "IDE stands for Integrated Development Environment: an editor plus tools like a debugger, testing tools and a terminal. Popular Python IDEs are VS Code, PyCharm and Spyder.",
   "type": "concept"
  },
  {
   "id": "basics-c06",
   "topic": "basics",
   "q": "A developer opens a terminal in their home folder and types `python main.py`, but Python says it can't open the file. `main.py` is saved in a folder called `python-projects`. What is the fix?",
   "options": [
    "Rename the file to `main`, without the `.py` extension",
    "Run `cd python-projects` first, then `python main.py`",
    "Type `print(main.py)` in the terminal",
    "Reinstall Python, because it can't find its own files"
   ],
   "answer": 1,
   "hint": "Where is the terminal currently 'standing' compared to the file?",
   "why": [
    "Misconception: the extension isn't the problem; the terminal is simply in the wrong folder.",
    "`python main.py` looks for the file in the current folder, so you first move into the folder that contains it.",
    "This mixes up the terminal and Python code: `print()` is Python, and it wouldn't run the file anyway.",
    "Python is installed fine; it just can't find `main.py` from the current folder."
   ],
   "explain": "Run a script from the folder where it is saved: `cd python-projects`, then `python main.py`. In VS Code you can also use the Run (play) button.",
   "type": "concept"
  },
  {
   "id": "types-c01",
   "topic": "types",
   "q": "A game stores how many lives a player has left. Which assignment stores an `int`?",
   "options": [
    "`lives = 3.0`",
    "`lives = '3'`",
    "`lives = -3`",
    "`lives = 3.5`"
   ],
   "answer": 2,
   "hint": "Look for a whole number that isn't wrapped in quotes and has no decimal point.",
   "why": [
    "Misconception: the `.0` makes it a `float`, even though the value is whole.",
    "The quotes make this a `str` containing the character 3, not a number.",
    "A whole number without decimals is an `int`, and negative whole numbers are ints too.",
    "A number with decimals is a `float`, not an `int`."
   ],
   "explain": "An `int` is a whole number without decimals, positive or negative, such as `42` or `-7`.",
   "type": "concept"
  },
  {
   "id": "types-c02",
   "topic": "types",
   "q": "What does this code print?",
   "code": "a = 7.0\nprint(a == 7, type(a) == int)",
   "options": [
    "`True True`",
    "`False False`",
    "`False True`",
    "`True False`"
   ],
   "answer": 3,
   "hint": "Equality compares values; `type()` compares what kind of value it is.",
   "why": [
    "Misconception: a whole-valued number with `.0` is still a `float`, not an `int`.",
    "Misconception: an int and a float with the same value compare as equal with `==`.",
    "Both parts are backwards: the values are equal, and the type is `float`.",
    "`7.0 == 7` compares values, which are equal, but `7.0` is still a `float`, so `type(a) == int` is `False`."
   ],
   "explain": "A float is a number with decimals, like `7.0`. It can equal an int in value (`7.0 == 7`) while still being a different type.",
   "type": "code"
  },
  {
   "id": "types-c03",
   "topic": "types",
   "q": "A shop stores a Dutch-style postal code that starts with zero. What does this code print?",
   "code": "zip_code = '01234'\nprint(zip_code, len(zip_code))",
   "options": [
    "`01234 5`",
    "`1234 4`",
    "`01234 1`",
    "`TypeError`"
   ],
   "answer": 0,
   "hint": "Inside quotes, digits are just characters.",
   "why": [
    "A string keeps every character exactly as written, including the leading zero, and `len()` counts 5 characters.",
    "Misconception: quotes make it text, so Python never drops the leading zero the way it would for a number.",
    "Misconception: `len()` of a string counts its characters, not 'one value'.",
    "Misconception: `len()` works on any string, including one made of digits."
   ],
   "explain": "A string is a sequence of characters in quotes. Codes like postal codes or phone numbers are stored as strings so leading zeros are kept; writing `01234` without quotes is even a `SyntaxError`.",
   "type": "code"
  },
  {
   "id": "types-c04",
   "topic": "types",
   "q": "A teammate's script crashes on the first line. What happens when it runs?",
   "code": "is_logged_in = true\nprint(is_logged_in)",
   "options": [
    "It prints `true`",
    "A `NameError`, because `true` is not defined",
    "It prints `True`; Python fixes the capitalisation",
    "A `SyntaxError`"
   ],
   "answer": 1,
   "hint": "Python is case-sensitive, and its two boolean values are capitalised.",
   "why": [
    "Misconception from JavaScript or JSON, where `true` is lowercase.",
    "Booleans are written `True` and `False` with a capital letter; lowercase `true` is treated as an undefined variable name.",
    "Python never auto-corrects names; it's case-sensitive.",
    "`true` is a valid *name*, so the syntax is fine; the problem only appears at runtime when the name isn't found."
   ],
   "explain": "A boolean is either `True` or `False`, always capitalised. Lowercase `true` is just an undefined name and raises a `NameError`.",
   "type": "code"
  },
  {
   "id": "types-c05",
   "topic": "types",
   "q": "A function should only accept `price` when it is a float. Which expression gives a `True`/`False` answer to 'is `price` a float?'",
   "options": [
    "`type(price)`",
    "`type(price, float)`",
    "`isinstance(price, float)`",
    "`isinstance(float, price)`"
   ],
   "answer": 2,
   "hint": "One of these returns a class, the other a boolean.",
   "why": [
    "Misconception: `type()` returns the class itself (e.g. `<class 'float'>`), not a boolean, and a class is always truthy.",
    "`type()` called with two arguments raises a `TypeError`; it isn't a checking function.",
    "`isinstance(value, type)` returns `True` or `False`, exactly the yes/no check needed.",
    "The arguments are swapped: the value comes first and the type second, otherwise it raises a `TypeError`."
   ],
   "explain": "`type(x)` tells you what type `x` is; `isinstance(x, some_type)` answers whether `x` is of that type with `True`/`False`.",
   "type": "concept"
  },
  {
   "id": "types-c06",
   "topic": "types",
   "q": "What does this code print?",
   "code": "value = '10'\nvalue = int(value)\nvalue = value / 4\nprint(value, type(value))",
   "options": [
    "`2.5 <class 'str'>`",
    "`2 <class 'int'>`",
    "`TypeError`",
    "`2.5 <class 'float'>`"
   ],
   "answer": 3,
   "hint": "Follow the value line by line; the variable has no fixed type.",
   "why": [
    "Misconception from statically typed languages: a variable's type is not fixed by its first assignment.",
    "Misconception: `/` always returns a float in Python 3, even when both operands are ints.",
    "Misconception: you may reassign a variable to a value of a different type at any time.",
    "Python is dynamically typed: `value` starts as a `str`, becomes an `int`, and `/` turns it into a `float`."
   ],
   "explain": "In a dynamically typed language the type belongs to the value, not the variable, so the same name can hold a str, then an int, then a float.",
   "type": "code"
  },
  {
   "id": "strings-c01",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "original = 'data'\ncopy = original\noriginal += 'base'\nprint(copy)",
   "options": [
    "`data`",
    "`database`",
    "`base`",
    "`TypeError`"
   ],
   "answer": 0,
   "hint": "Does `+=` modify the string, or make a new one?",
   "why": [
    "Strings are immutable: `+=` builds a new string and rebinds `original` to it, while `copy` still refers to the old `'data'`.",
    "Misconception: `+=` doesn't change the existing string in place, so `copy` is unaffected.",
    "Nothing reassigns `copy` to `'base'`; it keeps pointing at the original string.",
    "Misconception: immutable strings can't be changed in place, but `+=` is allowed because it creates a new string."
   ],
   "explain": "Strings can't be changed after creation. Operations like `+`, `+=`, slicing and string methods always produce a new string.",
   "type": "code"
  },
  {
   "id": "strings-c02",
   "topic": "strings",
   "q": "A function receives a string `s` of unknown length and must return its last character. Which expression does that?",
   "options": [
    "`s[len(s)]`",
    "`s[-1]`",
    "`s[-0]`",
    "`s[last]`"
   ],
   "answer": 1,
   "hint": "Which index counts from the end of the string?",
   "why": [
    "Off-by-one: the last index is `len(s) - 1`, so this raises an `IndexError`.",
    "Negative indexing counts from the end, so `-1` is always the last character whatever the length.",
    "Misconception: `-0` is just `0`, so this returns the first character.",
    "There is no built-in `last` keyword; this raises a `NameError` unless you defined a variable called `last`."
   ],
   "explain": "With negative indexes, `s[-1]` is the last character, `s[-2]` the second-to-last, and so on.",
   "type": "concept"
  },
  {
   "id": "strings-c03",
   "topic": "strings",
   "q": "A developer extracts parts of an ISO date string. What does this code print?",
   "code": "date = '2026-11-02'\nyear = date[0:4]\nmonth = date[5:7]\nprint(year, month)",
   "options": [
    "`2026- 11-`",
    "`2026 -11`",
    "`2026 11`",
    "`202 1`"
   ],
   "answer": 2,
   "hint": "Indexes start at 0, and the stop position is excluded.",
   "why": [
    "Misconception: the stop position is *not* included, so the dashes at indexes 4 and 7 are left out.",
    "Off-by-one counting: index 5 is the first `1` of the month, not the dash (the dash is index 4).",
    "`[0:4]` takes indexes 0-3 and `[5:7]` takes indexes 5-6; the stop index is never included.",
    "Misconception: the slice length is `stop - start`, so `[0:4]` gives 4 characters, not 3."
   ],
   "explain": "In `s[start:stop:step]`, extraction starts at `start`, ends just before `stop`, and moves `step` characters at a time (defaults: 0, end, 1).",
   "type": "code"
  },
  {
   "id": "strings-c04",
   "topic": "strings",
   "q": "What does this code print?",
   "code": "log = 'start'\nlog + ' -> load'\nlog += ' -> save'\nprint(log)",
   "options": [
    "`start -> load -> save`",
    "`start`",
    "`start -> load`",
    "`start -> save`"
   ],
   "answer": 3,
   "hint": "Which of the two lines actually stores its result?",
   "why": [
    "Misconception: `+` on its own doesn't change `log`; its result is never stored.",
    "Misconception: `+=` does assign back, so the save step is kept.",
    "Both mistakes at once: the `+` result is discarded, while the `+=` result is kept.",
    "`log + ' -> load'` builds a new string that is thrown away; only `+=` assigns its result back to `log`."
   ],
   "explain": "`+` concatenates into a new string; `+=` concatenates and assigns back to the variable in one step.",
   "type": "code"
  },
  {
   "id": "strings-c05",
   "topic": "strings",
   "q": "A palindrome checker reverses the word with slicing. What does this code print?",
   "code": "word = 'Racecar'\nprint(word == word[::-1])",
   "options": [
    "`False`",
    "`True`",
    "`racecaR`",
    "`TypeError`"
   ],
   "answer": 0,
   "hint": "What does `[::-1]` produce, and is `'R'` equal to `'r'`?",
   "why": [
    "`word[::-1]` is `'racecaR'`, and string comparison is case-sensitive, so `'Racecar' == 'racecaR'` is `False`.",
    "Misconception: comparison is case-sensitive, so the capital R breaks the match; use `word.lower()` first.",
    "That is the reversed string, but the code prints the result of the `==` comparison, which is a boolean.",
    "A slice is an ordinary string, so comparing it with `==` works fine."
   ],
   "explain": "`s[::-1]` reverses a string by using a step of -1. String comparisons are case-sensitive, so normalise case before checking palindromes.",
   "type": "code"
  },
  {
   "id": "strings-c06",
   "topic": "strings",
   "q": "With `count = 3`, the line `message = 'Items in cart: ' + count` raises a `TypeError`. Which replacement builds `'Items in cart: 3'`?",
   "options": [
    "`message = 'Items in cart: ' + int(count)`",
    "`message = 'Items in cart: ' + str(count)`",
    "`message = 'Items in cart: ' + 'count'`",
    "`message = 'Items in cart: ', count`"
   ],
   "answer": 1,
   "hint": "`+` only joins two strings; one side isn't a string yet.",
   "why": [
    "Converting in the wrong direction: `count` is already an int, and str + int still raises a `TypeError`.",
    "`str()` converts the number to text first, so `+` concatenates two strings.",
    "This runs, but it adds the literal word `count`, giving `'Items in cart: count'`.",
    "The comma creates a tuple `('Items in cart: ', 3)`, not a string."
   ],
   "explain": "You can't concatenate a str and an int with `+`. Convert with `str()`, or use an f-string such as `f'Items in cart: {count}'`.",
   "type": "concept"
  },
  {
   "id": "string-methods-c01",
   "topic": "string-methods",
   "q": "A sign-up form checks an email address that is missing its `@`. What does this code print?",
   "code": "email = 'ada.example.com'\nat = email.find('@')\nprint(email[at:])",
   "options": [
    "`ValueError`",
    "`ada.example.com`",
    "`m`",
    "`@`"
   ],
   "answer": 2,
   "hint": "What does `find()` return when it finds nothing, and what does that number mean as a slice index?",
   "why": [
    "Misconception: `find()` never raises; it's `str.index()` that raises a `ValueError` for a missing substring.",
    "Misconception: `-1` here is a negative index meaning 'last character', not 'start of the string'.",
    "`find()` returns `-1` when the substring is missing, and `email[-1:]` is the last character, `m`.",
    "There is no `@` in the string at all, so it can't be part of the output."
   ],
   "explain": "`str.find()` returns `-1` when the substring isn't found instead of raising an error, so always check for `-1` before using the result as an index.",
   "type": "code"
  },
  {
   "id": "string-methods-c02",
   "topic": "string-methods",
   "q": "An upload form accepts only PDF files. What does this code print?",
   "code": "filename = 'Report.PDF'\nprint(filename.endswith('.pdf'))",
   "options": [
    "`True`",
    "`.PDF`",
    "`-1`",
    "`False`"
   ],
   "answer": 3,
   "hint": "Look closely at the capitalisation on both sides.",
   "why": [
    "Misconception: string methods compare exactly; normalise first with `filename.lower().endswith('.pdf')`.",
    "Misconception: `endswith()` returns a boolean, not the matching suffix.",
    "This confuses `endswith()` with `find()`, which returns -1 when nothing is found.",
    "`endswith()` is case-sensitive, and `'.PDF'` does not match `'.pdf'`."
   ],
   "explain": "`startswith()` and `endswith()` return `True`/`False` for whether a string begins or ends with the given text, and the match is case-sensitive.",
   "type": "code"
  },
  {
   "id": "string-methods-c03",
   "topic": "string-methods",
   "q": "A developer strips the dashes from a phone number. What does this code print?",
   "code": "phone = '06-12-34-56'\nprint(phone.replace('-', ''))",
   "options": [
    "`06123456`",
    "`0612-34-56`",
    "`06-12-34-56`",
    "`None`"
   ],
   "answer": 0,
   "hint": "How many dashes does `replace()` handle when you don't give a count?",
   "why": [
    "`replace()` replaces *every* occurrence of the old text, and replacing with `''` removes them.",
    "Misconception: without a count argument, `replace()` replaces all occurrences, not just the first.",
    "The original is unchanged, but the code prints the *new* string returned by `replace()`.",
    "Misconception: strings are immutable, so `replace()` returns a new string rather than changing it in place and returning `None`."
   ],
   "explain": "`str.replace(old, new)` returns a new string with all occurrences of `old` replaced by `new`.",
   "type": "code"
  },
  {
   "id": "string-methods-c04",
   "topic": "string-methods",
   "q": "A warehouse checks whether product codes are in capitals. What does this code print?",
   "code": "code = 'ABC-123'\nprint(code.isupper(), '123'.isupper())",
   "options": [
    "`False False`",
    "`True False`",
    "`True True`",
    "`False True`"
   ],
   "answer": 1,
   "hint": "Only letters are judged, and there must be at least one.",
   "why": [
    "Misconception: digits and the hyphen don't count against `isupper()`; only letters are checked.",
    "`isupper()` ignores non-letters, so `'ABC-123'` is `True`; `'123'` has no letters at all, so it is `False`.",
    "Misconception: a string with no letters at all is not considered uppercase.",
    "Both results are reversed."
   ],
   "explain": "`isupper()`/`islower()` return `True` when all *letters* are upper/lowercase; non-letters are ignored, but a string needs at least one letter to return `True`. **Review note:** the freeCodeCamp review says `isupper()` is True \"if all letters in the string are uppercase\". Python adds one condition: the string must contain at least one letter, so `'123'.isupper()` is False.",
   "type": "code"
  },
  {
   "id": "string-methods-c05",
   "topic": "string-methods",
   "q": "A developer builds a simple 'leet speak' converter. What does this code print?",
   "code": "table = str.maketrans('aeo', '430')\nprint('hello world'.translate(table))",
   "options": [
    "`hello world`",
    "`h3llo world`",
    "`h3ll0 w0rld`",
    "`{97: 52, 101: 51, 111: 48}`"
   ],
   "answer": 2,
   "hint": "One method builds a table; the other uses it on the whole string.",
   "why": [
    "Misconception: `translate()` returns the converted string, and here it is printed directly.",
    "Misconception: `translate()` replaces every occurrence of each mapped character, not just the first.",
    "`maketrans('aeo', '430')` maps a to 4, e to 3 and o to 0, and `translate()` applies that mapping to every matching character.",
    "That is what printing `table` shows; the code prints the translated string instead."
   ],
   "explain": "`str.maketrans()` builds a 1-to-1 character mapping table; `translate()` applies the table to a string and returns the result.",
   "type": "code"
  },
  {
   "id": "string-methods-c06",
   "topic": "string-methods",
   "q": "A script reads `raw = '  apples   pears  '` from a file. Which call returns `['apples', 'pears']`?",
   "options": [
    "`raw.split(' ')`",
    "`raw.strip()`",
    "`raw.split(',')`",
    "`raw.split()`"
   ],
   "answer": 3,
   "hint": "Which version treats a run of several spaces as one separator?",
   "why": [
    "Splitting on a single space keeps empty strings for every extra space: `['', '', 'apples', '', '', 'pears', '', '']`.",
    "`strip()` removes the outer spaces but returns a string, `'apples   pears'`, not a list.",
    "There are no commas, so you get the whole string in a one-item list.",
    "With no argument, `split()` splits on any run of whitespace and ignores leading and trailing whitespace."
   ],
   "explain": "`str.split()` with no argument splits on any whitespace and drops empty pieces; with an explicit separator it splits on exactly that text.",
   "type": "concept"
  },
  {
   "id": "numbers-c01",
   "topic": "numbers",
   "q": "A print shop fits 4 pages on each sheet. What does this code print?",
   "code": "pages = 12\nper_sheet = 4\nsheets = pages / per_sheet\nprint(sheets)",
   "options": [
    "`3.0`",
    "`3`",
    "`0`",
    "`3.00`"
   ],
   "answer": 0,
   "hint": "What type does `/` always return in Python 3?",
   "why": [
    "In Python 3, `/` always returns a float, even when the division comes out even.",
    "Misconception: an even division still gives a float with `/`; use `//` for a whole-number result.",
    "This confuses `/` with `%`, the remainder operator (12 % 4 is 0).",
    "Python prints floats with as few digits as needed, so `3.0`, not two decimal places."
   ],
   "explain": "The `/` operator always returns a float in Python 3 (`12 / 4` is `3.0`). Use `//` when you need floor division.",
   "type": "code"
  },
  {
   "id": "numbers-c02",
   "topic": "numbers",
   "q": "A weather app reports how many degrees the temperature dropped overnight. What does this code print?",
   "code": "morning = 4\nnight = -3\nprint(abs(night - morning))",
   "options": [
    "`-7`",
    "`7`",
    "`1`",
    "`-1`"
   ],
   "answer": 1,
   "hint": "Work out the subtraction first, then drop the sign.",
   "why": [
    "That is the raw difference; `abs()` removes the sign.",
    "`night - morning` is `-7`, and `abs()` returns its distance from zero, `7`.",
    "Misconception: `abs()` is applied to the result of the subtraction, not to each number separately (`4 - 3`).",
    "This adds the numbers instead of subtracting (`-3 + 4` would be 1), and `abs()` never returns a negative number."
   ],
   "explain": "`abs()` returns the absolute value of a number, its distance from zero, so it is never negative.",
   "type": "code"
  },
  {
   "id": "numbers-c03",
   "topic": "numbers",
   "q": "A scientist converts centimetres to metres with a power of ten. What does this code print?",
   "code": "print(pow(10, -2))",
   "options": [
    "`-20`",
    "`-100`",
    "`0.01`",
    "`100`"
   ],
   "answer": 2,
   "hint": "A negative exponent means 'one divided by'.",
   "why": [
    "Misconception: `pow()` raises to a power; it does not multiply the two numbers.",
    "Misconception: a negative exponent gives the reciprocal, not a negative result.",
    "`pow(10, -2)` is 10 to the power -2, which is 1/100.",
    "That would be `pow(10, 2)`; the minus sign in the exponent means divide."
   ],
   "explain": "`pow(base, exp)` raises a number to a power, just like `base ** exp`. A negative exponent produces the reciprocal, e.g. `pow(10, -2)` is `0.01`.",
   "type": "code"
  },
  {
   "id": "numbers-c04",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "reading = float('7')\nprint(reading, float(3))",
   "options": [
    "`7 3`",
    "`ValueError`",
    "`7.0 3`",
    "`7.0 3.0`"
   ],
   "answer": 3,
   "hint": "What type comes out of `float()`, whatever goes in?",
   "why": [
    "Misconception: `float()` always produces a float, and Python shows whole floats with `.0`.",
    "Misconception: `float()` can parse numeric strings such as `'7'`; only non-numeric text raises.",
    "Both calls go through `float()`, so both results are floats.",
    "`float()` converts both a numeric string and an int into a float."
   ],
   "explain": "`float()` converts a value to a float, e.g. `float(5)` is `5.0` and `float('7')` is `7.0`.",
   "type": "code"
  },
  {
   "id": "numbers-c05",
   "topic": "numbers",
   "q": "A timer converts 125 seconds into minutes and seconds. What does this code print?",
   "code": "seconds = 125\nminutes = seconds\nminutes //= 60\nseconds %= 60\nprint(minutes, seconds)",
   "options": [
    "`2 5`",
    "`2.0833333333333335 5`",
    "`5 2`",
    "`2 125`"
   ],
   "answer": 0,
   "hint": "`//` gives the whole quotient and `%` gives the remainder.",
   "why": [
    "`//= 60` stores the floor division (2), and `%= 60` stores the remainder (5).",
    "This confuses `//=` with `/=`; floor division gives a whole number.",
    "This mixes up the operators: `//` gives the quotient and `%` gives the remainder.",
    "Misconception: `%=` also stores its result back in `seconds`."
   ],
   "explain": "Augmented assignment (`+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`) applies the operation and stores the result back in the same variable.",
   "type": "code"
  },
  {
   "id": "numbers-c06",
   "topic": "numbers",
   "q": "What does this code print?",
   "code": "print(int(-3.7), -3.7 // 1)",
   "options": [
    "`-4 -4.0`",
    "`-3 -4.0`",
    "`-3 -3.0`",
    "`-4 -3.0`"
   ],
   "answer": 1,
   "hint": "One of these truncates toward zero, the other always goes down.",
   "why": [
    "Misconception: `int()` doesn't round down; it cuts off the decimals, which moves negative numbers *up* toward zero.",
    "`int()` truncates toward zero (-3.7 becomes -3), while `//` floors toward negative infinity (-4.0).",
    "Misconception: `//` floors, so negative results go down to -4.",
    "Both behaviours are swapped."
   ],
   "explain": "`int()` truncates toward zero, so `int(-3.7)` is `-3`; floor division always rounds down, so `-3.7 // 1` is `-4.0`.",
   "type": "code"
  },
  {
   "id": "functions-c01",
   "topic": "functions",
   "q": "A developer forgot something when using their function. What does this code print?",
   "code": "def greet(name):\n    return f'Hi {name}'\n\nmessage = greet\nprint(message)",
   "options": [
    "`Hi name`",
    "A `TypeError` about a missing argument",
    "Something like `<function greet at 0x10a2b3c40>`",
    "`Hi`"
   ],
   "answer": 2,
   "hint": "What is the difference between `greet` and `greet(...)`?",
   "why": [
    "Misconception: the function isn't called at all, and even when called, `{name}` is replaced by the argument's value.",
    "That would happen with `greet()`; here the function isn't called at all.",
    "Without parentheses, `greet` is the function object itself; it is never called, so `print` shows the function.",
    "Nothing calls `greet`, so no greeting is built."
   ],
   "explain": "Define a function with `def name(params):` and an indented body, and call it with its name followed by parentheses and arguments, e.g. `greet('Ada')`.",
   "type": "code"
  },
  {
   "id": "functions-c02",
   "topic": "functions",
   "q": "In this code, which are the parameters and which are the arguments?",
   "code": "def area(width, height):\n    return width * height\n\nprint(area(3, 5))",
   "options": [
    "Parameters: `3` and `5`; arguments: `width` and `height`",
    "Parameter: `area`; argument: `15`",
    "Parameters and arguments are the same thing, so all four are both",
    "Parameters: `width` and `height`; arguments: `3` and `5`"
   ],
   "answer": 3,
   "hint": "One pair appears in the `def` line; the other appears in the call.",
   "why": [
    "This swaps the terms: the names in `def` are parameters, the values in the call are arguments.",
    "`area` is the function's name and `15` is its return value, neither a parameter nor an argument.",
    "The terms are related but distinct: definition names versus call values.",
    "Parameters are the names in the function definition; arguments are the values passed in when calling it."
   ],
   "explain": "Parameters are the variable names listed in a function definition (`def area(width, height)`); arguments are the actual values supplied in a call (`area(3, 5)`).",
   "type": "concept"
  },
  {
   "id": "functions-c03",
   "topic": "functions",
   "q": "A helper exits early with a bare `return`. What does this code print?",
   "code": "def safe_divide(a, b):\n    if b == 0:\n        return\n    return a / b\n\nprint(safe_divide(10, 0))",
   "options": [
    "`None`",
    "`0`",
    "A `ZeroDivisionError`",
    "An empty line"
   ],
   "answer": 0,
   "hint": "What value does a `return` with nothing after it hand back?",
   "why": [
    "A bare `return` (like no `return` at all) makes the function return `None`, and `print` shows it.",
    "Misconception: a bare `return` gives `None`, not zero.",
    "The function returns before reaching `a / b`, so the division never runs.",
    "Misconception: `print(None)` prints the word `None`, not a blank line."
   ],
   "explain": "A function without an explicit return value, or with a bare `return`, returns `None`.",
   "type": "code"
  },
  {
   "id": "functions-c04",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "def apply_discount(price):\n    price = price * 0.9\n    return price\n\nprice = 100\napply_discount(price)\nprint(price)",
   "options": [
    "`90.0`",
    "`100`",
    "`None`",
    "A `NameError`"
   ],
   "answer": 1,
   "hint": "Parameters are local variables too.",
   "why": [
    "Misconception: the function's `price` is a separate local name, and its result was never stored.",
    "The parameter `price` is a local variable; reassigning it inside the function doesn't touch the global `price`, and the returned value is discarded.",
    "The global `price` is still 100; nothing sets it to `None`.",
    "The global `price` is defined before `print(price)` runs."
   ],
   "explain": "Variables created inside a function, including its parameters, exist only in the function's local scope; to keep a result, assign the return value, e.g. `price = apply_discount(price)`.",
   "type": "code"
  },
  {
   "id": "functions-c05",
   "topic": "functions",
   "q": "What does this code print?",
   "code": "TAX_RATE = 0.21\n\ndef with_tax(amount):\n    return amount + amount * TAX_RATE\n\nprint(with_tax(100))",
   "options": [
    "A `NameError` because `TAX_RATE` is not defined inside the function",
    "`121`",
    "`121.0`",
    "`100`"
   ],
   "answer": 2,
   "hint": "Where was `TAX_RATE` created, and who can read it?",
   "why": [
    "Misconception: global variables can be read inside functions.",
    "Multiplying by the float 0.21 makes the result a float, so it prints `121.0`.",
    "`TAX_RATE` is a global variable, so the function can read it: 100 + 100 * 0.21 = 121.0.",
    "The tax is added in the return expression, so the result is more than 100."
   ],
   "explain": "Variables created outside any function are global: they can be used both inside and outside functions.",
   "type": "code"
  },
  {
   "id": "functions-c06",
   "topic": "functions",
   "q": "A quiz app reads the answer `'4.5'` from `input()` and converts it. What happens?",
   "code": "answer = '4.5'\nnumber = int(answer)\nprint(number)",
   "options": [
    "`number` becomes `4`",
    "`number` becomes `5`",
    "`number` becomes `4.5`",
    "A `ValueError` is raised"
   ],
   "answer": 3,
   "hint": "Can `int()` read a string containing a decimal point?",
   "why": [
    "Misconception: `int()` truncates floats, but it won't parse a decimal *string*; use `int(float(answer))`.",
    "`int()` never rounds, and it can't parse this string anyway.",
    "`int()` can only produce whole numbers; for decimals use `float()`.",
    "`int()` only accepts strings that look like whole numbers; `'4.5'` isn't one."
   ],
   "explain": "`int()` truncates a float to an int (`int(4.5)` is 4), but from a string it only accepts a whole-number representation like `'42'`. A string such as `'4.5'` raises a `ValueError`; use `int(float(answer))` to get 4.",
   "type": "code"
  },
  {
   "id": "conditionals-c01",
   "topic": "conditionals",
   "q": "A ticket site must admit customers who are 18 or older. Which condition is correct?",
   "options": [
    "`age >= 18`",
    "`age > 18`",
    "`age => 18`",
    "`age <= 18`"
   ],
   "answer": 0,
   "hint": "Should an 18-year-old pass the check?",
   "why": [
    "`>=` is 'greater than or equal to', so 18 itself is admitted.",
    "Off-by-one: `>` excludes exactly 18, so 18-year-olds would be turned away.",
    "The operator is written `>=`; `=>` is a `SyntaxError` in Python.",
    "This is reversed: it admits people who are 18 or *younger*."
   ],
   "explain": "Python's comparison operators are `==`, `!=`, `>`, `<`, `>=` and `<=`; each returns `True` or `False`.",
   "type": "concept"
  },
  {
   "id": "conditionals-c02",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "temperature = 18\nif temperature > 20:\n    print('Wear shorts')\nprint('Have a nice day')",
   "options": [
    "`Wear shorts`, then `Have a nice day`",
    "Only `Have a nice day`",
    "Only `Wear shorts`",
    "Nothing"
   ],
   "answer": 1,
   "hint": "Check the condition, then check which lines are indented under it.",
   "why": [
    "Misconception: an `if` block only runs when its condition is `True`.",
    "The condition `18 > 20` is `False`, so the indented block is skipped; the unindented `print` always runs.",
    "The last `print` isn't indented, so it isn't part of the `if` and always runs.",
    "Only the indented line is skipped; the final line is outside the `if`."
   ],
   "explain": "An `if` statement runs its indented block only when the condition is `True`; code after the block runs either way.",
   "type": "code"
  },
  {
   "id": "conditionals-c03",
   "topic": "conditionals",
   "q": "A grading function has its conditions in the wrong order. What does this code print?",
   "code": "score = 95\nif score >= 70:\n    grade = 'C'\nelif score >= 80:\n    grade = 'B'\nelif score >= 90:\n    grade = 'A'\nprint(grade)",
   "options": [
    "`A`",
    "`B`",
    "`C`",
    "A `NameError`"
   ],
   "answer": 2,
   "hint": "Once a branch runs, are the remaining `elif`s still checked?",
   "why": [
    "Misconception: Python doesn't look for the 'best' match; it stops at the first true condition.",
    "The second branch is never checked because the first one already matched.",
    "The first condition that is `True` wins: `95 >= 70` matches, so the `elif` branches are never checked.",
    "`grade` is assigned in the first branch, so it exists when printed."
   ],
   "explain": "An `elif` is only checked when every previous condition was `False`. Order conditions from most to least specific, e.g. `>= 90` first.",
   "type": "code"
  },
  {
   "id": "conditionals-c04",
   "topic": "conditionals",
   "q": "Why does this code fail before it runs?",
   "code": "balance = -20\nif balance > 0:\n    print('OK')\nelse balance <= 0:\n    print('Overdrawn')",
   "options": [
    "`balance` must be declared as a global variable first",
    "`print()` can't be used inside an `else` block",
    "`<=` isn't a valid comparison operator",
    "`else` takes no condition; it should be just `else:` (or `elif balance <= 0:`)"
   ],
   "answer": 3,
   "hint": "Which keyword is not allowed to have a condition?",
   "why": [
    "The code never runs at all: a syntax problem is found before any names are looked up.",
    "Any statement can go inside an `else` block.",
    "`<=` is valid; the problem is putting a condition after `else`.",
    "`else` catches everything not handled above, so a condition after it is a `SyntaxError`."
   ],
   "explain": "The `else` clause runs when none of the preceding `if`/`elif` conditions were `True`, and it never takes a condition of its own.",
   "type": "concept"
  },
  {
   "id": "conditionals-c05",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "logged_in = False\nis_admin = True\n\nif logged_in:\n    if is_admin:\n        print('Admin panel')\n    else:\n        print('User dashboard')\nelse:\n    print('Please log in')",
   "options": [
    "`Please log in`",
    "`Admin panel`",
    "`Admin panel`, then `Please log in`",
    "`User dashboard`"
   ],
   "answer": 0,
   "hint": "Check the outer condition first.",
   "why": [
    "The outer condition is `False`, so the nested `if` is never evaluated and the outer `else` runs.",
    "Misconception: a nested `if` is only reached when its outer block runs.",
    "Only one branch of the outer `if`/`else` can run.",
    "The inner `else` belongs to the nested `if`, which is never reached."
   ],
   "explain": "A nested `if` sits inside another conditional block and is only evaluated when that outer block runs.",
   "type": "code"
  },
  {
   "id": "conditionals-c06",
   "topic": "conditionals",
   "q": "What does this code print?",
   "code": "status = 'active'\nis_active = status == 'active'\nprint(is_active)",
   "options": [
    "`active`",
    "`True`",
    "A `SyntaxError`",
    "`False`"
   ],
   "answer": 1,
   "hint": "One symbol stores a value, the other asks a question.",
   "why": [
    "Misconception: this isn't a chained assignment; the `==` comparison produces `True`.",
    "`==` is evaluated first and returns a boolean, which `=` then assigns to `is_active`.",
    "`=` and `==` can appear on one line: assign the result of a comparison.",
    "`status` holds `'active'`, so the comparison is `True`."
   ],
   "explain": "`=` assigns a value to a variable; `==` compares two values and returns `True` or `False`.",
   "type": "code"
  },
  {
   "id": "booleans-c01",
   "topic": "booleans",
   "q": "A checkout page tests the cart total directly in an `if`. What does this code print?",
   "code": "cart_total = 0.0\nif cart_total:\n    print('Proceed to checkout')\nelse:\n    print('Your cart is empty')",
   "options": [
    "`Proceed to checkout`",
    "A `TypeError`",
    "`Your cart is empty`",
    "Nothing"
   ],
   "answer": 2,
   "hint": "Is `0.0` treated as true or false in a condition?",
   "why": [
    "Misconception: zero values, including `0.0`, are falsy.",
    "An `if` accepts any value, not just booleans; Python uses its truthiness.",
    "`0.0` is falsy, so the condition is treated as `False` and the `else` branch runs.",
    "One branch of an `if`/`else` always runs."
   ],
   "explain": "Every value has a truthiness: falsy values act as `False` in a condition, everything else as `True`.",
   "type": "code"
  },
  {
   "id": "booleans-c02",
   "topic": "booleans",
   "q": "Which group contains only falsy values?",
   "options": [
    "`None`, `0`, `' '`, `'False'`",
    "`False`, `-1`, `0.0`, `''`",
    "`0`, `'0'`, `None`, `False`",
    "`None`, `0`, `0.0`, `''`"
   ],
   "answer": 3,
   "hint": "Non-empty strings are truthy, whatever text they contain.",
   "why": [
    "Misconception: a string with a space, or the text `'False'`, is non-empty and therefore truthy.",
    "Misconception: any non-zero number, including negative ones, is truthy.",
    "Misconception: `'0'` is a non-empty string, so it is truthy.",
    "All four are on Python's list of common falsy values."
   ],
   "explain": "Common falsy values are `None`, `False`, `0`, `0.0` and the empty string `''`; non-zero numbers and non-empty strings are truthy.",
   "type": "concept"
  },
  {
   "id": "booleans-c03",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(bool(-1), bool(' '), bool(0.0))",
   "options": [
    "`True True False`",
    "`False False False`",
    "`False True False`",
    "`True False False`"
   ],
   "answer": 0,
   "hint": "Only zero and the truly empty string are falsy here.",
   "why": [
    "Non-zero numbers (even negative) and non-empty strings (even a single space) are truthy; `0.0` is falsy.",
    "Misconception: negative numbers and whitespace-only strings are still truthy.",
    "Misconception: only zero is falsy among numbers; `-1` is truthy.",
    "Misconception: `' '` contains a space, so it is not the empty string."
   ],
   "explain": "`bool()` converts any value to its boolean equivalent: `True` for truthy values and `False` for falsy ones.",
   "type": "code"
  },
  {
   "id": "booleans-c04",
   "topic": "booleans",
   "q": "What does this code print?",
   "code": "print(5 and 0 and 'x')",
   "options": [
    "`False`",
    "`0`",
    "`x`",
    "`5`"
   ],
   "answer": 1,
   "hint": "Walk left to right and stop at the first falsy value.",
   "why": [
    "Misconception: `and` returns one of its operands, not necessarily `True`/`False`.",
    "`and` returns the first falsy operand: `5` is truthy, so it moves on, and `0` is falsy, so it stops and returns `0`.",
    "Misconception: the last operand is only returned when every earlier operand is truthy.",
    "`5` is truthy, so `and` keeps evaluating instead of returning it."
   ],
   "explain": "`x and y` returns `x` if `x` is falsy, otherwise `y`; chained, it returns the first falsy operand or the last one.",
   "type": "code"
  },
  {
   "id": "booleans-c05",
   "topic": "booleans",
   "q": "A developer uses `or` to give a default quantity, but the customer deliberately entered 0. What does this code print?",
   "code": "quantity = 0\nquantity = quantity or 1\nprint(quantity)",
   "options": [
    "`0`",
    "`True`",
    "`1`",
    "`False`"
   ],
   "answer": 2,
   "hint": "Which operand does `or` return when the left one is falsy?",
   "why": [
    "Misconception: `or` doesn't only replace `None`; it replaces *any* falsy value, including 0.",
    "Misconception: `or` returns one of its operands, not a boolean.",
    "`0` is falsy, so `or` returns the right-hand operand, and the customer's valid 0 is replaced by the default.",
    "`or` returns an operand, and here that operand is `1`."
   ],
   "explain": "`x or y` returns `x` if it is truthy, otherwise `y`. It's handy for defaults, but beware when 0 or `''` are valid values.",
   "type": "code"
  },
  {
   "id": "booleans-c06",
   "topic": "booleans",
   "q": "A report computes an average only when there is data. What does this code print?",
   "code": "count = 0\ntotal = 50\nif count != 0 and total / count > 10:\n    print('High average')\nelse:\n    print('No data or low average')",
   "options": [
    "A `ZeroDivisionError`",
    "`High average`",
    "A `TypeError`",
    "`No data or low average`"
   ],
   "answer": 3,
   "hint": "Does Python evaluate the right side of `and` when the left side is already `False`?",
   "why": [
    "Misconception: Python stops evaluating `and` as soon as the left side is falsy, so it never divides by zero.",
    "The combined condition is `False`, so the `if` block doesn't run.",
    "Comparing numbers and combining them with `and` is fine.",
    "`count != 0` is `False`, so `and` short-circuits and the division on the right is never evaluated."
   ],
   "explain": "`and`/`or` short-circuit: they evaluate left to right and stop as soon as the result is known, so a guard on the left can protect the expression on the right.",
   "type": "code"
  },
  {
   "id": "lists-c01",
   "topic": "lists",
   "q": "A developer wants each character of a username as a separate list element. What does this code print?",
   "code": "letters = list('hey')\nprint(letters)",
   "options": [
    "`'hey'`",
    "`['h', 'e', 'y']`",
    "`['hey']`",
    "`('h', 'e', 'y')`"
   ],
   "answer": 1,
   "hint": "Think about what you get when you loop over a string one item at a time.",
   "why": [
    "`list()` never returns the original string; it builds a new list.",
    "`list()` iterates over the string and puts each character in the new list.",
    "This treats `list()` like wrapping the value in brackets, but `list()` iterates its argument instead.",
    "Parentheses would be a tuple; `list()` always returns a list."
   ],
   "explain": "`list(iterable)` converts any iterable into a list, one element per item; for a string that means one element per character.",
   "type": "code"
  },
  {
   "id": "lists-c02",
   "topic": "lists",
   "q": "A developer tries to add a fourth score by assigning to the next index. What happens?",
   "code": "scores = [70, 85, 90]\nscores[3] = 95\nprint(scores)",
   "options": [
    "`IndexError`",
    "`[70, 85, 90, 95]`",
    "`[70, 85, 95]`",
    "`[70, 85, 90]`"
   ],
   "answer": 0,
   "hint": "Count the valid indexes in a three-item list.",
   "why": [
    "Assignment by index only updates existing positions; index 3 does not exist in a 3-item list, so Python raises `IndexError`.",
    "Assigning past the end does not grow a list; use `append()` to add an item.",
    "Index 3 is not the last item (that is index 2), and the assignment fails before anything changes.",
    "The code does not silently ignore the assignment; it raises an error before `print` runs."
   ],
   "explain": "Lists are mutable, so `my_list[i] = value` updates an item, but only for an index that already exists. Use `append()` or `insert()` to add items.",
   "type": "code"
  },
  {
   "id": "lists-c03",
   "topic": "lists",
   "q": "A project manager removes two tasks with a slice. What does `tasks` contain afterwards?",
   "code": "tasks = ['email', 'call', 'review', 'deploy']\ndel tasks[1:3]\nprint(tasks)",
   "options": [
    "`['email', 'review', 'deploy']`",
    "`['call', 'review']`",
    "`['email']`",
    "`['email', 'deploy']`"
   ],
   "answer": 3,
   "hint": "Remember that a slice `[1:3]` covers two positions.",
   "why": [
    "This only removes index 1; `del` with a slice removes the whole range.",
    "These are the removed items; `del` does not return or keep them.",
    "The slice stops before index 3, so `deploy` is kept.",
    "`del tasks[1:3]` removes indexes 1 and 2 (`stop` is exclusive), leaving the first and last items."
   ],
   "explain": "`del` removes an item by index, or a whole range when given a slice: `del my_list[start:stop]`.",
   "type": "code"
  },
  {
   "id": "lists-c04",
   "topic": "lists",
   "q": "Before adding `city` to `cities`, a developer wants to check that it is not already in the list. Which condition is correct?",
   "options": [
    "`if city in cities == False:`",
    "`if cities.contains(city) is False:`",
    "`if city not in cities:`",
    "`if cities.find(city) == -1:`"
   ],
   "answer": 2,
   "hint": "Python has a single operator for membership tests, plus its negated form.",
   "why": [
    "This is a chained comparison (`city in cities and cities == False`), which is always `False` here.",
    "Lists have no `contains()` method; membership is tested with the `in` operator.",
    "`not in` returns `True` when the item is missing from the list.",
    "`find()` is a string method; lists have no `find()`, so this raises `AttributeError`."
   ],
   "explain": "Use `in` / `not in` to check whether a list contains an item; they return `True` or `False`.",
   "type": "concept"
  },
  {
   "id": "lists-c05",
   "topic": "lists",
   "q": "A developer stores a grid as a list of rows. What does this code print?",
   "code": "matrix = [[1, 2], [3, 4], [5, 6, 7]]\nprint(len(matrix))",
   "options": [
    "`6`",
    "`3`",
    "`7`",
    "`2`"
   ],
   "answer": 1,
   "hint": "Count the items directly inside the outer brackets.",
   "why": [
    "This assumes every row has 2 items and multiplies; `len()` just counts the rows.",
    "`len()` counts top-level items, and `matrix` holds 3 inner lists.",
    "This counts every number inside the rows, but `len()` does not look inside nested lists.",
    "This is the length of the first row only."
   ],
   "explain": "`len()` returns the number of top-level items; a nested list counts as one item.",
   "type": "code"
  },
  {
   "id": "lists-c06",
   "topic": "lists",
   "q": "What does this slice with negative indexes print?",
   "code": "letters = ['a', 'b', 'c', 'd', 'e', 'f']\nprint(letters[-4:-1])",
   "options": [
    "`['c', 'd', 'e']`",
    "`['c', 'd', 'e', 'f']`",
    "`['d', 'e', 'f']`",
    "`['b', 'c', 'd']`"
   ],
   "answer": 0,
   "hint": "Negative indexes count from the end, and the stop position is never included.",
   "why": [
    "Index -4 is `c` and -1 is `f`; `stop` is exclusive, so the slice ends at `e`.",
    "This includes the `stop` position, but slices exclude it.",
    "This starts at -3 instead of -4.",
    "This counts -4 as the fourth item from the start instead of from the end."
   ],
   "explain": "`my_list[start:stop:step]`: `start` is inclusive, `stop` is exclusive, and negative indexes count from the end.",
   "type": "code"
  },
  {
   "id": "list-methods-c01",
   "topic": "list-methods",
   "q": "A teammate empties a shopping cart with this code. What is printed?",
   "code": "cart = ['apple', 'bread']\ncart = cart.clear()\nprint(cart)",
   "options": [
    "`[]`",
    "`['apple', 'bread']`",
    "`AttributeError`",
    "`None`"
   ],
   "answer": 3,
   "hint": "Ask what `clear()` gives back, not what it does to the list.",
   "why": [
    "The list was emptied, but `cart` now holds the return value of `clear()`, not the list.",
    "`clear()` did run and removed the items; the variable just no longer points to the list.",
    "Lists do have a `clear()` method, so no error is raised.",
    "`clear()` empties the list in place and returns `None`, and that `None` is assigned back to `cart`."
   ],
   "explain": "`clear()` removes all items from the list itself and returns `None`; call it on its own line instead of assigning its result.",
   "type": "code"
  },
  {
   "id": "list-methods-c02",
   "topic": "list-methods",
   "q": "A developer needs a new list with the pages in reverse order, keeping `history` unchanged. Which line does that?",
   "code": "history = ['home', 'about', 'contact']",
   "options": [
    "`latest_first = reversed(history)`",
    "`latest_first = history[-1:0:-1]`",
    "`latest_first = history[::-1]`",
    "`latest_first = history.reverse()`"
   ],
   "answer": 2,
   "hint": "You want a copy, so pick the option that builds a new list instead of changing the old one.",
   "why": [
    "`reversed()` returns an iterator, not a list; you would need `list(reversed(history))`.",
    "The stop index 0 is excluded, so this drops `home`, the first page.",
    "A slice with step -1 returns a new reversed list and leaves `history` alone.",
    "`reverse()` reverses `history` in place and returns `None`, so `latest_first` would be `None`."
   ],
   "explain": "`reverse()` changes the list in place and returns `None`; `my_list[::-1]` returns a reversed copy.",
   "type": "concept"
  },
  {
   "id": "list-methods-c03",
   "topic": "list-methods",
   "q": "A help desk serves customers from the front of a queue. What does this code print?",
   "code": "queue = ['Ana', 'Ben', 'Cy']\nserved = queue.pop(0)\nprint(served, queue)",
   "options": [
    "`0 ['Ben', 'Cy']`",
    "`Ana ['Ben', 'Cy']`",
    "`Cy ['Ana', 'Ben']`",
    "`None ['Ben', 'Cy']`"
   ],
   "answer": 1,
   "hint": "The argument to `pop()` is a position, and `pop()` hands back what it removed.",
   "why": [
    "`pop()` returns the item itself, not its index.",
    "`pop(0)` removes the item at index 0 and returns it.",
    "Without an argument `pop()` takes the last item, but here index 0 is given.",
    "`pop()` returns the removed item, unlike most list methods."
   ],
   "explain": "`pop(index)` removes and returns the item at that index; with no argument it uses the last item.",
   "type": "code"
  },
  {
   "id": "list-methods-c04",
   "topic": "list-methods",
   "q": "A developer extends a list of tags with a string. What does this code print?",
   "code": "tags = ['py']\ntags.extend('js')\nprint(tags)",
   "options": [
    "`['py', 'j', 's']`",
    "`['py', 'js']`",
    "`['pyjs']`",
    "`TypeError`"
   ],
   "answer": 0,
   "hint": "Think about what `extend()` does with each item of whatever you pass it.",
   "why": [
    "`extend()` adds each item of the iterable separately, and a string iterates character by character.",
    "That is what `append('js')` would do; `extend()` unpacks its argument.",
    "`extend()` never concatenates with existing items; it adds new elements.",
    "A string is an iterable, so `extend()` accepts it."
   ],
   "explain": "`append(x)` adds `x` as one item; `extend(iterable)` adds every item of the iterable, so a string adds one element per character.",
   "type": "code"
  },
  {
   "id": "list-methods-c05",
   "topic": "list-methods",
   "q": "An event app removes a guest who is not on the list. What happens?",
   "code": "guests = ['Ana', 'Ben']\nguests.remove('Cy')\nprint(guests)",
   "options": [
    "`KeyError`",
    "`['Ana', 'Ben']` (the call is ignored)",
    "`IndexError`",
    "`ValueError`"
   ],
   "answer": 3,
   "hint": "The error type describes a value that could not be found.",
   "why": [
    "`KeyError` comes from dictionaries and `set.remove()`, not lists.",
    "Lists have no silent remove like `set.discard()`; a missing value is an error.",
    "`remove()` searches by value, not by index, so the error is not about an index.",
    "`remove()` raises `ValueError` when the value is not in the list."
   ],
   "explain": "`list.remove(value)` deletes the first matching item and raises `ValueError` if there is none; check with `in` first when unsure.",
   "type": "code"
  },
  {
   "id": "list-methods-c06",
   "topic": "list-methods",
   "q": "Starting from `nums = [3, 1, 2]`, which assignment leaves `result` holding something other than `None`?",
   "code": "nums = [3, 1, 2]",
   "options": [
    "`result = nums.insert(0, 9)`",
    "`result = nums.remove(1)`",
    "`result = nums.pop()`",
    "`result = nums.append(4)`"
   ],
   "answer": 2,
   "hint": "Only one of these methods hands back the item it took out.",
   "why": [
    "`insert()` changes the list and returns `None`.",
    "`remove()` changes the list and returns `None`.",
    "`pop()` is the exception among in-place methods: it returns the removed item (`2`).",
    "`append()` changes the list and returns `None`."
   ],
   "explain": "`append`, `extend`, `insert`, `remove`, `clear`, `sort` and `reverse` modify the list and return `None`; `pop()` returns the removed item.",
   "type": "concept"
  },
  {
   "id": "tuples-c01",
   "topic": "tuples",
   "q": "Which values here are tuples? What does this code print?",
   "code": "a = ('Alice')\nb = ('Alice',)\nc = 'Alice', 34\nprint(type(a).__name__, type(b).__name__, type(c).__name__)",
   "options": [
    "`tuple tuple str`",
    "`str tuple tuple`",
    "`tuple tuple tuple`",
    "`str tuple str`"
   ],
   "answer": 1,
   "hint": "Look for the commas, not the parentheses.",
   "why": [
    "Both mistakes combined: parentheses alone don't make a tuple, and a bare comma does.",
    "The comma makes a tuple: `('Alice',)` and `'Alice', 34` are tuples, while `('Alice')` is just a string in parentheses.",
    "Parentheses alone do not create a tuple; `('Alice')` is a string.",
    "`'Alice', 34` is a tuple even without parentheses, because of the comma."
   ],
   "explain": "A tuple is an ordered, immutable sequence that can mix types; it is the comma that creates it, so a one-item tuple needs a trailing comma.",
   "type": "code"
  },
  {
   "id": "tuples-c02",
   "topic": "tuples",
   "q": "A function returns a one-item tuple and the caller unpacks it with `*`. What is `tail`?",
   "code": "head, *tail = ('solo',)\nprint(tail)",
   "options": [
    "`[]`",
    "`()`",
    "`None`",
    "`ValueError`"
   ],
   "answer": 0,
   "hint": "Think about the type a starred name collects into, even when nothing is left over.",
   "why": [
    "The starred variable always becomes a list, even when it collects nothing.",
    "The source is a tuple, but starred unpacking always produces a list.",
    "A starred name is never `None`; it gets an empty list when there is nothing left.",
    "One value is enough: it goes to `head` and the starred name takes the remaining zero items."
   ],
   "explain": "With `first, *rest = sequence`, `rest` is always a list, possibly empty.",
   "type": "code"
  },
  {
   "id": "tuples-c03",
   "topic": "tuples",
   "q": "A developer counts votes with `count()` but forgets the argument. What happens?",
   "code": "votes = ('yes', 'no', 'yes')\nprint(votes.count())",
   "options": [
    "`3`",
    "`0`",
    "`ValueError`",
    "`TypeError`"
   ],
   "answer": 3,
   "hint": "The method needs to know what to count.",
   "why": [
    "`count()` does not count all items; that is what `len()` does.",
    "There is no default value to count; the missing argument is an error.",
    "The problem is a missing argument, which Python reports as `TypeError`.",
    "`count()` requires exactly one argument, the item to count, so calling it empty raises `TypeError`."
   ],
   "explain": "`tuple.count(item)` returns how many times `item` appears (0 if absent); calling it without an argument raises `TypeError`.",
   "type": "code"
  },
  {
   "id": "tuples-c04",
   "topic": "tuples",
   "q": "A developer searches part of a tuple with `index(item, start, end)`. What does this code print?",
   "code": "langs = ('Go', 'Rust', 'Go', 'Java', 'Go')\nprint(langs.index('Go', 1, 3))",
   "options": [
    "`0`",
    "`4`",
    "`2`",
    "`1`"
   ],
   "answer": 2,
   "hint": "The search window starts at 1 and stops before 3.",
   "why": [
    "Index 0 is before `start`, so it is skipped.",
    "`index()` returns the first match in the range, not the last occurrence, and index 4 is outside the range.",
    "The search covers indexes 1 and 2; the first `Go` there is at index 2, and `index()` reports positions in the whole tuple.",
    "The result is not relative to `start`; it is the position in the full tuple."
   ],
   "explain": "`t.index(item, start, end)` searches from `start` up to but not including `end` and returns the position in the whole tuple, or raises `ValueError`.",
   "type": "code"
  },
  {
   "id": "tuples-c05",
   "topic": "tuples",
   "q": "A developer needs `desserts` without `'pie'`. Which line works?",
   "code": "desserts = ('cake', 'pie', 'cookies')",
   "options": [
    "`desserts.pop(1)`",
    "`desserts = desserts[:1] + desserts[2:]`",
    "`del desserts[1]`",
    "`desserts.remove('pie')`"
   ],
   "answer": 1,
   "hint": "You cannot change a tuple, but you can build a new one.",
   "why": [
    "Tuples have no `pop()` method; this raises `AttributeError`.",
    "Slicing and `+` build a new tuple without the item, which is then assigned to the name.",
    "Tuples are immutable, so deleting an item raises `TypeError`.",
    "Tuples have no `remove()` method because they cannot change; this raises `AttributeError`."
   ],
   "explain": "Tuples are immutable: you cannot delete their items. Create a new tuple, for example with slices and `+`. **Review note:** the freeCodeCamp review says removing an item from a tuple raises a `TypeError`. That is what `del desserts[1]` does; `remove()` and `pop()` raise `AttributeError` instead, because tuples don't have those methods at all.",
   "type": "concept"
  },
  {
   "id": "tuples-c06",
   "topic": "tuples",
   "q": "A leaderboard ranks scores from highest to lowest. What does this code print?",
   "code": "scores = (72, 95, 88)\nranked = sorted(scores, reverse=True)\nprint(ranked, scores)",
   "options": [
    "`[95, 88, 72] (72, 95, 88)`",
    "`(95, 88, 72) (72, 95, 88)`",
    "`(95, 88, 72) (95, 88, 72)`",
    "`[72, 88, 95] (72, 95, 88)`"
   ],
   "answer": 0,
   "hint": "Check the type `sorted()` returns, and whether it touches the original.",
   "why": [
    "`sorted()` returns a new list, here in descending order, and the tuple stays as it was.",
    "`sorted()` always returns a list, even for a tuple.",
    "A tuple can't be sorted in place, and `sorted()` never changes its input.",
    "`reverse=True` sorts in descending order."
   ],
   "explain": "`sorted(iterable, reverse=True)` returns a new list in descending order and leaves the original unchanged.",
   "type": "code"
  },
  {
   "id": "loops-c01",
   "topic": "loops",
   "q": "A developer counts letters with a `for` loop over a string. What does this code print?",
   "code": "count = 0\nfor ch in 'banana':\n    if ch == 'a':\n        count += 1\nprint(count)",
   "options": [
    "`6`",
    "`1`",
    "`TypeError`",
    "`3`"
   ],
   "answer": 3,
   "hint": "A `for` loop over a string gives you one character per iteration.",
   "why": [
    "`count` only increases when the character is `a`, not for every character.",
    "The loop does not stop at the first match; there is no `break`.",
    "Strings are sequences, so a `for` loop can iterate over them.",
    "The loop visits each of the 6 characters and counts the three `a`s."
   ],
   "explain": "A `for` loop runs its block once per item of a sequence; for a string, the items are its characters.",
   "type": "code"
  },
  {
   "id": "loops-c02",
   "topic": "loops",
   "q": "A teammate's countdown never stops. Which change fixes it so it prints 3, 2, 1 and then `Liftoff!`?",
   "code": "n = 3\nwhile n > 0:\n    print(n)\nprint('Liftoff!')",
   "options": [
    "Change the condition to `while n >= 0:`",
    "Add `break` inside the loop, before `print(n)`",
    "Add `n -= 1` inside the loop, after `print(n)`",
    "Add `n -= 1` after the loop, before `print('Liftoff!')`"
   ],
   "answer": 2,
   "hint": "Something inside the loop has to change the value the condition checks.",
   "why": [
    "`n` still never changes, so this condition stays `True` forever too.",
    "This ends the loop, but before printing anything, so the countdown is lost.",
    "Changing `n` inside the loop makes the condition eventually `False`.",
    "Code after the loop never runs, because the loop itself never ends."
   ],
   "explain": "A `while` loop repeats while its condition is `True`; something inside the loop must change that condition or it runs forever.",
   "type": "concept"
  },
  {
   "id": "loops-c03",
   "topic": "loops",
   "q": "A developer counts every (x, y) combination with nested loops. What does this code print?",
   "code": "pairs = 0\nfor x in range(2):\n    for y in range(3):\n        pairs += 1\nprint(pairs)",
   "options": [
    "`2`",
    "`6`",
    "`5`",
    "`3`"
   ],
   "answer": 1,
   "hint": "How many times does the inner loop run in total?",
   "why": [
    "This counts only the outer iterations.",
    "The inner loop runs fully (3 times) for each of the 2 outer iterations: 2 x 3 = 6.",
    "This adds the loop sizes; nested loops multiply them.",
    "This counts the inner loop only once, ignoring that it repeats for every outer iteration."
   ],
   "explain": "In nested loops the inner loop runs completely for every iteration of the outer loop, so the counts multiply.",
   "type": "code"
  },
  {
   "id": "loops-c04",
   "topic": "loops",
   "q": "What happens when this loop runs?",
   "code": "for i in range():\n    print(i)",
   "options": [
    "`TypeError`",
    "Nothing is printed (an empty range)",
    "It counts up from 0 forever",
    "`ValueError`"
   ],
   "answer": 0,
   "hint": "Which argument of `range()` is required?",
   "why": [
    "`range()` needs at least the `stop` argument, so calling it with none raises `TypeError`.",
    "`range()` has no empty default; an empty range would need something like `range(0)`.",
    "`range()` is always finite; it never counts forever.",
    "A missing argument is a `TypeError`, not a `ValueError`."
   ],
   "explain": "`range()` requires `stop`; `range(stop)`, `range(start, stop)` and `range(start, stop, step)` are valid, `range()` is not.",
   "type": "code"
  },
  {
   "id": "loops-c05",
   "topic": "loops",
   "q": "A developer needs the numbers 1 through 5. Which call produces exactly those?",
   "options": [
    "`range(5)`",
    "`range(1, 5)`",
    "`range(0, 6)`",
    "`range(1, 6)`"
   ],
   "answer": 3,
   "hint": "The stop value is never part of the result.",
   "why": [
    "`start` defaults to 0, so this gives 0 to 4.",
    "`stop` is excluded, so this stops at 4.",
    "This includes 0 because `start` is 0.",
    "`start` 1 is included and `stop` 6 is excluded, giving 1, 2, 3, 4, 5."
   ],
   "explain": "`range(start, stop, step)`: `start` defaults to 0, `step` to 1, and `stop` is required and excluded.",
   "type": "concept"
  },
  {
   "id": "loops-c06",
   "topic": "loops",
   "q": "A login retry loop has an `else` clause. What does this code print?",
   "code": "attempts = 0\nwhile attempts < 3:\n    attempts += 1\n    if attempts == 2:\n        break\nelse:\n    print('gave up')\nprint(attempts)",
   "options": [
    "`3`",
    "`gave up` then `3`",
    "`2`",
    "`gave up` then `2`"
   ],
   "answer": 2,
   "hint": "Did this loop end normally or through `break`?",
   "why": [
    "The `break` stops the loop at 2, before a third attempt.",
    "The loop never reaches 3 attempts, and `break` skips the `else`.",
    "The loop ends with `break` when `attempts` is 2, so the `else` block is skipped.",
    "The `else` of a loop only runs when the loop finishes without `break`."
   ],
   "explain": "A loop's `else` block runs only when the loop ends without `break`, which is useful for \"searched everything, found nothing\" logic.",
   "type": "code"
  },
  {
   "id": "iteration-c01",
   "topic": "iteration",
   "q": "A race app prints the finishing position of `Sam`. What does this code print?",
   "code": "racers = ['Mo', 'Liv', 'Sam']\nfor place, name in enumerate(racers):\n    if name == 'Sam':\n        print(place)",
   "options": [
    "`Sam`",
    "`2`",
    "`3`",
    "`(2, 'Sam')`"
   ],
   "answer": 1,
   "hint": "Where does `enumerate()` start counting when you give it no `start`?",
   "why": [
    "`place` holds the index, not the name.",
    "`enumerate()` starts counting at 0 by default, and `Sam` is the third item.",
    "That would need `enumerate(racers, 1)`; the default start is 0.",
    "The pair is unpacked into `place` and `name`, and only `place` is printed."
   ],
   "explain": "`enumerate(iterable, start=0)` yields `(index, value)` pairs, counting from 0 unless you pass `start`.",
   "type": "code"
  },
  {
   "id": "iteration-c02",
   "topic": "iteration",
   "q": "A developer builds a lookup table from two lists. What does this code print?",
   "code": "keys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\nprint(dict(zip(keys, values)))",
   "options": [
    "`{'a': 1, 'b': 2, 'c': 3}`",
    "`[('a', 1), ('b', 2), ('c', 3)]`",
    "`{'a': [1, 2, 3]}`",
    "`TypeError`"
   ],
   "answer": 0,
   "hint": "What does `zip()` yield on each step, and what does `dict()` accept?",
   "why": [
    "`zip()` pairs the items as `(key, value)` tuples, and `dict()` turns those pairs into a dictionary.",
    "That is `list(zip(...))`; here the pairs go into `dict()` instead.",
    "`zip()` pairs items one by one; it does not attach a whole list to one key.",
    "`dict()` accepts any iterable of 2-item pairs, which is exactly what `zip()` yields."
   ],
   "explain": "`zip()` iterates several iterables in parallel, yielding tuples (stopping at the shortest); `dict(zip(keys, values))` is a common way to build a dictionary.",
   "type": "code"
  },
  {
   "id": "iteration-c03",
   "topic": "iteration",
   "q": "A signup form keeps only addresses that contain `@`. What does this code print?",
   "code": "emails = ['ana@x.com', 'ben', 'cy@y.org']\nvalid = [e.upper() for e in emails if '@' in e]\nprint(valid)",
   "options": [
    "`['ANA@X.COM', 'BEN', 'CY@Y.ORG']`",
    "`[True, False, True]`",
    "`['ana@x.com', 'cy@y.org']`",
    "`['ANA@X.COM', 'CY@Y.ORG']`"
   ],
   "answer": 3,
   "hint": "Read the comprehension as: expression, then loop, then filter.",
   "why": [
    "The `if` clause filters items; `ben` has no `@`, so it is left out.",
    "The condition decides which items are included; the expression before `for` decides what is stored.",
    "The expression `e.upper()` is applied to every included item.",
    "The `if` filters out `ben`, and the expression `e.upper()` transforms the items that pass."
   ],
   "explain": "`[expression for item in iterable if condition]` keeps items where the condition is true and stores the expression's result for each.",
   "type": "code"
  },
  {
   "id": "iteration-c04",
   "topic": "iteration",
   "q": "Which lambda behaves the same as `def is_even(n): return n % 2 == 0`?",
   "options": [
    "`lambda(n): n % 2 == 0`",
    "`lambda n: {n % 2 == 0}`",
    "`lambda n: n % 2 == 0`",
    "`lambda n: return n % 2 == 0`"
   ],
   "answer": 2,
   "hint": "A lambda body is a single expression whose value is returned.",
   "why": [
    "Lambda parameters are not wrapped in parentheses; this is a `SyntaxError`.",
    "The braces make the lambda return a set containing the boolean, not the boolean itself.",
    "Parameters go before the colon and the single expression after it is returned automatically.",
    "A lambda cannot contain `return`; this is a `SyntaxError`."
   ],
   "explain": "A lambda is an anonymous one-expression function: `lambda params: expression`, with no `return` keyword.",
   "type": "concept"
  },
  {
   "id": "iteration-c05",
   "topic": "iteration",
   "q": "A game adds a starting bonus of 10 to the points from two rounds (5 and 10). Which call returns `25`?",
   "options": [
    "`sum([5, 10], 10, 10)`",
    "`sum([5, 10], start=10)`",
    "`sum([5, 10, 10], start=10)`",
    "`sum(5, 10, start=10)`"
   ],
   "answer": 1,
   "hint": "The first argument must be a single iterable; the bonus belongs somewhere else.",
   "why": [
    "`sum()` takes at most two positional arguments (iterable and start); this raises `TypeError`.",
    "`start` sets the initial value: 10 + 5 + 10 = 25.",
    "This adds the bonus twice (once in the list and once as `start`), giving 35.",
    "`sum()` needs one iterable as its first argument, not separate numbers; this raises `TypeError`."
   ],
   "explain": "`sum(iterable, start=0)` adds the items to `start`; pass `start` by position or keyword.",
   "type": "concept"
  },
  {
   "id": "iteration-c06",
   "topic": "iteration",
   "q": "What does this code print?",
   "code": "nums = [0, 1, 2, 3]\na = list(filter(lambda n: n % 2, nums))\nb = list(map(lambda n: n % 2, nums))\nprint(a, b)",
   "options": [
    "`[1, 3] [0, 1, 0, 1]`",
    "`[0, 1, 0, 1] [1, 3]`",
    "`[1, 3] [1, 3]`",
    "`[0, 2] [0, 1, 0, 1]`"
   ],
   "answer": 0,
   "hint": "One function selects items, the other transforms every item.",
   "why": [
    "`filter()` keeps the items where the function returns a truthy value (odd numbers give 1); `map()` stores the function's result for every item.",
    "This swaps the two: `filter()` selects items, `map()` transforms them.",
    "`map()` does not drop items; it returns one result per input.",
    "`filter()` keeps items whose result is truthy, so 0 results (even numbers) are dropped, not kept."
   ],
   "explain": "`filter(func, it)` keeps items where `func` is truthy; `map(func, it)` applies `func` to every item. Both return iterators.",
   "type": "code"
  },
  {
   "id": "dicts-c01",
   "topic": "dicts",
   "q": "A stock dictionary is written with the same key twice. What does this code print?",
   "code": "inventory = {'apple': 3, 'pear': 2, 'apple': 7}\nprint(inventory)",
   "options": [
    "`{'apple': 3, 'pear': 2}`",
    "`{'apple': 3, 'pear': 2, 'apple': 7}`",
    "`{'apple': 10, 'pear': 2}`",
    "`{'apple': 7, 'pear': 2}`"
   ],
   "answer": 3,
   "hint": "Can a dictionary hold two entries with the same key?",
   "why": [
    "The first value is not kept; the last assignment to a key wins.",
    "A dictionary cannot hold the same key twice.",
    "Duplicate keys overwrite; Python never adds the values together.",
    "Keys are unique, so the later value for `apple` replaces the earlier one."
   ],
   "explain": "Dictionary keys must be unique (and immutable); assigning to an existing key replaces its value.",
   "type": "code"
  },
  {
   "id": "dicts-c02",
   "topic": "dicts",
   "q": "A developer stores `prices.keys()` and then adds a new item. What does this code print?",
   "code": "prices = {'tea': 2}\nkeys = prices.keys()\nprices['coffee'] = 3\nprint(len(keys))",
   "options": [
    "`TypeError`",
    "`0`",
    "`2`",
    "`1`"
   ],
   "answer": 2,
   "hint": "Is `keys()` a copy, or a live window onto the dictionary?",
   "why": [
    "View objects support `len()`.",
    "The view is never empty here; the dictionary has two keys.",
    "`keys()` returns a view that reflects the dictionary's current content, so it sees the new key.",
    "A view is not a snapshot copy; it updates when the dictionary changes."
   ],
   "explain": "`keys()`, `values()` and `items()` return view objects that always show the dictionary's current content without copying it.",
   "type": "code"
  },
  {
   "id": "dicts-c03",
   "topic": "dicts",
   "q": "What does this loop over a dictionary print?",
   "code": "products = {'Laptop': 990, 'Tablet': 250}\nfor item in products:\n    print(item, end=' ')",
   "options": [
    "`ValueError`",
    "`Laptop Tablet`",
    "`990 250`",
    "`('Laptop', 990) ('Tablet', 250)`"
   ],
   "answer": 1,
   "hint": "What does a dictionary yield when you loop over it without calling a method?",
   "why": [
    "Each iteration yields one key, which fits the single loop variable.",
    "Looping over a dictionary directly gives its keys.",
    "Values come from `products.values()`, not from looping over the dictionary itself.",
    "Pairs come from `products.items()`."
   ],
   "explain": "Iterating over a dictionary gives its keys, the same as looping over `dict.keys()`.",
   "type": "code"
  },
  {
   "id": "dicts-c04",
   "topic": "dicts",
   "q": "A teammate's loop is meant to print each product with its price. What happens?",
   "code": "products = {'Laptop': 990, 'Tablet': 250}\nfor product, price in products:\n    print(product, price)",
   "options": [
    "`ValueError`",
    "It prints `Laptop 990` and `Tablet 250`",
    "`KeyError`",
    "It prints `L a` and `T a`"
   ],
   "answer": 0,
   "hint": "What does the loop yield on each step, and can it be split into two names?",
   "why": [
    "Looping over the dictionary gives only the keys, and each key string has more than two characters to unpack into two variables.",
    "That needs `products.items()`, which yields `(key, value)` pairs.",
    "No key is looked up, so there is no `KeyError`.",
    "Unpacking a string requires exactly as many variables as characters; `Laptop` has 6."
   ],
   "explain": "To get keys and values together, loop over `dict.items()`: `for product, price in products.items():`.",
   "type": "code"
  },
  {
   "id": "dicts-c05",
   "topic": "dicts",
   "q": "A logout function clears the session dictionary. What does this code print?",
   "code": "session = {'user': 'ana', 'token': 'x1'}\nactive = session\nsession.clear()\nprint(active, len(session))",
   "options": [
    "`{'user': 'ana', 'token': 'x1'} 0`",
    "`None 0`",
    "`{} 2`",
    "`{} 0`"
   ],
   "answer": 3,
   "hint": "Is `active` a copy, or another name for the same dictionary?",
   "why": [
    "`active = session` does not copy; both names point to one dictionary.",
    "`clear()` returned `None`, but its result was not assigned; `active` still points to the (now empty) dictionary.",
    "`len(session)` reflects the cleared dictionary.",
    "`active` and `session` name the same dictionary, and `clear()` empties that dictionary in place."
   ],
   "explain": "`dict.clear()` removes all key-value pairs from the dictionary itself, leaving `{}`; every name pointing to it sees the change.",
   "type": "code"
  },
  {
   "id": "dicts-c06",
   "topic": "dicts",
   "q": "A shop records a sale of an item that is not in stock. What happens?",
   "code": "stock = {'apples': 5}\nsold = stock.pop('pears')\nprint(sold)",
   "options": [
    "`0` is printed",
    "`ValueError`",
    "`KeyError`",
    "`None` is printed"
   ],
   "answer": 2,
   "hint": "Is there a fallback value in this `pop()` call?",
   "why": [
    "There is no default of 0; you would need `stock.pop('pears', 0)`.",
    "Missing dictionary keys raise `KeyError`, not `ValueError`.",
    "`pop()` without a default raises `KeyError` for a missing key.",
    "`pop()` only falls back when you pass a default; it does not return `None` by itself."
   ],
   "explain": "`dict.pop(key)` removes and returns the value, raising `KeyError` if the key is missing; `dict.pop(key, default)` returns the default instead.",
   "type": "code"
  },
  {
   "id": "sets-c01",
   "topic": "sets",
   "q": "A developer tries to read the first color of a set. What happens?",
   "code": "colors = {'red', 'green', 'blue'}\nprint(colors[0])",
   "options": [
    "`KeyError`",
    "`TypeError`",
    "`'red'` is printed",
    "`IndexError`"
   ],
   "answer": 1,
   "hint": "Can you use positions with an unordered collection?",
   "why": [
    "Sets are not looked up by key; the subscription itself is not allowed.",
    "Sets are unordered and don't support indexing, so `colors[0]` raises `TypeError`.",
    "Sets have no first element you can index; their order is not guaranteed.",
    "An `IndexError` would need indexing to be supported in the first place."
   ],
   "explain": "A set is a mutable, unordered collection of unique, immutable elements; you check membership with `in` instead of using indexes.",
   "type": "code"
  },
  {
   "id": "sets-c02",
   "topic": "sets",
   "q": "A developer cleans up tags with `discard()`. What does this code print?",
   "code": "tags = {'python', 'sql'}\ntags.discard('java')\ntags.discard('sql')\nprint(sorted(tags))",
   "options": [
    "`['python']`",
    "`KeyError`",
    "`['python', 'sql']`",
    "`[]`"
   ],
   "answer": 0,
   "hint": "One of the two removal methods is silent when the element is missing.",
   "why": [
    "`discard()` ignores the missing `java` and removes `sql`.",
    "Only `remove()` raises `KeyError` for a missing element; `discard()` does nothing.",
    "The second call does remove `sql`, because it is in the set.",
    "`python` is never discarded."
   ],
   "explain": "Both `remove()` and `discard()` delete an element; `remove()` raises `KeyError` if it's missing, `discard()` does not.",
   "type": "code"
  },
  {
   "id": "sets-c03",
   "topic": "sets",
   "q": "A team lead combines two teams' skills. What does this code print?",
   "code": "team_a = {'python', 'sql'}\nteam_b = {'sql', 'docker'}\nprint(sorted(team_a | team_b))",
   "options": [
    "`['sql']`",
    "`['docker', 'python']`",
    "`['docker', 'python', 'sql', 'sql']`",
    "`['docker', 'python', 'sql']`"
   ],
   "answer": 3,
   "hint": "The `|` operator means \"in either set\".",
   "why": [
    "That is the intersection (`&`).",
    "That is the symmetric difference (`^`).",
    "A set never holds duplicates, so `sql` appears once.",
    "`|` is union: every element from either set, with duplicates appearing once."
   ],
   "explain": "The union operator `|` returns a new set with all elements of both sets.",
   "type": "code"
  },
  {
   "id": "sets-c04",
   "topic": "sets",
   "q": "A setup script checks whether all needed tools are installed. What does this code print?",
   "code": "needed = {'python', 'git'}\ninstalled = {'python', 'git', 'docker'}\nprint(installed.issuperset(needed), needed.issuperset(installed))",
   "options": [
    "`True True`",
    "`False False`",
    "`True False`",
    "`False True`"
   ],
   "answer": 2,
   "hint": "A superset contains every element of the other set.",
   "why": [
    "Two sets are supersets of each other only when they are equal.",
    "`installed` does contain everything in `needed`.",
    "`installed` contains every element of `needed`, so it is a superset; `needed` lacks `docker`, so it is not a superset of `installed`.",
    "This mixes up superset and subset."
   ],
   "explain": "`a.issuperset(b)` is `True` when `a` contains every element of `b`; it mirrors `b.issubset(a)`.",
   "type": "code"
  },
  {
   "id": "sets-c05",
   "topic": "sets",
   "q": "An analytics script counts the distinct pages visited. What does this code print?",
   "code": "visits = ['home', 'blog', 'home', 'shop', 'blog']\nunique = list(set(visits))\nprint(len(unique))",
   "options": [
    "`TypeError`",
    "`3`",
    "`5`",
    "`2`"
   ],
   "answer": 1,
   "hint": "What does a set do with repeated values?",
   "why": [
    "`set()` accepts any iterable of hashable items, such as a list of strings.",
    "Converting to a set drops duplicates, leaving `home`, `blog` and `shop`.",
    "This counts every visit, including duplicates.",
    "This counts only the pages that were visited more than once."
   ],
   "explain": "`set(my_list)` removes duplicates; convert back with `list()` if you need a list, keeping in mind the order is not guaranteed.",
   "type": "code"
  },
  {
   "id": "sets-c06",
   "topic": "sets",
   "q": "A spam filter checks every incoming address against a million blocked addresses. Why store them in a set rather than a list?",
   "options": [
    "`in` on a set is O(1) on average because sets use hashing, while `in` on a list checks items one by one",
    "Sets keep their items sorted, so Python can binary-search them",
    "Sets support indexing, so a lookup jumps straight to the item",
    "`in` only works on sets and dictionaries, not on lists"
   ],
   "answer": 0,
   "hint": "Think about how a set finds an element without scanning.",
   "why": [
    "Sets are hash-based, so a membership test usually takes constant time instead of scanning the whole collection.",
    "Sets are unordered; they don't sort their items.",
    "Sets don't support indexing at all.",
    "`in` works on lists too; it is just slower there, O(n)."
   ],
   "explain": "Membership tests with `in` are fast on sets (O(1) on average) because sets are hash-based; on lists they are O(n).",
   "type": "concept"
  },
  {
   "id": "modules-c01",
   "topic": "modules",
   "q": "A developer must check that user-entered email addresses match a pattern like `name@domain.com`, without installing any third-party package. Which standard library module is built for this?",
   "options": [
    "`re`",
    "`random`",
    "`datetime`",
    "`math`"
   ],
   "answer": 0,
   "hint": "Think about which module name is short for a tool that describes text patterns.",
   "why": [
    "`re` (regular expressions) ships with Python and matches text against patterns like an email format.",
    "`random` generates random numbers and choices; it has no pattern-matching tools.",
    "`datetime` works with dates and times, not text patterns.",
    "`math` provides numeric functions such as `sqrt()`; it cannot inspect strings."
   ],
   "explain": "The standard library ships ready-made modules: `re` for text patterns, `math` for numbers, `random` for randomness and `datetime` for dates.",
   "type": "concept"
  },
  {
   "id": "modules-c02",
   "topic": "modules",
   "q": "After `import math`, which line prints `3.141592653589793`?",
   "code": "import math\n\n# which line goes here?",
   "options": [
    "`print(pi)`",
    "`print(math.pi)`",
    "`print(math.pi())`",
    "`print(math[pi])`"
   ],
   "answer": 1,
   "hint": "With a plain `import`, every element is reached through the module name.",
   "why": [
    "`import math` does not put `pi` into your namespace, so a bare `pi` raises a `NameError`.",
    "A plain `import math` binds the module name, so its elements are reached with dot notation: `math.pi`.",
    "`math.pi` is a float constant, not a function; calling it raises `TypeError: 'float' object is not callable`.",
    "Modules are not dictionaries or lists; square brackets do not access their contents."
   ],
   "explain": "`import module` gives you the module object; access its functions and constants with dot notation, e.g. `math.pi` or `math.sqrt(36)`.",
   "type": "concept"
  },
  {
   "id": "modules-c03",
   "topic": "modules",
   "q": "What happens when this script runs?",
   "code": "import math as m\n\nprint(math.floor(4.7))",
   "options": [
    "`4` is printed",
    "`5` is printed",
    "`NameError: name 'math' is not defined`",
    "`ImportError`, because aliases are only allowed for long module names"
   ],
   "answer": 2,
   "hint": "Ask yourself which name `import ... as ...` actually creates.",
   "why": [
    "This would be the output of `m.floor(4.7)`, but the code uses the original name, which the alias replaced.",
    "`floor()` rounds down, so even a working call would give 4, not 5.",
    "`import math as m` binds only the alias `m`; the name `math` itself is never defined in this script.",
    "Any module can get an alias; `as` never raises an `ImportError` because of the name length."
   ],
   "explain": "With `import math as m`, use the alias (`m.floor(4.7)`); the original module name is not available unless you import it separately.",
   "type": "code"
  },
  {
   "id": "modules-c04",
   "topic": "modules",
   "q": "A script calls `sqrt(25)` and `floor(2.5)` with no `math.` prefix. Which import makes exactly those two names available, and nothing else from `math`?",
   "options": [
    "`import math.sqrt, math.floor`",
    "`from math import *`",
    "`import sqrt, floor from math`",
    "`from math import sqrt, floor`"
   ],
   "answer": 3,
   "hint": "The statement starts with the module, then names the specific pieces you want.",
   "why": [
    "`import` takes module names, not functions; `math.sqrt` is not a module, so this raises `ModuleNotFoundError`.",
    "This makes the names usable without a prefix, but it imports every public name in `math`, not just the two you need.",
    "That is the wrong word order; Python only accepts `from math import ...`, so this is a `SyntaxError`.",
    "`from module import a, b` imports only the listed names, usable without a prefix."
   ],
   "explain": "`from math import sqrt, floor` imports just those names for prefix-free use; watch for clashes with your own names, and rename with `as` if needed.",
   "type": "concept"
  },
  {
   "id": "modules-c05",
   "topic": "modules",
   "q": "`main.py` imports `utils.py`. Every time `main.py` runs, it also prints test output from the bottom of `utils.py`. Which change makes that test code run only when `utils.py` is executed directly?",
   "code": "# utils.py\ndef add(a, b):\n    return a + b\n\nprint('Testing add:', add(2, 3))",
   "options": [
    "Put the test line under `if __name__ == '__main__':`",
    "Put the test line under `if __name__ == 'utils':`",
    "Move `import utils` to the bottom of `main.py`",
    "Rename the file to `__main__.py`"
   ],
   "answer": 0,
   "hint": "Python sets a special variable differently depending on whether a file is run or imported.",
   "why": [
    "When run directly, `__name__` is `'__main__'`; when imported, it is `'utils'`, so the guarded block is skipped on import.",
    "That condition is true exactly when the file is imported, so the test output would only appear on import, which is the opposite of what is wanted.",
    "Module code runs whenever the import executes, wherever the import statement sits.",
    "Renaming does not change what happens on import; top-level code still runs every time the module is loaded."
   ],
   "explain": "`__name__` is `'__main__'` when a file runs directly and the module name when it is imported, so `if __name__ == '__main__':` guards script-only code.",
   "type": "concept"
  },
  {
   "id": "modules-c06",
   "topic": "modules",
   "q": "What happens when this script runs?",
   "code": "def area(r):\n    return math.pi * r ** 2\n\nprint(area(1))\nimport math",
   "options": [
    "`3.141592653589793` is printed",
    "`NameError: name 'math' is not defined`",
    "`SyntaxError`, because imports must be the first statement",
    "`ImportError`, because `math` is used before it is imported"
   ],
   "answer": 1,
   "hint": "Python runs a file from top to bottom; check which line runs first.",
   "why": [
    "This would be the output if `import math` ran first, which is why imports belong at the top of the file.",
    "`print(area(1))` runs before the `import` line executes, so `math` does not exist yet when `area` looks it up.",
    "Python allows imports anywhere; placing them at the top is a convention, not a syntax rule.",
    "An `ImportError` means the module could not be found or loaded; here the import never even ran."
   ],
   "explain": "Imports are ordinary statements that run in order. Put them at the top of the file so every name is defined before use and dependencies are easy to see.",
   "type": "code"
  },
  {
   "id": "errors-c01",
   "topic": "errors",
   "q": "What is the output of running this file?",
   "code": "print('Start')\nif True\n    print('Inside')",
   "options": [
    "`Start`, then a `SyntaxError`",
    "`Start` and `Inside`",
    "Only a `SyntaxError`; nothing is printed",
    "`Start`, then an `IndentationError`"
   ],
   "answer": 2,
   "hint": "Does Python check the grammar of the file before or while it runs it?",
   "why": [
    "This assumes Python runs lines until it hits the bad one, but syntax is checked for the whole file first.",
    "The missing `:` after `if True` makes the file invalid, so no line runs.",
    "Python parses the whole file before running it, so the missing colon is reported before `print('Start')` ever executes.",
    "The indentation is fine; the problem is the missing colon, and it is caught before any output."
   ],
   "explain": "A `SyntaxError` is raised while Python reads the code, before any of it runs, so even lines above the mistake produce no output.",
   "type": "code"
  },
  {
   "id": "errors-c02",
   "topic": "errors",
   "q": "What happens when this script runs?",
   "code": "def greet():\n    print(message)\n\ngreet()\nmessage = 'Hi'",
   "options": [
    "`Hi` is printed",
    "`None` is printed",
    "`SyntaxError`, because `message` is used before it is defined",
    "`NameError: name 'message' is not defined`"
   ],
   "answer": 3,
   "hint": "Trace the lines in the order Python executes them.",
   "why": [
    "This would happen only if `message = 'Hi'` ran before the call.",
    "An undefined name is an error, not `None`; Python never invents a default value.",
    "The code is grammatically valid; the problem only appears at runtime when the name is looked up.",
    "`greet()` runs before the assignment line, so `message` does not exist yet when `print(message)` looks it up."
   ],
   "explain": "A `NameError` means a name is not defined at the moment it is used, from a typo or from using it before assignment.",
   "type": "code"
  },
  {
   "id": "errors-c03",
   "topic": "errors",
   "q": "Which of these lines raises a `TypeError`?",
   "options": [
    "`len(42)`",
    "`'42' * 2`",
    "`int('42')`",
    "`[4, 2][1]`"
   ],
   "answer": 0,
   "hint": "Look for an operation that makes no sense for the type of value it is given.",
   "why": [
    "An `int` has no length, so `len()` rejects it: `TypeError: object of type 'int' has no len()`.",
    "Multiplying a string by an int is valid repetition and gives `'4242'`.",
    "`int()` happily converts a numeric string, giving `42`.",
    "Indexing a list with a valid index returns `2`; nothing is wrong with the types."
   ],
   "explain": "A `TypeError` means an operation was applied to a type that does not support it, such as `len()` on a number or `str + int`.",
   "type": "concept"
  },
  {
   "id": "errors-c04",
   "topic": "errors",
   "q": "What does this loop do?",
   "code": "scores = [90, 85, 77]\nfor i in range(len(scores) + 1):\n    print(scores[i])",
   "options": [
    "Prints `90`, `85` and `77` and finishes normally",
    "Prints `90`, `85` and `77`, then raises an `IndexError`",
    "Raises an `IndexError` before printing anything",
    "Prints `90`, `85`, `77` and `None`"
   ],
   "answer": 1,
   "hint": "What is the last valid index of a three-item list, and how high does `i` go?",
   "why": [
    "The `+ 1` adds one extra iteration whose index does not exist.",
    "`range(4)` produces 0 to 3; indexes 0-2 print, and index 3 is past the last valid index (`len - 1 = 2`).",
    "The error happens only when `i` reaches 3, after the three valid prints.",
    "Lists do not return `None` for missing indexes; they raise an `IndexError`."
   ],
   "explain": "Valid indexes run from 0 to `len(seq) - 1`; one more raises `IndexError: list index out of range`.",
   "type": "code"
  },
  {
   "id": "errors-c05",
   "topic": "errors",
   "q": "What happens on the second line?",
   "code": "names = ('Ada', 'Grace')\nnames.append('Linus')",
   "options": [
    "`TypeError: 'tuple' object does not support item assignment`",
    "`IndexError`, because the tuple is full",
    "`AttributeError: 'tuple' object has no attribute 'append'`",
    "`names` becomes `('Ada', 'Grace', 'Linus')`"
   ],
   "answer": 2,
   "hint": "Is `append` something a tuple even has?",
   "why": [
    "That message appears when assigning to an index like `names[0] = ...`; here the method itself does not exist.",
    "Tuples have no capacity limit; `IndexError` is about reading a missing index.",
    "Tuples have no `append` method at all, so looking up that attribute fails.",
    "Tuples are immutable and have no method to add items."
   ],
   "explain": "An `AttributeError` means the object's type has no such method or attribute, such as `append` on a tuple or a string.",
   "type": "code"
  },
  {
   "id": "errors-c06",
   "topic": "errors",
   "q": "Your program is paused at the `(Pdb)` prompt. You want to see the current value of `total` without running any more code. Which command do you type?",
   "options": [
    "`n total`",
    "`c total`",
    "`s total`",
    "`p total`"
   ],
   "answer": 3,
   "hint": "The command you need is the first letter of what you want to do with the value.",
   "why": [
    "`n` runs the next line; it does not take a variable to display.",
    "`c` continues running until the next breakpoint, so the program moves on.",
    "`s` steps into the next function call; it runs code rather than showing a value.",
    "`p` prints the value of an expression in the paused frame, without running any further code."
   ],
   "explain": "At the `(Pdb)` prompt: `p name` prints a variable, `n` runs the next line, `s` steps into a call, `c` continues and `q` quits.",
   "type": "concept"
  },
  {
   "id": "exceptions-c01",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    number = int('12a')\n    print('Converted')\nexcept ValueError:\n    print('Please enter a valid number!')\nprint('Done')",
   "options": [
    "`Please enter a valid number!` then `Done`",
    "`Converted`, `Please enter a valid number!`, then `Done`",
    "Nothing; the program crashes with a `ValueError`",
    "Only `Please enter a valid number!`"
   ],
   "answer": 0,
   "hint": "Follow what happens to the lines after the failing one inside `try`, and to the code after the whole block.",
   "why": [
    "`int('12a')` fails, the rest of `try` is skipped, `except ValueError` handles it, and the program continues after the statement.",
    "Once an exception is raised, the remaining lines in `try` are skipped, so `Converted` never prints.",
    "The `except ValueError` block catches exactly this error, so the program does not crash.",
    "After a handled exception, execution continues after the `try` statement, so `Done` still prints."
   ],
   "explain": "When code in `try` raises a matching exception, Python jumps to that `except` block and then carries on after the `try` statement instead of crashing.",
   "type": "code"
  },
  {
   "id": "exceptions-c02",
   "topic": "exceptions",
   "q": "A function saves a file inside `try` and handles `OSError`. The developer wants `print('Saved!')` to run only when saving succeeded, and doesn't want errors from that print to be caught by the `except OSError` handler. Where should it go?",
   "options": [
    "In a `finally` block",
    "In an `else` block after the `except` block",
    "In the `except OSError` block",
    "Before the `try` statement"
   ],
   "answer": 1,
   "hint": "One clause of a `try` statement runs only when the `try` block finished without an error.",
   "why": [
    "`finally` runs whether or not saving failed, so `Saved!` would also appear after a failed save.",
    "`else` runs only when `try` raised nothing, and exceptions inside `else` are not caught by that `try` statement's handlers.",
    "The `except` block runs only when saving failed, which is the opposite of the goal.",
    "Code before `try` runs before the save is even attempted, so it cannot know whether saving worked."
   ],
   "explain": "Use `else` for code that should run only on success; it keeps the `try` block small, so `except` handles only the errors you expect.",
   "type": "concept"
  },
  {
   "id": "exceptions-c03",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    int('abc')\nexcept Exception:\n    print('Something went wrong')\nexcept ValueError:\n    print('Not a number')",
   "options": [
    "`Not a number`",
    "Both lines",
    "`Something went wrong`",
    "`SyntaxError`, because `Exception` must be the last `except` block"
   ],
   "answer": 2,
   "hint": "Python checks `except` blocks from top to bottom and stops at the first match.",
   "why": [
    "The `ValueError` block would match, but Python never reaches it because an earlier block already matched.",
    "Only one `except` block runs per exception.",
    "Python uses the first matching `except`; `ValueError` is a subclass of `Exception`, so the general handler catches it first.",
    "Python does not enforce the order of `except` blocks; a badly ordered one is legal but never reached."
   ],
   "explain": "Order `except` blocks from most specific to most general; a broad `except Exception` placed first catches everything below it.",
   "type": "code"
  },
  {
   "id": "exceptions-c04",
   "topic": "exceptions",
   "q": "Inside a function, a developer wants to signal that an invalid value was passed. Which line correctly does this?",
   "options": [
    "`return ValueError('Invalid value')`",
    "`throw ValueError('Invalid value')`",
    "`raise 'Invalid value'`",
    "`raise ValueError('Invalid value')`"
   ],
   "answer": 3,
   "hint": "Python uses one keyword for this, followed by an exception object.",
   "why": [
    "This returns an exception object as a normal value; no error is raised and the caller carries on.",
    "`throw` is JavaScript or Java syntax; in Python it is a `SyntaxError`.",
    "Only exception objects can be raised; raising a string gives `TypeError: exceptions must derive from BaseException`.",
    "`raise` with an exception instance stops the function and signals the error to the caller."
   ],
   "explain": "`raise SomeError('message')` manually triggers an exception; it works with built-in exceptions and with your own classes that inherit from `Exception`.",
   "type": "concept"
  },
  {
   "id": "exceptions-c05",
   "topic": "exceptions",
   "q": "This code runs without any outer handler. What does the traceback show?",
   "code": "try:\n    int('x')\nexcept ValueError as e:\n    raise RuntimeError('Bad config') from e",
   "options": [
    "Both errors, linked by \"The above exception was the direct cause of the following exception\"",
    "Only the `RuntimeError`; the original `ValueError` is hidden",
    "Only the `ValueError`, because it happened first",
    "Both errors, linked by \"During handling of the above exception, another exception occurred\""
   ],
   "answer": 0,
   "hint": "The keyword after the `raise` says how the two errors relate.",
   "why": [
    "`raise ... from e` chains explicitly, so the traceback shows the `ValueError` as the direct cause of the `RuntimeError`.",
    "Hiding the original is what `raise ... from None` does, not `from e`.",
    "The new `RuntimeError` is what propagates; the original appears as its cause, not instead of it.",
    "That wording is for implicit chaining, when you raise inside `except` without `from`."
   ],
   "explain": "`raise NewError(...) from e` records `e` as the direct cause, so the traceback shows both errors and how they connect.",
   "type": "code"
  },
  {
   "id": "exceptions-c06",
   "topic": "exceptions",
   "q": "What does this code print?",
   "code": "try:\n    items = [1, 2]\n    print(items[5])\nexcept IndexError as e:\n    print(e)",
   "options": [
    "`IndexError: list index out of range`",
    "`list index out of range`",
    "`IndexError`",
    "`e`"
   ],
   "answer": 1,
   "hint": "Printing an exception object shows its message, without the traceback formatting.",
   "why": [
    "The class name appears in a traceback, but `str(e)` contains only the message.",
    "`as e` binds the exception object, and `print(e)` shows just its message.",
    "That is what `type(e).__name__` would give, not `print(e)`.",
    "`e` is a variable holding the exception object, not a string literal."
   ],
   "explain": "`except SomeError as e` gives you the exception object; `print(e)` shows its message, which helps with logging and debugging.",
   "type": "code"
  },
  {
   "id": "classes-c01",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Player:\n    def __init__(self, name):\n        self.name = name\n        self.score = 0\n        print('Player created')\n\np1 = Player('Ada')\np2 = Player('Linus')\nprint(p1.score)",
   "options": [
    "`Player created` once, then `0`",
    "Only `0`",
    "`Player created` twice, then `0`",
    "`TypeError`, because `score` was not passed as an argument"
   ],
   "answer": 2,
   "hint": "When exactly does Python call `__init__`?",
   "why": [
    "`__init__` is not a one-time class setup; it runs for each new instance.",
    "You never call `__init__` yourself; creating `Player(...)` triggers it automatically.",
    "`__init__` runs automatically every time an object is created, so it prints once per player, and `score` starts at 0.",
    "`__init__` can set attributes that are not parameters; `self.score = 0` gives every player a starting score."
   ],
   "explain": "`__init__` is called automatically for each new object and sets its instance attributes through `self`.",
   "type": "code"
  },
  {
   "id": "classes-c02",
   "topic": "classes",
   "q": "A teammate writes this and gets an error on the last line. What error?",
   "code": "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ndog = Dog('Jack')",
   "options": [
    "`TypeError`: missing 1 required positional argument: `'self'`",
    "No error; `age` is set to `None`",
    "`AttributeError: 'Dog' object has no attribute 'age'`",
    "`TypeError`: missing 1 required positional argument: `'age'`"
   ],
   "answer": 3,
   "hint": "Count the arguments `__init__` needs, leaving out the one Python passes for you.",
   "why": [
    "You never pass `self`; Python fills it in with the new object.",
    "Parameters get no default value unless you give one, such as `age=None`.",
    "The error happens during the call, before any attribute is looked up.",
    "Python passes `self` automatically, so `Dog('Jack')` supplies `name` but not `age`."
   ],
   "explain": "Create an object by calling the class with every argument `__init__` expects except `self`, e.g. `Dog('Jack', 3)`.",
   "type": "code"
  },
  {
   "id": "classes-c03",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Team:\n    members = []\n\n    def __init__(self, name):\n        self.name = name\n\n    def add(self, person):\n        self.members.append(person)\n\na = Team('A')\nb = Team('B')\na.add('Ada')\nprint(b.members)",
   "options": [
    "`['Ada']`",
    "`[]`",
    "`AttributeError: 'Team' object has no attribute 'members'`",
    "`NameError: name 'members' is not defined`"
   ],
   "answer": 0,
   "hint": "Where is `members` defined: inside `__init__` or directly in the class body?",
   "why": [
    "`members` is a class attribute, so one list is shared by every `Team`; appending through `a` changes the list `b` sees too.",
    "Each team would get its own empty list only if `self.members = []` were set in `__init__`.",
    "Instances can read class attributes through `self`, so the lookup succeeds.",
    "The code uses `self.members`, which Python finds on the class; a bare `members` is never used."
   ],
   "explain": "Class attributes are shared by all instances; per-object data belongs in instance attributes set in `__init__`.",
   "type": "code"
  },
  {
   "id": "classes-c04",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Book:\n    def __init__(self, title):\n        self.title = title\n\n    def __str__(self):\n        return f'Book: {self.title}'\n\n    def __repr__(self):\n        return f'Book({self.title!r})'\n\nbooks = [Book('Dune')]\nprint(books)",
   "options": [
    "`[Book: Dune]`",
    "`[Book('Dune')]`",
    "`['Book: Dune']`",
    "`[<__main__.Book object at 0x...>]`"
   ],
   "answer": 1,
   "hint": "Containers display their items using the more technical of the two text methods.",
   "why": [
    "`__str__` is used when printing the object itself, not when it sits inside a list.",
    "Printing a list shows each item with `__repr__`, the developer-oriented form.",
    "No strings are created; the list holds a `Book` object shown with its `__repr__`.",
    "That default appears only when the class defines no `__repr__`."
   ],
   "explain": "`__str__` is the readable form for `print(obj)`; `__repr__` is the unambiguous form used in the REPL and inside containers like lists.",
   "type": "code"
  },
  {
   "id": "classes-c05",
   "topic": "classes",
   "q": "What does this code print?",
   "code": "class Countdown:\n    def __init__(self, start):\n        self.current = start\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        self.current -= 1\n        return self.current + 1\n\nprint(list(Countdown(3)))",
   "options": [
    "`[2, 1, 0]`",
    "`[3, 2, 1, 0]`",
    "`[3, 2, 1]`",
    "Nothing; it loops forever"
   ],
   "answer": 2,
   "hint": "Trace `current` through three calls, and note what happens when it reaches 0.",
   "why": [
    "The `+ 1` returns the value from before the decrement, so 3 comes first and 0 never comes back.",
    "When `current` reaches 0, `__next__` raises `StopIteration` instead of returning 0.",
    "Each `__next__` call lowers `current` and returns the value before the decrement, until `StopIteration` at 0.",
    "`list()` stops as soon as `__next__` raises `StopIteration`, which happens once `current` hits 0."
   ],
   "explain": "`__iter__` returns an iterator and `__next__` returns one item per call, raising `StopIteration` to end the loop.",
   "type": "code"
  },
  {
   "id": "classes-c06",
   "topic": "classes",
   "q": "A `Vector` class should support `v / 2`. Which method must it define?",
   "options": [
    "`__div__`",
    "`__floordiv__`",
    "`__divmod__`",
    "`__truediv__`"
   ],
   "answer": 3,
   "hint": "Python 3 has two division operators, and each has its own method.",
   "why": [
    "`__div__` was the Python 2 name; Python 3 ignores it.",
    "`__floordiv__` handles `//` (floor division), not `/`.",
    "`__divmod__` handles the built-in `divmod()` function.",
    "The `/` operator calls `__truediv__` in Python 3."
   ],
   "explain": "Operators map to dunder methods: `-` to `__sub__`, `*` to `__mul__`, `/` to `__truediv__`, `<` to `__lt__`, `>` to `__gt__` and `==` to `__eq__`.",
   "type": "concept"
  },
  {
   "id": "oop-c01",
   "topic": "oop",
   "q": "A developer is building a `Wallet` class. Callers must not be able to set the balance to any value they like, but they need to deposit and withdraw money. Which design follows encapsulation?",
   "options": [
    "Store the balance as `self._balance` and change it only through `deposit()` and `withdraw()` methods that validate the amount",
    "Make `balance` a public attribute and trust callers to update it correctly",
    "Keep the balance in a global variable that the methods update",
    "Make `balance` a class attribute so every wallet shares it"
   ],
   "answer": 0,
   "hint": "Think about who should be allowed to change the balance, and through what.",
   "why": [
    "Encapsulation bundles the data with the methods that change it and hides the internal state behind a small public interface.",
    "A public attribute lets any code write any value, which is exactly what encapsulation prevents.",
    "A global variable sits outside the object, so anything in the program can change it.",
    "A class attribute would mix every wallet's money together, and it is still freely writable."
   ],
   "explain": "Encapsulation bundles data and the methods that act on it, exposing controlled methods instead of letting code change internal state directly.",
   "type": "concept"
  },
  {
   "id": "oop-c02",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Shape:\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, side):\n        self.side = side\n\n    def area(self):\n        return self.side ** 2\n\nclass Circle(Shape):\n    pass\n\nshapes = [Square(3), Circle()]\nprint([s.area() for s in shapes])",
   "options": [
    "`[0, 0]`",
    "`[9, 0]`",
    "`[9, None]`",
    "`AttributeError: 'Circle' object has no attribute 'area'`"
   ],
   "answer": 1,
   "hint": "Each object uses the most specific version of `area()` available to it.",
   "why": [
    "`Square` overrides `area()`, so the child version is used, not the parent's.",
    "Each object answers `area()` with its own version: `Square` overrides it, and `Circle` inherits the parent's.",
    "`Circle` inherits `area()` from `Shape`, which returns 0, not `None`.",
    "Inheritance gives `Circle` the parent's `area()`, so the attribute exists."
   ],
   "explain": "Polymorphism lets different classes share one method name; each class can override it, and objects without an override fall back to the parent's.",
   "type": "code"
  },
  {
   "id": "oop-c03",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Flyer:\n    def move(self):\n        return 'fly'\n\nclass Swimmer:\n    def move(self):\n        return 'swim'\n\nclass Duck(Flyer, Swimmer):\n    pass\n\nprint(Duck().move())",
   "options": [
    "`swim`",
    "`['fly', 'swim']`",
    "`fly`",
    "`TypeError`, because two parents define `move`"
   ],
   "answer": 2,
   "hint": "The order of the parents in the class definition matters.",
   "why": [
    "`Swimmer` comes second in `class Duck(Flyer, Swimmer)`, so its `move` is only used if `Flyer` lacks one.",
    "Python calls one method, the first it finds; it never merges results from both parents.",
    "With multiple inheritance, Python searches the parents from left to right, so `Flyer.move` is found first.",
    "Sharing a method name across parents is allowed; Python resolves it by the parent order."
   ],
   "explain": "Single inheritance uses one parent, `class Child(Parent):`; multiple inheritance lists several, and Python looks up methods in the listed order.",
   "type": "code"
  },
  {
   "id": "oop-c04",
   "topic": "oop",
   "q": "What happens on the last line?",
   "code": "from abc import ABC, abstractmethod\n\nclass Payment(ABC):\n    @abstractmethod\n    def pay(self, amount):\n        pass\n\nclass CardPayment(Payment):\n    def refund(self, amount):\n        return 'refunded'\n\np = CardPayment()",
   "options": [
    "The object is created, and `p.pay(10)` would return `None`",
    "`NotImplementedError` is raised when the object is created",
    "`AttributeError`, because `CardPayment` has no `__init__`",
    "`TypeError`, because `CardPayment` does not implement `pay`"
   ],
   "answer": 3,
   "hint": "What does `@abstractmethod` require of every concrete subclass?",
   "why": [
    "Python blocks the instantiation itself; the inherited abstract `pay` is never reachable on an object.",
    "`NotImplementedError` is a convention you raise yourself; the ABC machinery raises `TypeError`.",
    "Classes inherit `__init__` from `object`, so a missing `__init__` is never the problem.",
    "A subclass of an ABC stays abstract until it overrides every `@abstractmethod`, and abstract classes cannot be instantiated."
   ],
   "explain": "Abstraction exposes only essential features. With `abc`, a class that subclasses `ABC` and has `@abstractmethod` methods cannot be instantiated until a subclass implements them all.",
   "type": "code"
  },
  {
   "id": "oop-c05",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def radius(self):\n        return self._radius\n\n    @radius.deleter\n    def radius(self):\n        print('Deleting radius')\n        del self._radius\n\nc = Circle(5)\ndel c.radius\nprint(hasattr(c, '_radius'))",
   "options": [
    "`Deleting radius`, then `False`",
    "Only `False`",
    "`Deleting radius`, then `True`",
    "`AttributeError`, because properties can't be deleted"
   ],
   "answer": 0,
   "hint": "`del` on a property runs the method decorated with `@radius.deleter`.",
   "why": [
    "`del c.radius` calls the deleter, which prints and then removes `_radius`, so `hasattr` returns `False`.",
    "The deleter runs custom code, including the `print`, whenever `del` is used on the property.",
    "The deleter itself runs `del self._radius`, so the attribute is gone.",
    "A property without a deleter can't be deleted, but here `@radius.deleter` defines one."
   ],
   "explain": "A deleter, defined with `@<property_name>.deleter`, runs custom logic when you use `del obj.property_name`.",
   "type": "code"
  },
  {
   "id": "oop-c06",
   "topic": "oop",
   "q": "What does this code print?",
   "code": "class Base:\n    def __init__(self):\n        self.__id = 'base'\n\nclass Child(Base):\n    def __init__(self):\n        super().__init__()\n        self.__id = 'child'\n\nc = Child()\nprint(c._Base__id, c._Child__id)",
   "options": [
    "`child child`",
    "`base child`",
    "`AttributeError: 'Child' object has no attribute '_Base__id'`",
    "`base base`"
   ],
   "answer": 1,
   "hint": "Inside a class, Python renames `__attr` using that class's name.",
   "why": [
    "Without double underscores, the child would overwrite the parent's attribute, but mangling gives each one its own name.",
    "Name mangling stores each `__id` as `_ClassName__id`, so the parent's and child's values live side by side.",
    "Mangled names remain accessible from outside; mangling is not true privacy.",
    "The child sets its own `_Child__id` to `'child'`, which is separate from the parent's value."
   ],
   "explain": "Name mangling turns `__attr` into `_ClassName__attr`, which prevents subclasses from accidentally overriding a parent's attribute. **Review note:** the freeCodeCamp review says a double underscore \"effectively prevents\" outside access. The plain name `c.__id` fails from outside, but the mangled names shown here are still reachable.",
   "type": "code"
  },
  {
   "id": "big-o-c01",
   "topic": "big-o",
   "q": "A teammate writes these steps for shuffling a deck: \"Keep mixing the cards around until the deck feels random enough.\" Why does this fail the review's definition of an algorithm?",
   "options": [
    "It isn't written in Python, so it can't be an algorithm",
    "It has no input, and every algorithm needs an input list",
    "A step is not precise (\"feels random enough\"), and nothing guarantees it finishes in a finite number of steps",
    "It would run in O(n\u00b2) time, which is too slow to count as an algorithm"
   ],
   "answer": 2,
   "hint": "Check the two requirements every algorithm must meet.",
   "why": [
    "Algorithms are language-independent; pseudocode or plain steps can describe one.",
    "The deck is the input; the problem is how the steps are described, not a missing input.",
    "An algorithm must have precise, unambiguous steps and must finish in a finite number of steps; \"until it feels random enough\" breaks both.",
    "Big O describes an algorithm's efficiency; a slow algorithm is still an algorithm."
   ],
   "explain": "An algorithm is a finite sequence of precise, unambiguous instructions. Vague stopping conditions disqualify a procedure.",
   "type": "concept"
  },
  {
   "id": "big-o-c02",
   "topic": "big-o",
   "q": "What is the time complexity of this function for a Python list of n items?",
   "code": "def get_last(items):\n    return items[-1]",
   "options": [
    "O(n)",
    "O(1)",
    "O(log n)",
    "O(n\u00b2)"
   ],
   "answer": 1,
   "hint": "Think about whether reaching index -1 depends on how long the list is.",
   "why": [
    "Tempting if you picture Python walking to the end of the list, but lists jump straight to any index.",
    "Indexing a list (including with -1) is a direct memory lookup, so it takes the same time for 10 or 10 million items.",
    "O(log n) fits algorithms that halve the problem each step, like binary search; no halving happens here.",
    "There is no loop at all, let alone nested loops."
   ],
   "explain": "Accessing a list element by index is O(1), constant time, regardless of input size.",
   "type": "concept"
  },
  {
   "id": "big-o-c03",
   "topic": "big-o",
   "q": "A function checks whether an email address is in an unsorted list by comparing each entry in turn. In the worst case, if the list grows from 1,000 to 4,000 emails, roughly how does the running time change?",
   "options": [
    "It stays about the same",
    "It grows only slightly, because the work is logarithmic",
    "It becomes about 16 times longer",
    "It becomes about 4 times longer"
   ],
   "answer": 3,
   "hint": "One comparison per email: how many more comparisons does 4\u00d7 the emails mean?",
   "why": [
    "Constant time would mean the size doesn't matter, but every email may need to be checked.",
    "Logarithmic growth needs the problem to be halved each step, which requires sorted data and binary search.",
    "16\u00d7 (4\u00b2) would be quadratic growth, as with nested loops over the list.",
    "A single pass is O(n), linear time: four times the input means about four times the work."
   ],
   "explain": "A single loop over every element is O(n): running time grows in proportion to the input size.",
   "type": "concept"
  },
  {
   "id": "big-o-c04",
   "topic": "big-o",
   "q": "What is the space complexity of `make_grid(n)`?",
   "code": "def make_grid(n):\n    grid = []\n    for row in range(n):\n        grid.append([0] * n)\n    return grid",
   "options": [
    "O(n\u00b2)",
    "O(n)",
    "O(1)",
    "O(n log n)"
   ],
   "answer": 0,
   "hint": "Count how many values the returned grid holds in total.",
   "why": [
    "The grid has n rows of n values each, so it stores n \u00d7 n values: memory grows quadratically.",
    "Counting only the n rows misses that each row holds n more values.",
    "O(1) space means memory doesn't grow with n, but a bigger n builds a bigger grid.",
    "Nothing here halves or sorts; n log n doesn't match n rows \u00d7 n columns."
   ],
   "explain": "Building an n \u00d7 n structure (a 2D list) uses O(n\u00b2) space.",
   "type": "concept"
  },
  {
   "id": "big-o-c05",
   "topic": "big-o",
   "q": "A reviewer says this function is O(2n) because it loops over the list twice. How is its complexity normally written in Big O?",
   "code": "def report(items):\n    for x in items:\n        print(x)\n    for x in items:\n        print(x * 2)",
   "options": [
    "O(2n)",
    "O(n\u00b2)",
    "O(n)",
    "O(log n)"
   ],
   "answer": 2,
   "hint": "Big O cares about growth rate, not exact step counts.",
   "why": [
    "Big O drops constant factors, so the 2 in 2n is not written.",
    "The loops run one after the other, not one inside the other, so the work adds (n + n) instead of multiplying.",
    "Two sequential loops do 2n steps; Big O drops the constant factor, leaving O(n).",
    "Nothing here halves the input; each loop visits every item."
   ],
   "explain": "Big O ignores constant factors and lower-order terms: O(2n) is O(n), and O(n\u00b2 + n) is O(n\u00b2).",
   "type": "concept"
  },
  {
   "id": "big-o-c06",
   "topic": "big-o",
   "q": "You receive a challenge: \"Given a list of daily temperatures, return how many days you must wait for a warmer day.\" According to the review, what should you do first?",
   "options": [
    "Start coding a brute-force solution so you have something working",
    "Read the problem several times and identify the input, the expected output and how to turn one into the other",
    "Choose the data structure with the best Big O for the task",
    "Write the edge-case tests before reading the problem in detail"
   ],
   "answer": 1,
   "hint": "You can't solve a problem you haven't pinned down yet.",
   "why": [
    "Coding before you understand the problem often solves the wrong problem.",
    "Understanding the problem comes first: read it multiple times and pin down input, output and the transformation between them.",
    "You can only pick a good data structure once you know what the problem asks.",
    "Edge cases matter, but you can only identify them after understanding the problem."
   ],
   "explain": "Problem solving starts with understanding the problem; pseudocode, edge cases and code come after.",
   "type": "concept"
  },
  {
   "id": "linear-ds-c01",
   "topic": "linear-ds",
   "q": "Which statement correctly contrasts a static array with a Python list?",
   "options": [
    "A static array can grow, but more slowly than a Python list",
    "A Python list is a static array, so you must declare its size up front",
    "A Python list stores its elements in separate nodes linked by references",
    "A static array's size is fixed at initialization; a Python list is a dynamic array that grows and shrinks as needed"
   ],
   "answer": 3,
   "hint": "One of the two has a size that can never change while the program runs.",
   "why": [
    "A static array can't grow at all; its size is fixed when it is created.",
    "Python lists never need a declared size: `[]` starts empty and `append()` grows it.",
    "That describes a linked list; a Python list stores elements in adjacent memory like an array.",
    "Static arrays have a fixed size; dynamic arrays like Python lists resize automatically by copying into a larger array when needed."
   ],
   "explain": "Static arrays have a fixed size. Dynamic arrays such as Python lists grow and shrink during execution.",
   "type": "concept"
  },
  {
   "id": "linear-ds-c02",
   "topic": "linear-ds",
   "q": "A browser keeps visited pages in a list used as a stack. The user presses Back once. What does this print?",
   "code": "history = []\nhistory.append('home')\nhistory.append('search')\nhistory.append('results')\nhistory.pop()\nprint(history[-1])",
   "options": [
    "`search`",
    "`results`",
    "`home`",
    "`IndexError: list index out of range`"
   ],
   "answer": 0,
   "hint": "`pop()` removes from the same end that `append()` adds to.",
   "why": [
    "`pop()` removes the most recently added page ('results'), leaving 'search' on top: Last-In, First-Out.",
    "That would be true if `pop()` didn't change the list, but it removes 'results'.",
    "'home' would be on top only if the list were used first-in, first-out, like a queue.",
    "Two items remain after the pop, so `history[-1]` is valid."
   ],
   "explain": "A stack is LIFO: `append()` pushes onto the top and `pop()` removes from the top, both O(1).",
   "type": "code"
  },
  {
   "id": "linear-ds-c03",
   "topic": "linear-ds",
   "q": "A print server must handle print jobs in the exact order they arrive. Which data structure and operations fit best?",
   "options": [
    "A stack: push each job on top and pop from the top",
    "A set: add each job and remove one when the printer is free",
    "A queue: enqueue each job at the back and dequeue from the front",
    "A list where each job is added with `append()` and taken with `pop()`"
   ],
   "answer": 2,
   "hint": "\"In the order they arrive\" means the first job in is the first job out.",
   "why": [
    "A stack serves the newest job first (LIFO), so early jobs would wait behind later ones.",
    "Sets are unordered, so there's no guarantee which job comes out first.",
    "A queue is First-In, First-Out: jobs join at the back and leave from the front, both in O(1).",
    "`append()` plus `pop()` uses a list as a stack, so the most recent job would print first."
   ],
   "explain": "Queues are FIFO: enqueue at the back, dequeue from the front. Use them for task scheduling and anything first-come, first-served.",
   "type": "concept"
  },
  {
   "id": "linear-ds-c04",
   "topic": "linear-ds",
   "q": "A support desk uses a `deque` as a ticket queue. What does this print?",
   "code": "from collections import deque\n\ntickets = deque(['T1', 'T2'])\ntickets.append('T3')\nfirst = tickets.popleft()\ntickets.append('T4')\nprint(first, list(tickets))",
   "options": [
    "`T3 ['T1', 'T2', 'T4']`",
    "`T1 ['T2', 'T3', 'T4']`",
    "`T1 ['T1', 'T2', 'T3', 'T4']`",
    "`T4 ['T1', 'T2', 'T3']`"
   ],
   "answer": 1,
   "hint": "`popleft()` takes from the opposite end to where `append()` adds.",
   "why": [
    "That's what `pop()` would do (remove from the right end); `popleft()` removes from the left.",
    "`popleft()` removes and returns the oldest ticket, 'T1'; 'T4' then joins at the back.",
    "`popleft()` removes the item, it doesn't just peek at it.",
    "T4 is appended after the `popleft()` call, so it can't be the item that was removed."
   ],
   "explain": "Use `collections.deque` as a queue: `append()` enqueues at the back and `popleft()` dequeues from the front, both O(1).",
   "type": "code"
  },
  {
   "id": "linear-ds-c05",
   "topic": "linear-ds",
   "q": "A notification feed is stored as a singly linked list, and new notifications always go at the front. With only a `head` reference, what does adding one cost?",
   "options": [
    "O(n), because you must walk to the end of the list first",
    "O(log n), because the list is split in half to find the spot",
    "O(n), because every existing node must shift one position, like in an array",
    "O(1): the new node points to the old head, then `head` is updated to the new node"
   ],
   "answer": 3,
   "hint": "How many existing nodes need to be touched to put something in front of the first one?",
   "why": [
    "Walking to the end is needed to insert at the tail, not at the head.",
    "Linked lists can't jump to the middle; nothing is halved here.",
    "Linked-list nodes don't shift; only references change. Shifting is an array cost.",
    "Inserting at the head only rewires two references, no matter how long the list is: O(1)."
   ],
   "explain": "The head is the first node and usually the only one you can reach directly. Inserting or deleting at the head is O(1).",
   "type": "concept"
  },
  {
   "id": "linear-ds-c06",
   "topic": "linear-ds",
   "q": "This function deletes the last node of a singly linked list that has only a `head` reference. Why does it need the `while` loop?",
   "code": "def remove_last(head):\n    if head.next is None:\n        return None\n    current = head\n    while current.next.next is not None:\n        current = current.next\n    current.next = None\n    return head",
   "options": [
    "To count the nodes so the list's length can be updated",
    "To find the tail node so it can be removed with `del`",
    "To find the node before the tail, so its `next` can be set to `None`",
    "To shift every value one position toward the head"
   ],
   "answer": 2,
   "hint": "To cut off the last node, which node's reference has to change?",
   "why": [
    "The loop stops at the second-to-last node; it never counts the nodes.",
    "Reaching the tail isn't enough: the previous node still points to it, and nodes have no back reference.",
    "Without a reference to the previous node, you must traverse from the head to find it. That traversal makes deleting from the end O(n).",
    "Linked lists don't shift values; deletion just changes one `next` reference."
   ],
   "explain": "Deleting from the end of a singly linked list is O(n): you must walk from the head to find the node before the tail.",
   "type": "concept"
  },
  {
   "id": "hashing-c01",
   "topic": "hashing",
   "q": "A phone-book app stores names as keys in a hash map. How does it find Ada's number without scanning every entry?",
   "options": [
    "It keeps the keys sorted and binary-searches for 'Ada'",
    "A hash function turns 'Ada' into a hash value that points to where her entry is stored in the underlying array",
    "It checks each entry from the start until it finds 'Ada'",
    "It follows a linked list of entries in the order they were inserted"
   ],
   "answer": 1,
   "hint": "Where the entry lives is calculated from the key itself.",
   "why": [
    "Binary search over sorted keys is O(log n); hash maps avoid comparing against other keys at all.",
    "Hashing computes the storage location directly from the key, which is why average lookup is O(1).",
    "Scanning every entry is linear search, O(n): exactly what a hash map avoids.",
    "Insertion order has nothing to do with locating a key in a hash map."
   ],
   "explain": "A hash map implements the map ADT: a hash function maps each key to a hash value that determines its slot in an array.",
   "type": "concept"
  },
  {
   "id": "hashing-c02",
   "topic": "hashing",
   "q": "A small hash table with 4 buckets uses chaining. The keys 'apple' and 'grape' are different, but both hash to bucket 1. What happens when you later look up 'grape'?",
   "options": [
    "It returns the value for 'apple', because that key was stored in bucket 1 first",
    "It raises a `KeyError`, because two keys can't share a bucket",
    "It probes bucket 2, bucket 3 and so on until it finds 'grape'",
    "It hashes 'grape' to bucket 1, then walks that bucket's chain comparing keys until it finds 'grape'"
   ],
   "answer": 3,
   "hint": "A collision puts both keys in the same bucket, but each key is still stored with its own value.",
   "why": [
    "Sharing a bucket doesn't merge the keys; the lookup compares the actual keys, so it never returns another key's value.",
    "Collisions are expected and resolved; both keys stay stored and reachable.",
    "Probing the following buckets is open addressing; with chaining, colliding keys stay together in one bucket.",
    "With chaining, each bucket holds a linked list of all its keys. The lookup goes to the bucket, then checks the keys in its chain one by one. The more collisions, the longer the chain, and in the worst case the lookup becomes O(n)."
   ],
   "explain": "A hash collision happens when different keys produce the same hash value. Chaining keeps colliding keys in a list in their bucket, so lookups stay correct but slow down as chains grow.",
   "type": "concept"
  },
  {
   "id": "hashing-c03",
   "topic": "hashing",
   "q": "A hash table has 8 slots. The key 'cat' hashes to slot 3, but slot 3 already holds 'dog'. Under open addressing, what happens?",
   "options": [
    "The table searches for the next available slot in a predefined sequence (e.g. slot 4, 5, \u2026) and stores 'cat' there",
    "'cat' is added to a linked list stored at slot 3, next to 'dog'",
    "'dog' is overwritten by 'cat'",
    "The insert fails with a `KeyError`"
   ],
   "answer": 0,
   "hint": "\"Open addressing\" means the key ends up at a different address in the same array.",
   "why": [
    "Open addressing probes other slots in a set order until it finds a free one.",
    "That describes chaining, the other collision strategy.",
    "Different keys never overwrite each other; that would lose data.",
    "Collisions are expected and handled; they don't raise errors."
   ],
   "explain": "There are two collision strategies: chaining (a linked list per slot) and open addressing (probe for the next free slot).",
   "type": "concept"
  },
  {
   "id": "hashing-c04",
   "topic": "hashing",
   "q": "A game stores visited grid squares in a set. Adding the list `[2, 3]` directly raised an error, so the code converts it first. What does this print?",
   "code": "visited = set()\npoint = [2, 3]\nvisited.add(tuple(point))\nprint((2, 3) in visited)",
   "options": [
    "`False`",
    "A `TypeError`, because the list is unhashable",
    "`True`",
    "A `TypeError`, because the tuple is unhashable"
   ],
   "answer": 2,
   "hint": "Which of Python's sequence types can never change after creation?",
   "why": [
    "The stored value is the tuple `(2, 3)`, and `(2, 3) in visited` looks up exactly that tuple.",
    "The list is converted with `tuple()` before it's added, so no list goes into the set.",
    "Tuples are immutable, so their hash never changes and they can be set elements. The lookup finds `(2, 3)`.",
    "Tuples (of immutable items) are hashable. Only mutable types like lists are rejected."
   ],
   "explain": "Sets rely on hash values that must stay constant, so elements must be immutable (numbers, strings, tuples), never lists.",
   "type": "code"
  },
  {
   "id": "hashing-c05",
   "topic": "hashing",
   "q": "For each of 100,000 sign-ups, an app checks whether the username is already taken. What is the average cost of each `in` check if the taken names are in a set versus a list?",
   "options": [
    "Set: O(log n), because sets keep their items sorted; list: O(n)",
    "Set: O(1); list: O(n)",
    "Both O(1), because `in` is a built-in operator",
    "Both O(n), because `in` always checks every item"
   ],
   "answer": 1,
   "hint": "One of these structures uses hashing; the other has to look item by item.",
   "why": [
    "Sets are unordered; they hash instead of sorting.",
    "A set hashes the username straight to its slot (average O(1)); a list must compare items one by one (O(n)).",
    "The operator is the same, but its cost depends on the data structure behind it.",
    "Only lists scan every item; sets use hashing."
   ],
   "explain": "Sets give average O(1) add, remove and membership tests (worst case O(n) with many collisions): ideal for uniqueness checks.",
   "type": "concept"
  },
  {
   "id": "hashing-c06",
   "topic": "hashing",
   "q": "Which situation is the best fit for a linked list rather than a Python list?",
   "options": [
    "You often need to read the item at position `i` directly",
    "You need fast lookups of values by a unique key",
    "You need to remove duplicates from a collection",
    "You insert and delete at the beginning very often, the size is unknown, and you never need access by index"
   ],
   "answer": 3,
   "hint": "Linked lists are cheap to change at the front but have no random access.",
   "why": [
    "Access by index is a strength of Python lists (O(1)); a linked list must traverse, O(n).",
    "Fast key lookups call for a hash map (a dictionary).",
    "Removing duplicates is a job for a set.",
    "Linked lists shine with frequent insert/delete at the beginning (O(1)), unknown size, and no random-access needs."
   ],
   "explain": "Use linked lists for frequent changes at the front with unknown size; use lists for indexed access, hash maps for key lookups, and sets for uniqueness.",
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-c01",
   "topic": "recursion-search-sort",
   "q": "What happens when this code runs?",
   "code": "def sum_to(n):\n    if n == 0:\n        return 0\n    return n + sum_to(n - 1)\n\nprint(sum_to(-1))",
   "options": [
    "It prints `0`",
    "It raises `RecursionError`",
    "It prints `-1`",
    "It prints `None`"
   ],
   "answer": 1,
   "hint": "Follow the value of `n` when you start below zero.",
   "why": [
    "`0` would come from `sum_to(0)`; starting at -1, `n` never reaches 0.",
    "Starting at -1, `n` goes -2, -3, \u2026 and never equals 0, so the base case is never reached and Python stops it with a RecursionError.",
    "No line returns `n` directly, and the calls never finish.",
    "Every path either returns 0 or recurses; the function never falls off the end."
   ],
   "explain": "A base case only works if every input eventually reaches it. Guard against inputs that skip it (e.g. `if n <= 0`).",
   "type": "code"
  },
  {
   "id": "recursion-search-sort-c02",
   "topic": "recursion-search-sort",
   "q": "What does this print?",
   "code": "def show(n):\n    if n == 0:\n        return\n    show(n - 1)\n    print(n)\n\nshow(3)",
   "options": [
    "`3`, `2`, `1` on separate lines",
    "`3` only",
    "`1`, `2`, `3` on separate lines",
    "`0`, `1`, `2`, `3` on separate lines"
   ],
   "answer": 2,
   "hint": "`print()` comes after the recursive call, so it runs as each call returns.",
   "why": [
    "That would happen if `print(n)` came before `show(n - 1)`.",
    "Every call that returns prints its own `n`, not just the first one.",
    "The calls stack up for 3, 2, 1, 0. `show(0)` returns first, then the calls come off the stack innermost first, printing 1, 2, 3.",
    "`show(0)` hits the base case and returns before reaching `print`."
   ],
   "explain": "Each recursive call is pushed onto the call stack; once the base case is reached, calls return (pop) in reverse order.",
   "type": "code"
  },
  {
   "id": "recursion-search-sort-c03",
   "topic": "recursion-search-sort",
   "q": "Which task is the most natural fit for a recursive solution?",
   "options": [
    "Adding up the prices in a flat list of 10 items",
    "Looking up a customer's email by ID in a dictionary",
    "Swapping the values of two variables",
    "Counting every file in a folder whose subfolders can be nested to any depth"
   ],
   "answer": 3,
   "hint": "Recursion shines when the data contains smaller copies of itself.",
   "why": [
    "A flat list is handled more simply with a loop or `sum()`.",
    "A dictionary lookup is a single O(1) operation; there's nothing to recurse into.",
    "A swap is a single step with no subproblems.",
    "A folder tree has unknown depth: count a folder by recursively counting each subfolder until a folder has none (the base case)."
   ],
   "explain": "Recursion suits unknown-depth data (file trees, nested lists/dicts), tree and graph traversal, factorial/Fibonacci, and permutations.",
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-c04",
   "topic": "recursion-search-sort",
   "q": "A server log has 1,000,000 unsorted entries. Using linear search for an ID that isn't in the log, how many comparisons are made in the worst case, and how much extra memory is used?",
   "options": [
    "About 20 comparisons and O(1) extra memory",
    "1,000,000 comparisons and O(1) extra memory",
    "1,000,000 comparisons and O(n) extra memory",
    "About 500,000 comparisons, because the search stops halfway"
   ],
   "answer": 1,
   "hint": "Linear search can't skip anything, but it doesn't copy anything either.",
   "why": [
    "About 20 (log\u2082 of a million) is binary search, which needs sorted data.",
    "A missing target forces a check of every entry (O(n) time), but only a loop index is needed (O(1) space). It then returns -1.",
    "Linear search doesn't copy the list; it just walks through it.",
    "Halfway is the average when the item IS present; a missing item means checking all of them."
   ],
   "explain": "Linear search is O(n) time and O(1) space, and returns -1 when the target isn't found.",
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-c05",
   "topic": "recursion-search-sort",
   "q": "Which of these strategies is divide-and-conquer?",
   "options": [
    "Split the list in half, recursively sort each half, then merge the sorted halves",
    "Repeatedly swap neighbouring items that are out of order",
    "Check each item from the start until the target is found",
    "Store answers to overlapping subproblems in a table and reuse them"
   ],
   "answer": 0,
   "hint": "Look for the strategy that breaks the problem into smaller, independent pieces of the same kind.",
   "why": [
    "This is merge sort: divide into smaller sub-problems, solve them (often recursively), and combine the results.",
    "Swapping neighbours (bubble sort) never splits the problem into sub-problems.",
    "That's linear search, a single pass with no division.",
    "Reusing stored results of overlapping subproblems is dynamic programming; divide-and-conquer's subproblems don't overlap."
   ],
   "explain": "Divide-and-conquer breaks a problem into smaller sub-problems that are easier to solve, usually with recursion (e.g. merge sort).",
   "type": "concept"
  },
  {
   "id": "recursion-search-sort-c06",
   "topic": "recursion-search-sort",
   "q": "Merge sort sorts a list of 8 items. How many levels of halving are there, and how much merging work happens at each level?",
   "options": [
    "8 levels with O(n) merging each, so O(n\u00b2)",
    "1 level with O(n log n) merging",
    "3 levels (log\u2082 8) with O(n) merging at each level, so O(n log n)",
    "3 levels with O(1) merging each, so O(log n)"
   ],
   "answer": 2,
   "hint": "How many times can you halve 8 before reaching single items?",
   "why": [
    "Halving 8 \u2192 4 \u2192 2 \u2192 1 takes 3 steps, not 8; levels grow with log n, not n.",
    "Splitting happens repeatedly, giving several levels, not just one.",
    "8 halves to single items in log\u2082 8 = 3 levels, and each level merges all n items: n \u00d7 log n.",
    "Merging touches every item at each level, so it can't be O(1) per level."
   ],
   "explain": "Merge sort is O(n log n): log n levels of halving, with O(n) merging work per level.",
   "type": "concept"
  },
  {
   "id": "graphs-trees-c01",
   "topic": "graphs-trees",
   "q": "On a social network, \"following\" is one-way (Ana can follow Ben without Ben following her), but \"friendship\" is mutual. Which graph types model these?",
   "options": [
    "Following: undirected; friendship: directed",
    "Both undirected, because each edge connects two people",
    "Both weighted, because people have different numbers of followers",
    "Following: directed; friendship: undirected"
   ],
   "answer": 3,
   "hint": "Does the relationship have a direction from one person to the other?",
   "why": [
    "That's reversed: one-way relationships need arrows, mutual ones don't.",
    "Every edge connects two nodes, but a one-way follow needs a direction.",
    "Weights are values on edges, like distances; follower counts aren't edge weights.",
    "A follow points from one person to another (directed edge); a friendship goes both ways (undirected edge)."
   ],
   "explain": "Directed graphs have edges with a direction (arrows); undirected graphs have edges without one (plain lines).",
   "type": "concept"
  },
  {
   "id": "graphs-trees-c02",
   "topic": "graphs-trees",
   "q": "Course prerequisites form a DAG: Intro \u2192 Data Structures \u2192 Algorithms, and Intro \u2192 Databases. Why would adding \"Algorithms is a prerequisite of Intro\" break it?",
   "options": [
    "It would make the graph undirected",
    "It would create a cycle (Intro \u2192 Data Structures \u2192 Algorithms \u2192 Intro), and a DAG can't have cycles",
    "It would disconnect Databases from the rest of the graph",
    "In a DAG, each node may have only one incoming edge"
   ],
   "answer": 1,
   "hint": "Follow the arrows from Intro after the new edge is added.",
   "why": [
    "The new edge still has a direction; the graph stays directed.",
    "DAG means Directed Acyclic Graph. The new edge creates a path that starts and ends at Intro: a cycle, so no course could be taken first.",
    "Databases is still connected to Intro.",
    "DAG nodes can have several incoming edges; the only rule is no cycles."
   ],
   "explain": "A DAG is a directed graph with no cycles: no path starts and ends at the same node. It suits dependencies like prerequisites.",
   "type": "concept"
  },
  {
   "id": "graphs-trees-c03",
   "topic": "graphs-trees",
   "q": "What does this recursive traversal print?",
   "code": "graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['E'], 'D': [], 'E': []}\n\ndef dfs(node, visited):\n    visited.append(node)\n    for neighbor in graph[node]:\n        dfs(neighbor, visited)\n    return visited\n\nprint(dfs('A', []))",
   "options": [
    "`['A', 'B', 'D', 'C', 'E']`",
    "`['A', 'B', 'C', 'D', 'E']`",
    "`['D', 'B', 'E', 'C', 'A']`",
    "`['A', 'C', 'E', 'B', 'D']`"
   ],
   "answer": 0,
   "hint": "The function fully explores B's branch before returning to try C.",
   "why": [
    "DFS goes deep first: A, then B and all of B's descendants (D), then backtracks to C and E.",
    "That's the BFS (level-by-level) order, which would need a queue.",
    "That's post-order: nodes appended after their children. Here each node is appended before visiting its neighbours.",
    "The neighbours are visited in list order, so B comes before C."
   ],
   "explain": "DFS uses a stack (or recursion) to explore a branch fully before backtracking. It's useful for cycle detection and path finding.",
   "type": "code"
  },
  {
   "id": "graphs-trees-c04",
   "topic": "graphs-trees",
   "q": "An autocomplete box stores 50,000 words in a trie. The user types \"pyth\". Roughly what does it cost to find the node for that prefix?",
   "options": [
    "O(n): every one of the 50,000 words is checked",
    "O(log n): like binary search over sorted words",
    "O(L): one step per typed character (4 here), however many words are stored",
    "O(1): the whole prefix is hashed straight to its node"
   ],
   "answer": 2,
   "hint": "In a trie, each node is a single character.",
   "why": [
    "A trie never compares against every word; it follows one path of characters.",
    "Binary search depends on the number of words; trie lookups don't.",
    "You walk p \u2192 y \u2192 t \u2192 h, one node per character: O(L), where L is the prefix length. Shared prefixes are stored once.",
    "Tries walk character by character instead of hashing the whole string."
   ],
   "explain": "A trie (prefix tree) stores strings one character per node. Search and insert are O(L), ideal for autocomplete and spell checking.",
   "type": "concept"
  },
  {
   "id": "graphs-trees-c05",
   "topic": "graphs-trees",
   "q": "`heapq` only provides a min-heap, but a leaderboard needs the highest score first. What does this print?",
   "code": "import heapq\n\nheap = []\nfor score in [40, 10, 30]:\n    heapq.heappush(heap, -score)\n\nprint(-heapq.heappop(heap))",
   "options": [
    "`10`",
    "`40`",
    "`-40`",
    "`30`"
   ],
   "answer": 1,
   "hint": "Negating every value flips which one counts as \"smallest\".",
   "why": [
    "`10` would come out of a plain min-heap of the original scores, but the values were negated.",
    "The heap holds -40, -10 and -30; the min-heap pops the smallest, -40, and negating it again gives 40.",
    "The code negates the popped value back with `-heapq.heappop(heap)`.",
    "Heaps pop by priority, not by insertion order."
   ],
   "explain": "Max-heap: largest at the root. Min-heap: smallest at the root. `heapq` is a min-heap, so negate values to get max-heap behaviour.",
   "type": "code"
  },
  {
   "id": "graphs-trees-c06",
   "topic": "graphs-trees",
   "q": "What does this print?",
   "code": "import heapq\n\nheap = [3, 5, 8]\nresult = heapq.heappushpop(heap, 1)\nprint(result, heap)",
   "options": [
    "`3 [1, 5, 8]`",
    "`1 [1, 3, 5, 8]`",
    "`8 [1, 3, 5]`",
    "`1 [3, 5, 8]`"
   ],
   "answer": 3,
   "hint": "The name says the order: push first, then pop.",
   "why": [
    "Popping before pushing is `heapq.heapreplace()`; `heappushpop()` pushes first.",
    "The pushed item is also popped, so the heap doesn't grow.",
    "`heapq` is a min-heap, so it pops the smallest item, not the largest.",
    "1 is pushed, and as the new smallest item it's immediately popped and returned, leaving the heap unchanged."
   ],
   "explain": "`heapq.heappushpop(heap, item)` pushes `item`, then pops and returns the smallest, in one efficient step.",
   "type": "code"
  },
  {
   "id": "dp-c01",
   "topic": "dp",
   "q": "A function `delivery_cost(route)` does an expensive calculation and is called many times with the same few routes. Which change applies memoization?",
   "options": [
    "Fill a table of every possible route in a loop, from the smallest routes up",
    "Run each call in its own thread so the calls happen in parallel",
    "Store each result in a dictionary keyed by route, and return the stored result when that route comes up again",
    "Sort the routes before calling the function"
   ],
   "answer": 2,
   "hint": "Memoization remembers answers it has already computed.",
   "why": [
    "Building a full table bottom-up is tabulation, the other DP approach.",
    "Threads don't avoid repeating the same expensive work.",
    "Memoization (top-down) caches the result for each input and returns the cached value on repeat calls.",
    "Sorting doesn't stop the same calculation from being repeated."
   ],
   "explain": "Memoization stores the results of expensive function calls and returns the cached result when the same inputs occur again.",
   "type": "concept"
  },
  {
   "id": "dp-c02",
   "topic": "dp",
   "q": "Which statement describes how this solution works?",
   "code": "def climb(n):\n    ways = [0] * (n + 1)\n    ways[0] = 1\n    ways[1] = 1\n    for i in range(2, n + 1):\n        ways[i] = ways[i - 1] + ways[i - 2]\n    return ways[n]",
   "options": [
    "It fills a table from the smallest subproblems up to `n` with a loop: bottom-up tabulation",
    "It calls itself recursively and caches the results: top-down memoization",
    "It always takes the biggest possible step first: a greedy algorithm",
    "It splits the staircase into two halves and combines them: divide-and-conquer"
   ],
   "answer": 0,
   "hint": "Look at how `ways` gets filled: is there any recursion?",
   "why": [
    "`ways[i]` is computed in a loop from already-filled entries `ways[i - 1]` and `ways[i - 2]`, building the answer bottom-up.",
    "There's no recursive call; memoization would need the function to call itself.",
    "No choice is being made; every way is counted from previous entries.",
    "The problem is built up step by step, not split in halves."
   ],
   "explain": "Tabulation (bottom-up DP) builds the solution from the ground up by filling a table with solutions to subproblems, usually with loops.",
   "type": "concept"
  },
  {
   "id": "dp-c03",
   "topic": "dp",
   "q": "Which problem is the best candidate for dynamic programming?",
   "options": [
    "Finding the largest number in an unsorted list",
    "Sorting a list with merge sort",
    "Looking up a word's definition in a dictionary",
    "Finding the fewest coins that make an amount, where a naive recursive solution recalculates the same amounts again and again"
   ],
   "answer": 3,
   "hint": "Look for repeated subproblems and an answer built from the best answers to smaller amounts.",
   "why": [
    "One pass solves it; there are no subproblems to reuse.",
    "Merge sort's halves don't overlap, so it's divide-and-conquer rather than DP.",
    "A dictionary lookup is one O(1) step with no subproblems.",
    "Coin change has overlapping subproblems (the same amounts recur) and optimal substructure (the best answer builds on best sub-answers): classic DP."
   ],
   "explain": "Consider DP when a problem has overlapping subproblems and optimal substructure, and a naive recursive solution repeats calculations.",
   "type": "concept"
  },
  {
   "id": "dp-c04",
   "topic": "dp",
   "q": "This naive recursive Fibonacci counts its own calls. What does it print?",
   "code": "calls = 0\n\ndef fib(n):\n    global calls\n    calls += 1\n    if n <= 1:\n        return n\n    return fib(n - 1) + fib(n - 2)\n\nfib(5)\nprint(calls)",
   "options": [
    "`5`",
    "`6`",
    "`15`",
    "`9`"
   ],
   "answer": 2,
   "hint": "`fib(5)` calls `fib(4)` and `fib(3)`, and `fib(4)` calls `fib(3)` again\u2026",
   "why": [
    "5 is `fib(5)`'s return value, not the number of calls.",
    "Six calls would cover each `n` from 0 to 5 only once, but naive recursion repeats them.",
    "Values like `fib(3)` and `fib(2)` are recomputed over and over, giving 15 calls. The count grows exponentially as `n` increases.",
    "Nine calls is what a memoized version makes; this one stores nothing."
   ],
   "explain": "Naive recursive Fibonacci recomputes the same subproblems, giving exponential time. Storing results (memoization or tabulation) makes it linear.",
   "type": "code"
  },
  {
   "id": "dp-c05",
   "topic": "dp",
   "q": "A GPS app computes the shortest route from A to Z. If the best route passes through city M, its A-to-M part is itself the shortest route from A to M. Which DP property is this?",
   "options": [
    "Overlapping subproblems: the same sub-route is calculated many times",
    "Optimal substructure: the best overall route is built from best sub-routes",
    "Divide and conquer: the map is split into two halves",
    "Short-circuiting: the search stops at the first route it finds"
   ],
   "answer": 1,
   "hint": "The statement is about best answers containing best answers.",
   "why": [
    "Route planning can have overlapping subproblems too, but the statement describes how the best solution is composed, not repeated work.",
    "Optimal substructure means an optimal solution contains optimal solutions to its subproblems, which is why GPS systems can build routes with DP.",
    "Nothing here splits the map in halves.",
    "Short-circuiting is a property of `and`/`or`, not route optimization."
   ],
   "explain": "GPS route optimization relies on DP: shortest paths have optimal substructure, so the best sub-routes combine into the best route.",
   "type": "concept"
  },
  {
   "id": "dp-c06",
   "topic": "dp",
   "q": "A project manager has a budget of 10,000 and a list of possible features, each with a cost and a value. They want the most total value without going over budget. Which classic DP problem is this?",
   "options": [
    "The knapsack problem",
    "The shortest path problem",
    "The edit distance problem",
    "Binary search"
   ],
   "answer": 0,
   "hint": "Picture filling a bag with limited capacity with the most valuable items.",
   "why": [
    "Choosing items with costs and values under a capacity limit is the knapsack problem, a resource-allocation classic solved with DP.",
    "Shortest path finds routes in a graph; there's no graph of locations here.",
    "Edit distance measures how different two strings are, as spell checkers do.",
    "Binary search finds a target in sorted data; it doesn't optimize a selection."
   ],
   "explain": "The knapsack problem and its variants model resource allocation in scheduling, budgeting and resource management.",
   "type": "concept"
  }
 ]
};
