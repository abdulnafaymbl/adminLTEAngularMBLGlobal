import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CurrencyMaskInputMode } from 'ngx-currency';

@Component({
  selector: 'input-currency',
  templateUrl: './input-currency.component.html',
   providers:[
    { provide: NG_VALUE_ACCESSOR,
     useExisting : InputCurrencyComponent,
     multi:true,
    },
 ]
})
export class InputCurrencyComponent implements ControlValueAccessor{

  constructor() { }

  @Input() label :string;



options = {
    align: "left",
    allowNegative: false,
    allowZero: false,
    decimal: ".",
    precision!: 0,
    prefix: "",
    suffix: "",
    thousands: ",",
    nullable: true,
    min: null,
    max: null,
    inputMode: CurrencyMaskInputMode.NATURAL
  };
  
  disabled= false;
  value : string;

  onChange: any = (value :string)=>{
    this.value = value;
  }

  onTouched : any = ()=> {
    
  };

  writeValue(obj: any): void {
    this.value=obj;
  }
  registerOnChange(fn: any): void {
   this.onChange = fn ;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn ;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled ;
  }


}
/*export class InputCurrencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
