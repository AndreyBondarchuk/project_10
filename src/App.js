export const isValid = (input, maxLength) => {
  const regex = new RegExp(
    `^(?!.*[\\s])(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!\"#\\$%&'()*+,-./:;<=>?@[\\]^_\`{|}~]).{1,${maxLength}}$`
  );

  return regex.test(input);
};

function App() {
  return (
    <div className="App">
      <div>"Passw0rd!", 10: {String(isValid("Passw0rd!", 10))}</div>
      <div>"AbcdefgH1@", 12: {String(isValid("AbcdefgH1@", 12))}</div>
      <div>no_whitespace", 15: {String(isValid("no_whitespace", 15))}</div>
      <div>
        "NoDigitsOrSpecialChars", 25:{" "}
        {String(isValid("NoDigitsOrSpecialChars", 25))}
      </div>
      <div>
        "OnlyLowerCaseNoSpecialChars", 30:{" "}
        {String(isValid("OnlyLowerCaseNoSpecialChars", 30))}
      </div>
      <div>
        "OnlyUppercaseNoSpecialChars", 30:{" "}
        {String(isValid("OnlyUppercaseNoSpecialChars", 30))}
      </div>
      <div>
        "OnlySpecialChars!", 17: {String(isValid("OnlySpecialChars!", 17))}
      </div>
      <div>
        " TooManySpaces ", 30: {String(isValid("     TooManySpaces   ", 30))}
      </div>
      <div>"1234!abcdEFGH", 13: {String(isValid("1234!abcdEFGH", 13))}</div>
      <div>
        "Abcdefghijklmno1!", 30: {String(isValid("Abcdefghijklmno1!", 30))}
      </div>
    </div>
  );
}

export default App;
