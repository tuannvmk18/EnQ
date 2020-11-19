import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'TypeQuestionPipe'})
export class TypeQuestionPipe implements PipeTransform{
  transform(value: string): any {
    switch(parseInt(value)) {
      case 0:
        return 'Grammar';
      case 1:
        return 'Vocabulary';
    }
  }
}
