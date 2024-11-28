import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { setupTestingRouterInternal } from '@angular/router/testing';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todoproject';

  form: FormGroup;
  data: any;
  //  name:String;
  //  number:number;
  //  email:String;
  //  hobbies:String;
  //  description:String;

  signal:boolean = false;

  details: any[] = [ 
  ];
  datas: any[] = [
    { name: "vikrant", number: 9528727691, email: "vik@gmail.com", hobbies: "singing", description: "hello " }
  ];
  idnx:number;

  // formData:any = [
  //   {control:'firstName',placeholder:'First Name',special:true},
  //   {control:'middleName',placeholder:'Middle Name',special:false},
  //   {control:'lastName',placeholder:'Last Name',special:true},
  // ]


  constructor(private fb: FormBuilder, private dialog:MatDialog ) { }
  // todo:any = [
  //   {
  //     name :'vikrant',
  //     task:'buy items',
  //     description:'butyt items for utensils'
  //   },
  //   {
  //     name :'vikrant',
  //     task:'buy items',
  //     description:'butyt items for utensils'
  //   }
  // ]
  submit() {
    console.log(this.form.value)
    if(this.signal && this.form.valid){
      this.datas.splice(this.idnx,1,this.form.value);
      this.signal = !this.signal;
    }else if (this.form.valid) {
      this.datas.push(this.form.value);
      console.log(this.datas);
      console.log(this.data);
      this.form.reset();
    }
  }

  deleteItem(index: number) {
    this.datas.splice(index, 1);
  }
  reset() {
    this.form.reset();
  }

  // edit(){

  // }
  
  editItem(index: number) {
    console.log(index,this.datas);
    this.idnx = index;
    console.log(this.idnx)
    this.signal = !this.signal;
    this.form.setValue(this.datas[index])
    console.log(this.signal)
//  this.openDialog();
    // this.name = prompt("enter the name");
    // this.number = parseInt( prompt('enter mobile number'));
    // this.email = prompt("enter the email");
    // this.hobbies = prompt("enter the hobbies");
    // this.description = prompt("enter the description");
    // this.details.push(this.name,this.number,this.email,this.hobbies,this.description);
    // console.log(this.details)
    // this.datas.splice(index,1,this.details)  
    // this.idx = index;
    // console.log(this.idx);
    // this.details.push(this.datas[index]);
    // console.log(this.details)
  }

  ngOnInit() {
    this.formsection();
  }

  formsection() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      hobbies: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  
  
  openDialog(): void { 
    let dialogRef = this.dialog.open(dialogbox, { 
      width: '800px', 
      data: this.details
      
    }); 
    console.log('jzgfjhvsgdf',this.details);
  
    dialogRef.afterClosed().subscribe(result => { 
      // this.animal = result; 
    }); 
  } 

}


@Component({ 
  selector: 'dialogbox', 
  templateUrl: 'dialogbox.html', 
}) 
export class dialogbox { 
  
  constructor( 
    public dialogRef: MatDialogRef<dialogbox>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { console.log('hhhhhh',data);
    } 
  
  onCancel(): void { 
    this.dialogRef.close(); 
  } 
  
}

