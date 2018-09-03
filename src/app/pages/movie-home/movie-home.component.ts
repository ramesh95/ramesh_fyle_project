import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbServices } from '../../../services/omdb-services.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent {

  title = 'Fyle Movie System';
  show: boolean = true;
  back: boolean = false;
  moviName: any;
  movieEpisode: any;
  movieSearchResult: any;
  movieSearchType: any;
  searchedUrl: string;
  searchedResponse: any;
  geturl: string;
  movieType: any;
  returendData: any;
  returnedResponse: boolean;
  movieSearchedResult: any = [];
  Platform_full_Url: string;
  constructor(private router: Router, private odmbService: OmdbServices) {
    console.log("Constructor called");
  }

  searchOption(moviename, movieepisode, movietype) {
    let _self = this;
    if (moviename || movieepisode || movietype) {
      _self.odmbService.omdbService(moviename, movieepisode, movietype).subscribe(data => {
        _self.returendData = data;
        console.log("Restult", _self.returendData);
        let serviceResponse = (_self.returendData.Response);
        if (serviceResponse == "True") {
          _self.returnedResponse = true;
          let SearchedDta = _self.returendData.Search;
          let searchedLength = _self.countProperties(SearchedDta);
          for (let i = 0; i <searchedLength; i++) {
            _self.movieSearchedResult.push(SearchedDta[i]);
          }
          this.back = true;
        }

        else {
          _self.returnedResponse = false;
        }
        _self.show = false;
      });
    }
    else {
      alert("Please Enter the Fields.");
    }
  }

  countProperties(obj) {
    var count = 0;
    for (var property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        count++;
      }
    }
    return count;
  }

  goBack() {
    this.show = !this.show;
  }

}

