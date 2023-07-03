import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesflix';
  allData:any=[]
  showData:boolean=false
  searchValue:any
  constructor(private api:DataService){

  }

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.api.getApiData(this.searchValue).subscribe((res)=>{
      this.allData=res
      console.log(res)
      this.showData=true
    })
  }

submitData(){
  console.log(this.searchValue)
  this.getData()
}
}
