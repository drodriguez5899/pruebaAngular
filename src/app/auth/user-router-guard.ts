import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UsuariosService } from "../servicios/usuarios.service";


@Injectable({
  providedIn: 'root'
})

export class UserRouterGuard implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.servicioUsuario.isLogged()) return true;
        else{
          this.irHacia.navigate(['/login'])
          return false
        }
      }
      constructor(private servicioUsuario:UsuariosService, private irHacia:Router){}
}
