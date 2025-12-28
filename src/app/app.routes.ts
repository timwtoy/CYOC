import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { CookieBuilder } from './cookie-builder/cookie-builder';

export const routes: Routes = [{
    path: '',
    component: Home,
    title: `Home`
}, {
    path: 'cookie-builder',
    component: CookieBuilder,
    title: `Cookie Builder`
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }