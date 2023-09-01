# project_10

## Run developed application locally

1. Clone repo
```git clone https://github.com/AndreyBondarchuk/project_10.git```

2. Go to project
```cd project_10```

2. Setup modules
```npm install```

3. Run project
```npm start```

4. Run tests
```npm test```

## Live demo
[project_10](https://andreybondarchuk.github.io/project_10/)


## Description 
The application works without errors

### Validation Requirements
^: This asserts the position at the start of the string.

(?!.*[\\s]): This is a negative lookahead that asserts that the string does not contain any whitespace characters. \\s is a shorthand character class that matches any whitespace character, and .* matches zero or more of any character.

(?=.*[a-z]): This is a positive lookahead that asserts that the string contains at least one lowercase letter.

(?=.*[A-Z]): This is a positive lookahead that asserts that the string contains at least one uppercase letter.

(?=.*\\d): This is a positive lookahead that asserts that the string contains at least one digit.

(?=.*[!\"#\\$%&'()*+,-./:;<=>?@[\\]^_\{|}~])`: This is a positive lookahead that asserts that the string contains at least one special character from the given list.

.{1,${maxLength}}: This ensures that the length of the string is within the specified range, where maxLength is passed as a parameter to the function.

$: This asserts the position at the end of the string.
