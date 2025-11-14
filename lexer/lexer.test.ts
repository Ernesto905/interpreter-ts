import { Lexer } from "./lexer";

test("Lexer tokenizes a simple string of tokens.", () => {
  const lexer = new Lexer(input);

  const input = "=+(){},;";

  for (let i: number = 0; i < input.length; i++) {
    let { type, literal } = lexer.NextToken();
    expect(types).toBe(input[i]);
  }
})
