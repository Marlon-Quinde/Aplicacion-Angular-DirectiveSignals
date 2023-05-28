import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private _htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage()
  }

  constructor(private _element: ElementRef<HTMLElement>) { 
    this._htmlElement = _element

    //this._htmlElement.nativeElement.innerHTML = 'Hola mundo'
  }


  ngOnInit(): void {
    
  }

  setStyle():void{
    if(!this._htmlElement) return;

    this._htmlElement.nativeElement.style.color = this._color
  }

  setErrorMessage(){
    if(!this._htmlElement) return;

    if(!this._errors){
      this._htmlElement.nativeElement.innerText = '';
      return
    }

    const errors = Object.keys(this._errors);
    console.log(this._errors);

    if(errors.includes('required')){
      
      this._htmlElement.nativeElement.innerText = 'Este campo es requerido'
      return
    }

    if(errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];
      this._htmlElement.nativeElement.innerText = `Minimo ${min} letras, actualmente hay ${current}.`;
      return
    }

    if(errors.includes('email')){
      this._htmlElement.nativeElement.innerText = 'Formato de email incorrecto.'
    }

  }

}
