import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ChatapiService} from '../app/chatapi.service';
import { FormGroup,FormBuilder,FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'expoView';
  answers:any='Responses will be displayed here...';


  constructor(private chatapiService:ChatapiService,private formBuilder:FormBuilder){}

  messageForm=new FormGroup({
    message:new FormControl('')
  });

  ngOnInit(): void {

  }

  onSubmit(){
    this.answers='Receiving Response...Please wait...';
    console.log(this.messageForm.value.message)
     this.chatapiService.getUsers(this.messageForm.value.message).subscribe(data=>{
       this.answers=data.message[0].message.content;
    });
  }
}

