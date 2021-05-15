import { CadastroprofessorComponent } from './pages/public/cadastro/cadastroprofessor/cadastroprofessor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './pages/private/home/home.component';
import { CadastroComponent } from './pages/public/cadastro/cadastro.component';
import { LoginComponent } from './pages/public/login/login.component';
import { PaginaNaoEncontradaComponent } from './pages/public/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent,
  },
  {
    path: 'nova-conta',
    component: CadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'erro',
    component: PaginaNaoEncontradaComponent,
  },
  {
    path: 'cadastro-professor',
    component: CadastroprofessorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
