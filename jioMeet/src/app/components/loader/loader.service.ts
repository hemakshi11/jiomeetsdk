import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Loader } from './loader';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader = new BehaviorSubject<Loader>({id: 'global', status: false});
  loaderStatus$ = this.loader.asObservable();



  constructor() { }


  /**
   * Show loader
   * @param {string} id
   */
  public showLoader(id: string = 'global'): void {
    this.loader.next({id, status: true});
  }

  /**
   * Hide loader
   * @param {string} id
   */
  public hideLoader(id: string = 'global'): void {
    this.loader.next({id, status: false});
  }

}
