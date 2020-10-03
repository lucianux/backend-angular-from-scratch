import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
    NbAuthService,
    NbRegisterComponent,
    NB_AUTH_OPTIONS,
} from '@nebular/auth';
import { AuthService } from '../../services/auth.service';

// Based on:
// https://github.com/akveo/nebular/blob/v2.0.0/src/framework/auth/components/register/register.component.ts

@Component({
    selector: 'ngx-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxRegisterComponent extends NbRegisterComponent {

    _authService: AuthService;

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

    register(): void {
        //console.log(this.user);
        this._authService.registrarConEmail(
            this.user.email, 
            this.user.password
        );
        this.router.navigate(['/']);
    }
}