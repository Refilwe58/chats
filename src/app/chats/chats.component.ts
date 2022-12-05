import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../chats.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChattingService } from '../chatting.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']

})
export class ChatsComponent implements OnInit {
ids!:any
convo!: FormGroup;
  getId(index:number){
    //alert(this.viewUsers)
    console.log(index);
    // let id=(<HTMLInputElement>document.getElementById('id_'+index)).value;
    // alert(id)
    // this.ids = id
    //console.log(this.ids)
    return index;
    this.ids =index;
  }



  constructor(private chats:ChatsService, private chatting: ChattingService,private router:ActivatedRoute) { }
  // viewUsers:any = [{name:"Shiko"},{name:"Shiko"},{name:"Shiko"},{name:"Shiko"},{name:"Shiko"}]
  viewUsers:any;
  ngOnInit(): void {
    this.chats.getUsers().subscribe(result=>{
			console.log(result);
			this.viewUsers=result
		},
    (error)=>{
		  console.log(error)
		})
    this.convo=new FormGroup({
      message: new FormControl('',[Validators.required])
    })
  }
  messages :any
  getMessages(){
    this.chatting.getMessage(this.router.snapshot.params['id']).subscribe(result=>{
      console.log(result);
      this.messages=result;
    })
  }


  sendMessage(){
    let g=this.convo.value
    console.log(g);
     if(this.convo.valid){
     this.chatting.sendMessage(this.router.snapshot.params['id'],g).subscribe(result=>{
      console.log(result);

     })
   }
  }

}
