import * as token from '../token/token';

export class Lexer {
  input: string;
  position: number; // ptr to ch ; input[position] === ch
  readPosition: number; // ptr to input[position] + 1
  ch: number; // current character as a code point

  constructor(input: string) {
    this.input = input;
    this.readChar();
  }

  readChar(): void {
    if (this.readPosition >= this.input.length) {
      this.ch = 0;
    }

    else {
      this.ch = this.input.charCodeAt(this.readPosition);
    }

    this.readPosition = this.readPosition + 1;
    this.position = this.readPosition;
  }

  NextToken(): token.Token {
    let tok: token.Token;

    switch (this.ch) {
      case "=".charCodeAt(0):
        tok = this.newToken(token.ASSIGN, this.ch);
        break;
      case "(".charCodeAt(0):
        tok = this.newToken(token.LPAREN, this.ch);
        break;
      case ")".charCodeAt(0):
        tok = this.newToken(token.RPAREN, this.ch);
        break;
      case ",".charCodeAt(0):
        tok = this.newToken(token.COMMA, this.ch);
        break;
      case "+".charCodeAt(0):
        tok = this.newToken(token.PLUS, this.ch);
        break;
      case "{".charCodeAt(0):
        tok = this.newToken(token.LBRACE, this.ch);
        break;
      case "}".charCodeAt(0):
        tok = this.newToken(token.RBRACE, this.ch);
        break;
      case "0".charCodeAt(0):
        tok = this.newToken(token.EOF, this.ch);
        break;
      default:
        tok = this.newToken(token.ILLEGAL, this.ch);
    }

    this.readChar();
    return tok
  }

  newToken(tokenType: token.TokenType, ch: number): token.Token {
    const tok: token.Token = {
      Type: tokenType,
      Literal: String.fromCodePoint(ch)
    };
    return tok;
  }
}
