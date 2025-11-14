export class Lexer {
  input: string;
  position: number; // ptr to input char that corresponds to ch
  readPosition: number; // ptr to the next char in the input
  ch: number; // current character  

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

}
