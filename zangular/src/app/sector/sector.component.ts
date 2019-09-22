import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  getSectorList:boolean=false;
  rowData:any;

  constructor(private http:HttpClient) {
    
   }

   onClickSubmit(){
    this.rowData = this.http.get('http://localhost:8080/stockmarket-0.0.1-SNAPSHOT/sector');
    this.getSectorList=true;
   
   }

   OnRegister(postData){
    this.http.post('http://localhost:8080/stockmarket-0.0.1-SNAPSHOT/sector',postData)
    .subscribe(posts=>{
      console.log(posts);
      console.log("Registered Success");
     
      this.onClickSubmit()
      alert("Registered Success")
      //this.router.navigate(['/']);
    })
  }
  ngOnInit() {  
  }

  sectorcolumnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Brief', field: 'brief', sortable: true, filter: true,width: 100,editable: true}
    
];

}
