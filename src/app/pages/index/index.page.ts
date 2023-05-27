import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {


  number : Map <number, number> = this.Random();
  
  answer: number = 0;

  message:string = "Taper votre réponse";

  constructor() { }



  getValue ( event : any) {

    this.answer = event.target.value;

    console.log(this.answer);
  }

  onClickFunction(event: any): void {


    console.log(this.answer);

    console.log(this.number);

    let final = this.Decompose(this.answer);

    console.log(final);

    let message = this.HandleCase(this.Dead(this.number, final), this.Alive(this.number, final));

    this.message = message;

    console.log(message);

  }


  onReset(event: Event){
    window.location.reload();
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  ngOnInit() {
  }

   Alive (number : Map<number, number>, answer: Map<number, number>) : number {
    //Initializing the number of digits that are alive
    let alive = 0;
    //Initializing the index
    
    for(let i=0;i<4;i++){
    
        for(let j=0;j<4;j++){
            if(answer.get(i) === number.get(j)){
              alive = alive + 1;
              break;
            }
        }
    }
    
    return alive;
    
    }

    Dead (number : Map<number, number>, answer : Map<number, number>) : number{
      //Initializing the number of digits that are dead
      let dead = 0;
      //Initializing the index
      let i = 0;
      
      for(i=0;i<4;i++){
          if(answer.get(i) === number.get(i)){
            dead = dead + 1;
          }
      }
      
      return dead;
      }

      Decompose (answer : number) : Map<number, number>{

        //Initializing decomposed digit of the input answer
        let digit;
        
        //Initializing digit Map
        let map = new Map();
        
        //Decomposing the first digit
        digit = Math.round(answer/1000);
        
        map.set(0,digit);
        
        answer = answer - digit*1000;
        
        //Decomposing the second digit
        digit = Math.round(answer/100);
        
        map.set(1,digit);
        
        answer = answer - digit*100;
        
        //Decomposing the third digit
        
        digit = Math.round(answer/10);
        
        map.set(2,digit);
        
        answer = answer - digit*10;
        
        //Adding the final digit
        
        digit = answer;
        
        map.set(3,digit);
        
        return map
        
        }


        HandleCase (dead : number,alive : number) : string{
      
      
          if (dead == 4){
            return "Félicitations, vous avez réussi à deviner le nombre";
          }
          else{
            return "Vous avez attrapé "+dead+" mort et "+alive+" vivant";
          }
      
      }

      Random () : Map<number, number>{

        //Initializing map
        let map = new Map();
        
        //Available digits to choose from
        const available = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        
        //Initializing index
        let index = 0;
        
        //Initializing number
        let number = 0;
        
        //Adding random digits to the map while deleting them from the available digits table to avoid repetition
        for(let i=0; i<4;i++){
        
          index = Math.floor(Math.random() * available.length);
          number = available[index];
          map.set(i, number);
          available.splice(index, 1);
        
        }
        
        return map;
        
        }

}
