import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
    NbLoginComponent,
    getDeepFromObject,
    NbAuthSocialLink,
    NB_AUTH_OPTIONS,
    NbAuthService
} from '@nebular/auth';
import { AuthService } from '../../services/auth.service';

// Based on:
// https://github.com/akveo/nebular/blob/v2.0.0/src/framework/auth/components/login/login.component.ts

@Component({
    selector: 'ngx-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLoginComponent extends NbLoginComponent {

    _authService: AuthService

    constructor(
        service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        cd: ChangeDetectorRef,
        router: Router,
        authService: AuthService
    ) {
        super(service, options, cd, router);
        this._authService = authService;
    }

    login(): void {
        //console.log(this.user);
        this._authService.ingresarConEmail(
            this.user.email,
            this.user.password
        );
    }
}