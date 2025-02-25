import {ActivatedRouteSnapshot, BaseRouteReuseStrategy} from '@angular/router';

/// RETIRADA ESSA SOLUCAO
export class AppRouteReuseStrategyDeprecated extends BaseRouteReuseStrategy {

  public override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.data['reuseComponent'];
  }
}
