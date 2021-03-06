import { Injectable } from '@angular/core';

import { AnswerService } from './answer.service';

@Injectable()
export class SubtitleService {
  private subtitles: Array<string> = [
    'Welcome!',
    'The best bag identifier on the web',
    'Only the best can be bag',
    'Tell your kids, tell your wife',
    'Such bag, wow'
  ];

  private subtitlesExtended: Array<string> = [
    'Welcome back!',
    'You think like bag...',
    'Today\'s another day'
  ];

  constructor( private $ans: AnswerService ) {}

  public getRandom(): Promise<string> {
    return this.$ans.isNewUser()
      .then(( newUser ) => {
        if ( !newUser ) { Array.prototype.push.apply( this.subtitles, this.subtitlesExtended); }

        return this.subtitles[ Math.floor( Math.random() * this.subtitles.length )];
      });
  }
}
