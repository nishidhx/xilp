


const string = `
# Hello World!
This is my first paragraph. You can include code snippets easily:
` 


class MarkDownParser {
    public text: string;
    public generatedHTML: string = "";

    constructor(string: string) {
        this.text = string
    }

    public generateHTML() {
        for (const chr of this.text.split("\n")) {
            const mapped = this._string_mapper(chr);
            if (mapped == "h1") {
                return `<${mapped}> ${chr.substring(1)}<\\${mapped}>`
            }
        }
    }

    public _string_mapper(chr: string) {
        switch (chr[0]) {
            case "#":
                return "h1";
            case "-": 
                return "•";
            case "":
                return "p";
            default: 
                return "";
        }
    }   
}

const test = new MarkDownParser(string)


console.log(test.generateHTML())