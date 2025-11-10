export type TokenType = string;

export interface Token {
  Type: TokenType;
  Literal: string;
};

// valid tokens
export const ILLEGAL: TokenType = "ILLEGAL";
export const EOF: TokenType = "EOF";
export const IDENT: TokenType = "IDENT";
export const INT: TokenType = "INT";
export const ASSIGN: TokenType = "=";
export const PLUS: TokenType = "+";
export const COMMA: TokenType = ",";
export const SEMICOLON: TokenType = ";";
export const LPAREN: TokenType = "(";
export const RPAREN: TokenType = ")";
export const LBRACE: TokenType = "{";
export const RBRACE: TokenType = "}";
export const FUNCTION: TokenType = "FUNCTION";
export const LET: TokenType = "LET"
