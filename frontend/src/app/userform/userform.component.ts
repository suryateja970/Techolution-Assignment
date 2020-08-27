import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
date=new Date()
maxDate = new Date(2017, 0, 1);
minDate = new Date(2010, 0, 1);
  constructor(private fb:FormBuilder) { }
user=this.fb.group({
 Name:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
  LastName:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
  Class:['',[Validators.required]],
  YoP:[this.date,[Validators.required]],
  PoM:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.user.value)
  }
}
