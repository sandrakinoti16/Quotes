import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePipePipe } from './date-pipe.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.components';
// import { QuotesFormComponent } from './quotes-form/quotes-form.component.html';
import { HighlightQouteDirective } from './highlight-quote.directive';
// import { HighlightQouteDirective } from './highlight-qoute.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    DatePipePipe,
    QuotesFormComponent,
    HighlightQouteDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }