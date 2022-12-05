import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common'; 

import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})

export class ViewProfileComponent implements OnInit{
	

	
	constructor(private service:PostService){}
	viewProf:any={email:"",
                faculty:"",
			id:"",
			name:"",
		surname:""}
	ngOnInit(){
		this.service.getAllData().subscribe(result=>{
			console.log(result);
			this.viewProf=result;
			console.log(this.viewProf,"==")

			
		},
		(error)=>{
		  console.log(error)
		})
	
}
pwdChange(data:any){
	this.service.postPwd().subscribe(result=>{
		console.log(result);
})
}

  url:any;
 //Angular 11, for stricter type
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		
		if(event.target.files && event.target.files[0]){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
			
		}
	}
	
	
}
}
