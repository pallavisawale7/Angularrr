import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  
  getCompanyList:boolean=false;
  rowData:any;

  constructor(private http:HttpClient) {
    
   }

   onClickSubmit(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');
    this.http.get('http://localhost:8080/company',{ headers: headers })
          .subscribe(data=>{
            console.log(data);
            console.log("get Success");
          });
    this.getCompanyList=true;
    //Basic YWRtaW46cGFzc3dvcmQ=
   
   }

   OnRegister(postData){
    this.http.post('http://localhost:8080/company',postData)
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

  columnDefs = [
    {headerName: 'Company  Name', field: 'companyname', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Turn Over', field: 'turnover', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Board of director', field: 'boardofdirec', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Listed in stock', field: 'listedinstock', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Sector', field: 'sector', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'About', field: 'about', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'Stockcode', field: 'stockcode', sortable: true, filter: true,width: 100,editable: true},
    {headerName: 'CEO', field: 'ceo', sortable: true, filter: true,width: 100,editable: true},
];

}
