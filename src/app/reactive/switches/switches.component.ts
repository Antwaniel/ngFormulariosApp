import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent  implements OnInit{
  miFormulario: FormGroup = this.fb.group({
      genero: [ 'M', Validators.required  ],
      notificaciones: [ true, Validators.required  ],
      condiciones: [false, Validators.requiredTrue]
  });


  persona ={
      genero: 'F',
      notificaciones: true,

  }



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones:true
    });

    // 1ra forma
    // this.miFormulario.get('condiciones')?.valueChanges
    // .subscribe( newValue =>{
    //   console.log(newValue);
    // })

    // 2da forma
    //  this.miFormulario.valueChanges
    // .subscribe ( (form) => {
    //   delete form.condiciones;
    //   this.persona = form;
    //   console.log(form);
    // })

    // 3ra forma
      this.miFormulario.valueChanges
    .subscribe ( ( {condiciones, ...rest} ) => {
      this.persona = rest;
    })



  }


  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;

  }



}
