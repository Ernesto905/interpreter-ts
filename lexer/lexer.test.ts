import { Lexer } from "./lexer";
import * as token from "../token/token"

test("Lexer tokenizes a simple string of tokens.", () => {
  const input = "=+(){},;";

  const lexer = new Lexer(input);
  const tests = {
    "=": token.ASSIGN,
    "(": token.LPAREN,
    ")": token.RPAREN,
    "{": token.LBRACE,
    "}": token.RBRACE,
    ",": token.COMMA,
    ";": token.SEMICOLON,
    "": token.EOF,
  }

  for (let i: number = 0; i < input.length; i++) {
    let tok: token.Token = lexer.NextToken();

    expect(tok.Type).toBe(tests[input[i]])
    expect(tok.Literal).toBe(input[i])
  }
})
