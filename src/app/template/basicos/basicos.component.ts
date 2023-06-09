import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // recibe elemento de padre
  // @Input()


// viechild para hacer referencia local(html)
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm ={
    producto: 'RTX3090',
    precio: 10,
    existencias: 10
  }


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid
          && this.miFormulario?.controls['producto']?.touched;
  }

   precioValido():boolean{
    return this.miFormulario?.controls['precio']?.touched
          && this.miFormulario?.controls['precio']?.value<0;
  }

//  guardar( miFormulario:NgForm){
  guardar( ){
    console.log('Pisteo completo');

    // reset form
    this.miFormulario.resetForm({
      // valores iniciales
      producto: 'algo',
      existencias: 0,
      precio: 0
    }
    );

  }

}
