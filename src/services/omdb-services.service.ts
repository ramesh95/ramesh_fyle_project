
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OmdbServices {
  PLATFORM_URL:any;
  PLATFORM_Full_URL: string;

  constructor(private http: HttpClient) { 
    this.PLATFORM_URL="http://www.omdbapi.com/";
    console.log("services is calling");
  }

  omdbService(moviename, movieEpisode, movieType){
    console.log("search key words: ", moviename + ":::"+ movieEpisode +":::"+ movieType);
    this.PLATFORM_Full_URL=this.PLATFORM_URL+'?s={["' + moviename + '"]}&y?='+ movieEpisode + '&t?s={["' + movieType + '"]}&apikey=91321b81&page=1'
    return this.http.get( this.PLATFORM_Full_URL);
  }
 
}
