import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService{
  private _tagsHistory: string[] = []
  constructor() { }

  get tagsHistory(){
    return [...this._tagsHistory]
  }

  public searchTag(tag: string): void{
    public indx: 0
    for(;  indx < tag.length; indx++){

    }
    this._tagsHistory.unshift(tag)
    console.log(this.tagsHistory)
  }

}
