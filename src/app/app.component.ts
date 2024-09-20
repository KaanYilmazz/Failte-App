import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@lib/services';
import { ThemeService } from '@lib/services/theme';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import { LayoutHorizontalComponent } from './lib/components/layouts/layout-horizontal/layout-horizontal.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutHorizontalComponent, NgxSpinnerModule],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    isAuthenticated$ = inject(AuthService).isAuthenticated$;

    private readonly _themeService = inject(ThemeService);

    ngOnInit(): void {
        this._themeService.init();
    }
    /**
     *
     */
    constructor(private toastr: ToastrService) {


        this.toastr.success('Hello world!', 'Toastr fun!');
       
    }
    
}
