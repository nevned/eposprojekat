
import type { Osoba } from "../models/Osoba";
// import { TestComponent} from 'components/TestComponents';
// export function TestComponent(){}

function TestComponent() {

    // const ime:string = "Aleksa";
    const o1:Osoba = {
        ime:"Aleksa",
        prezime: "Markovic",

        ispisiIme: function():string{
            return `${this.ime} ${this.prezime}`; 
        }
    }
    return (
        <div>
            {/* <h1>Zdravo, {ime}!</h1> */}
            <h1> Zdravo, {o1.ispisiIme()}</h1>
        </div>
    )
}

export default TestComponent;
// import TestComponent from 'components/TestComponents';
