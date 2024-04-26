/*
 * 1 Calcule la suma de todas las resistencias conectadas en serie.
    Ejemplos:
    - `sumResitance([-1,5,6,3])` debería devolver `"15 ohmios"`. (|−1| + 5 + 6 + 3 = 15)
    - `sumResitance([14,3.5,6])` debería devolver ``23,5 ohmios''. (14 + 3,5 + 6 = 23,5)
    - `sumResitance([8,15,100])` debería devolver ``123 ohmios''. (8 + 15 + 100 = 123)
    
    Nota: Este enfoque utiliza el valor absoluto de cada resistencia para garantizar que todos los valores sean positivos.h uses the absolute value of each resistance to ensure all values are positive.
*/
        
    const resistencia1 = [-1,5,6,3];
    const resistencia2 = [14,3.5,6]; 
    const resistencia3 = [8,15,100];
     
    function sumResitance(arr){
      let suma = 0;
      for (let i = 0; i < arr.length; i++){
        suma += Math.abs(arr[i]);
      }
      return suma;
    }

    sumResitance(resistencia3);
    const try2 = sumResitance(resistencia1);
    console.log(try2);


/*
* 2 Dado un número, devuelve el número dividido en sus mitades en una matriz.
     Ejemplos:
     - `numDiv(4)` debería devolver `[2, 2]`.
     - `numDiv(10)` debería devolver `[5, 5]`. 
*/

    function numDiv(num){
      return [Math.floor(num/2), Math.ceil(num/2)];
    }
    console.log(numDiv(4));
    console.log(numDiv(10));



/*
* 3 Sociedad secreta
     Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.

     Ejemplos:
     - `secretName(["Esperanza", "Franco", "Nia"])` debería devolver `'EFN'`.
     - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` debería devolver `'CJMPRR'`.
     - `secretName(['Harry', 'Ron', 'Hermione'])` debería devolver `'HHR'`.
*/

    const member1 = ["Esperanza", "Franco", "Nia"];
    const member2 = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
    const member3 = ['Harry', 'Ron', 'Hermione'];

    function secretName(arr){
      let res = [];
      arr.forEach((e) => res.push(e.charAt(0)));
      return res.sort().join("");
    }
    console.log(secretName(member1));
    console.log(secretName(member2));
    console.log(secretName(member3));


/*
* 4 Muestra el estado en línea de una lista de usuarios.
     Ejemplo:
     - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` debería devolver ``mockIng99, J0eyPunch y 1 más en línea'`.
*/
     const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];
function displayUsers(arr){
     const count = users.length;
      let res;
      if(count === 1){
          res = `${arr[0]} is online`;
      }else if (count ===2){
          res = `${arr[0]} and ${arr[1]} are online`;
      }else{
          res = `${arr[0]}, ${arr[1]} and ${count-2} more are online`;
      }
      return res;
}
    console.log(displayUsers(users));
   