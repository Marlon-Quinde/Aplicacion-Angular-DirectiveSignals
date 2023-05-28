import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  //constructor(private _fb:FormBuilder)  {}
  private _fb = inject( FormBuilder );

  public color: string = 'green';

  public myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(6),Validators.email]],
  });

  changeColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
