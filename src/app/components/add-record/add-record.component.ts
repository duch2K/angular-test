import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  loginForm = [];
  email = '';
  password = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  submit() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    // console.log(this.loginForm.value);
  }

}
