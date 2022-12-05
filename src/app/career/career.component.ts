import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { PostService } from '../service/post.service';
import { CommonModule } from '@angular/common'; 

import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})

export class CareerComponent implements OnInit {

  headerTitle:string = "#Careers";
  headerDescription:string="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
 
  posts:any;

  constructor(private service:PostService) { }

  ngOnInit(): void {
  
  this.service.getVec().subscribe(response=>{
    this.posts = response;
    console.log(response);
      
    },
    (error)=>{
      console.log(error)
    }
    
    );

  }


}