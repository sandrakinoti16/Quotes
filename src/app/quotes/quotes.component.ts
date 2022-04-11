import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quote[] = [
    new Quote (1,'Sandra','Human spirit','You define your own life. Don’t let other people write your script.','Oprah Winfrey', new Date(2022,6,12),0,0),
    new Quote (2,'cole','Dream','When you have a dream, you’ve got to grab it and never let go','anonymous', new Date(2022,5,14),0,0),
    new Quote (3,'precious','Possible','Nothing is impossible. The word itself says ‘I’m possible','Audrey Hepburn',new Date(2022,6,3),0,0),
    new Quote (4,'lorein','Time','The bad news is time flies. The good news is you’re the pilot','Michael Altshuler',new Date(2022,7,7),0,0),
    new Quote (5,'patrick','life','Life has got all those twists and turns. You’ve got to hold on tight and off you go.','Nicole Kidman',new Date(2022,7,17),0,0),
    new Quote (6,'loise','Success','Success is not final, failure is not fatal: it is the courage to continue that counts.”','Winston Churchill',new Date(2022,7,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index: string | number){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}