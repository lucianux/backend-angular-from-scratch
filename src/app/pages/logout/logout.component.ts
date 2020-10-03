import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
    NbAuthService,
    NbLogoutComponent,
    NB_AUTH_OPTIONS
} from '@nebular/auth';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'nb-logout',
    templateUrl: './logout.component.html',
})
export class NgxLogoutComponent extends NbLogoutComponent {

    _authService: AuthService;

    constructor(protected service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) protected options = {},
        protected router: Router,
        authService: AuthService
    ) {
        super(service, options, router);
        this._authService = authService;
    }

    logout(strategy: string): void {
        this._authService.logout();
    }

}