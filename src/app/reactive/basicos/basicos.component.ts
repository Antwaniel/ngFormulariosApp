import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // 1ra version
  // establecer campos
  // miFormulario : FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 3080ti'),
  //   'precio': new FormControl(0),
  //   'existencias': new FormControl(5)
  // });

miFormulario: FormGroup = this.fb.group({
//nombreCampo: [producto, validador sincrono, validador ]asincrono
  nombre: ['',
    [Validators.required, Validators.minLength(3)],  ],
  precio: [ ,
    [Validators.required, Validators.minLength(0)],  ],
  existencias: [ ,
    [Validators.required, Validators.minLength(0)],  ]
})


  constructor(private fb: FormBuilder) { }

    ngOnInit() {
      // set value es cuando se incia el formulario
      this.miFormulario.reset({
        nombre: 'RTX3080ti',
        precio: 1600,
        existencias: 10
      })
    }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if (this.miFormulario.invalid) {
      // markAllastouched: marca todos los campos(los toca)
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    // reset del formulario
    this.miFormulario.reset();

  }


}
