import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister=this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(4)]],
    apellidos:['',[Validators.required, Validators.minLength(4)]],
    password:['',[Validators.required, Validators.minLength(8)]],
    password2:['',[Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]],
    dni:['',[Validators.required, dniValido()]]
  })

  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
  }
  submit():void{
    if(this.formRegister.value.password == this.formRegister.value.password2)  {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          this.irHacia.navigate(['/perfil'])
          alert('Te Has registrado correctamente')

        },
        error => console.log(error)
      )
    } else alert('Las contraseñas no coinciden') 
  }
  get dni1(){return this.formRegister.get("dni")}
  get nombre1(){return this.formRegister.get("nombre")}
  get apellidos1(){return this.formRegister.get("apellidos")}
  get password1(){return this.formRegister.get("password")}
  get email1(){return this.formRegister.get("email")}
  get telefono1(){return this.formRegister.get("telefono")}
  get password2(){return this.formRegister.get("password2")}

}
