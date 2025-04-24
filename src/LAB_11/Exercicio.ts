class StringComparator { 
    static compararStrings(str1: string, str2: string): boolean {
        str1 = str1.toLowerCase().trim();
        str2 = str2.toLowerCase().trim();
        if (str1 === str2) {
            return true;
        }
        return false;
    }

    static formatar(x: number): string;
    static formatar(x: boolean): string;
    static formatar(x: Date): string;

    static formatar(x: any): string {
        if (typeof x === "number") {
            x = x.toFixed(2).toString();
            return x;
        }
        else if (typeof x === "boolean") {
            if (x === true) return 'SIM';
            return 'NÃO';
        }
        else if (x instanceof Date) {
            x = x.toLocaleDateString('pt-br');
            return x
        }
        else return 'Formato não compatível';
    }
}

const str1 = "   renaa  ";
const str2 = "REnaTa";
console.log(StringComparator.compararStrings(str1, str2));

console.log(StringComparator.formatar(123.1234563));
console.log(StringComparator.formatar(new Date(2023, 9, 5)));
console.log(StringComparator.formatar(true));