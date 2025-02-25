# 2806Memorando

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


No projeto estávamos utilizando uma estratégia de recarregamento com a classe Router - um serviço que fornece navegação entre exibições e recursos de manipulação de URL. Ela foi organizada no projeto da seguinte maneira:

No arquivo app-routing.module.ts, o array de imports está assim:

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
 })
export class AppRoutingModule { }

Estamos usando essa opção onSameUrlNavigation com o valor 'reload', para que o navegador recarregue a página quando a mesma URL for navegada novamente.

Foi criada uma classe com o nome de AppRouteReuseStrategy. Nesse arquivo, temos o código a seguir:

import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

export class AppRouteReuseStrategy extends BaseRouteReuseStrategy {

  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data['reuseComponent'];
  }
}

O código apresentado define uma estratégia de reutilização de rotas personalizada AppRouteReuseStrategy, que estende a classe BaseRouteReuseStrategy do módulo @angular/router.

O método shouldReuseRoute é responsável por determinar se a rota atual pode ser reutilizada ou não.

Neste caso, a implementação personalizada verifica se a rota futura possui a propriedade reuseComponent definida no objeto data.

Se a propriedade estiver definida como true, a rota pode ser reutilizada. Caso contrário, a rota será tratada como uma nova rota e o componente correspondente será criado novamente.

Essa estratégia personalizada foi registrada no módulo da aplicação, dentro do array de providers:

No arquivo app-routing.module.ts:

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy}
  ],
 })
export class AppRoutingModule { }

Ainda no arquivo app-routing.module.ts, na constante contendo as rotas da aplicação, foi adicionada a propriedade data no componente:

const routes: Routes = [
   {
    path: 'listaTarefas',
    component: ListaTarefasComponent,
    data: {
      reuseComponent: true
    }
  }
];


A propriedade data é um objeto que pode ser adicionado a uma rota específica no arquivo de definição de rotas do Angular. Ele pode ser usado para armazenar metadados personalizados associados a uma rota, que podem ser usados para tomar decisões personalizadas ao navegar para uma rota específica.

Foi importada a classe RouteReuseStrategy e também a classe customizada no arquivo app-routing.module.ts

import { RouteReuseStrategy } from '@angular/router';
import { AppRouteReuseStrategy } from './app-route-reuse-strategy'


