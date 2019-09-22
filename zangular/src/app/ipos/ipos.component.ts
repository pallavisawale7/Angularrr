import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-iops',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IPOsComponent implements OnInit {
  //getCompanyList:boolean=false;
  //rowData:any;

  constructor(private http:HttpClient) {
    
   }

   onClickSubmit(){
    // this.rowData = this.http.get('http://localhost:8080/stockmarket-0.0.1-SNAPSHOT/ipos');
    // this.getCompanyList=true;
   
   }

  //  OnRegister(postData){
  //   this.http.post('http://localhost:8080/stockmarket-0.0.1-SNAPSHOT/ipos',postData)
  //   .subscribe(posts=>{
  //     console.log(posts);
  //     console.log("Registered Success");
     
  //     this.onClickSubmit()
  //     alert("Registered Success")
  //     //this.router.navigate(['/']);
  //     })
  //   }
  ngOnInit() {  
  }

  iposcolumnDefs = [
    {headerName: 'Company  Name', field: 'companyname', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Stock Exchange', field: 'stockexchange', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Totrl Share', field: 'totalshare', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Opentime', field: 'opentime', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Remarks', field: 'remarks', sortable: true, filter: true,width: 100,editable: true}
];


}
