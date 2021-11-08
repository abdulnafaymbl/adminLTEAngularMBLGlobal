import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'inventory-pictures',
  templateUrl: './inventory-pictures.component.html'
})
export class InventoryPicturesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,) { }

  imageDetailsForm: FormGroup;
  imageSource: string = "../../../../assets/dist/img/user1-128x128.jpg";
  componentObjects : any = [];

  ngOnInit(): void {

    this.imageDetailsForm = this.formBuilder.group({
      imageDescription: ['', [Validators.required]],
      imageSource: ['',[Validators.required]],
    });

    this.getImageDetailFormControls.imageSource.setValue("sadhaskdhkashkjdhjklash"); 
  }

  get getImageDetailFormControls(){
    return this.imageDetailsForm.controls;
  }

  addComponent(){
    console.log("function called to add a component");
    let cObj = {
      imageDescription :this.getImageDetailFormControls.imageDescription.value,
      imageSource :this.getImageDetailFormControls.imageSource.value
    }
    this.componentObjects.push(cObj);
  }
  
  deleteComponent(index: number) {
    this.componentObjects.splice(index, 1);
  }

  onImageSelect(event :any){
    console.log("event: " , event);
    console.log("event.target.files[0]: " ,event.target.files[0].name);
    if(event.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e : any ) =>{
        // this.imageSource = e.target.result;
        this.imageDetailsForm.controls.imageSource.patchValue(e.target.result); 
      }
    }

  }

}
