import { Component, OnInit } from '@angular/core';

import { SubtitleService } from './subtitle.service';
import { AnswerService } from './answer.service';

import { Observable } from "rxjs/Observable";

import { LocalStorage } from "ng2-webstorage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SubtitleService,
    AnswerService
  ]
})
export class AppComponent implements OnInit {
  private ver: string = "1.0.0";

  private subtitle: string;

  @LocalStorage()
  private lastAnswer: any;

  private answers: any[];

  constructor(
    private $sub: SubtitleService,
    private $ans: AnswerService
  ) {

  }

  ngOnInit() {
    this.$ans.generateAnswer();

    this.subtitle = this.$sub.getRandom();

    this.$ans.getAnswers( 8 )
      .subscribe( ans => this.answers = ans );
  }
}
