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
        var logged = this.accountService.isLoggedIn();
        console.log(logged)
        if(logged){
            console.log('log true')
            return true;
        }
        this.router.navigate(["login"])
        console.log(logged)
        return false;
    }
}