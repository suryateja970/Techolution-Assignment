import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material'
import {BackendService} from '../backend.service'
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit{
  
  constructor(private service:BackendService) { 
    
  }
   data: MatTableDataSource<any>
  MarksCount:any
  dataSource:any
total:any
  @ViewChild(MatSort,{static:false}) sort: MatSort
   

displayedColumns:string[]=['name','rollNumber','marks','status']
  ngOnInit() {
  this.getdata();

}
    getdata()
    {
      this.service.getTableDetails().subscribe(async result=>{
        await console.log(result);
        this.dataSource=await result['data']
         console.log(this.dataSource)
        let i,sum=0,marksdata=[];
        for(i=0;i<result['data'].length;i++)
        {
          for(let key in result['data'][i].marks)
          {
            
            console.log(result['data'])
            console.log(result['data'][i].marks[key])
            if(result['data'][i].marks[key]<20)
            {
             this.dataSource[i].status="Fail"
            }
            sum=sum+Number(result['data'][i].marks[key])
          }
          console.log(sum)
          
          marksdata.push(Number(sum))
          this.dataSource[i].marks=sum
          sum=0
        }
          for(let k=0;k<marksdata.length;k++)
          {
            for(let l=0;l<marksdata.length-k;l++)
            {
              let swap
            if(marksdata[l]>marksdata[l+1])
            {
              swap=marksdata[l]
              marksdata[l]=marksdata[l+1]
              marksdata[l+1]=swap
            }
            }
          }
          
          
        

        console.log(marksdata)
        let length=marksdata.length;
          this.total=marksdata[length-1]
          console.log(this.total)
          for(i=0;i<this.dataSource.length;i++)
          {
            if(this.dataSource[i].marks==this.total)
            {
              this.dataSource[i].status="Topper"
            }
          }
        console.log(this.dataSource)
        this.data=new MatTableDataSource(this.dataSource)
        this.data.sort=this.sort
         console.log(this.sort)
      
      }
      )
    }
}
