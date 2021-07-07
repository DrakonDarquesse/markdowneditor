const FormatMarkDown = {
  toHtmlString(text: string): string {
    const htmlString = text
      .split("\n")
      .map(this.styleText)
      .map(this.addBreaks)
      .reduce(this.combineString);
    return htmlString;
  },

  addBreaks(elm: string): string {
    return elm + "<br>";
  },

  combineString(
    combinedString: string,
    elm: string,
    index: number,
    array: string[]
  ): string {
    combinedString += elm;
    if (index === array.length - 1) return "<p>" + combinedString + "</p>";
    else return combinedString;
  },

  styleText(elm: string) {
    const bold = /\*\*(\w+|(\w+.+\w+))\*\*/g,
      italic = /\*\*\*(\w+|(\w+.+\w+))+?\*\*\*/g,
      underline = /_(\w+|(\w+.+\w+))_/g;

    return elm
      .replace(italic, "<i>$1</i>")
      .replace(bold, "<b>$1</b>")
      .replace(underline, "<u>$1</u>");
  },
};

export default FormatMarkDown;
