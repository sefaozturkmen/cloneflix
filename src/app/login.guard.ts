import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AccountService } from "./services/account.service";

@Injectable()
export class LoginGuard implements CanActivate{

    constructor(
        private accountService:AccountService,
        private router: Router
        ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        var logged = localStorage.getItem("logged")
        if(logged == "true"){
            return true;
        }
        this.router.navigate(["login"])
        return false;
    }
}