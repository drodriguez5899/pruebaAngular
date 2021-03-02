import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  mensaje:string
  activado:boolean=false
  formRegistro=this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(4)]],
    apellidos:['',[Validators.required, Validators.minLength(4)]],
    password:['',[Validators.required, Validators.minLength(8)]],
    password2:['',[Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]],
    dni:['',[Validators.required, dniValido()]]
  })

  constructor(private fb:FormBuilder, private servicioUsuario:UsuariosService, private irHacia:Router) { }

  ngOnInit(): void {
  }
  enviar():void{
    if(this.formRegistro.value.password == this.formRegistro.value.password2){
      this.servicioUsuario.registrar(this.formRegistro.value).subscribe(
        respuesta =>{
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          
          alert('Te Has registrado correctamente')
        },
        error =>{
          console.log(error)
          this.mensaje = error.error.error
        }
        
      )
    } else alert("las contraseñs no coinciden")
  }

}
