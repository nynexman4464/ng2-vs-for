import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, NgModule} from '@angular/core';
import {VsForModule} from '../src/ng2-vs-for.module';

@Component({
  selector: 'ng2-vs-for-test',
  styles: [`
      .container {
          height: 300px;
          overflow-y: auto;
          background: wheat;
      }

      .container.tall {
          height: 500px;
          background: lightgreen;
      }

      @media (max-width: 500px) {
          /*.repeat-item {
            height: 50px !important;
          }*/
      }
  `],
  template: `
      <div class="container" [ngClass]="{tall: isTall}" *ngIf="shown">
          <div *vsFor="items; size:getItemSize; offsetBefore:100; offsetAfter: 100; excess: 3; scrollParent:'.container'; let _items = vsCollection; let _startIndex = vsStartIndex">
              <div *ngFor="let item of _items" title="{{item.index}}"
                   [ngStyle]="{height: item.index % 2 ? '25px' : '50px'}" class="repeat-item">
                  {{ item.value }} {{ _startIndex }}
              </div>
          </div>
      </div>
      <button (click)="refresh()">
          refresh
      </button>
      <button (click)="clear()">
          clear
      </button>
      <button (click)="isTall = !isTall">
          toggle tall
      </button>
      <button (click)="shown = !shown">
          toggle shown
      </button>
  `
  // <table>
  //   <tbody *vsFor="items; tagName:'tr'; scrollParent:'.container'; #_items = vsCollection">
  //     <tr *ngFor="#item of _items" title="{{item.index}}">
  //       <td>{{ item.value }}</td>
  //     </tr>
  //   </tbody>
  // </table>
})

class Boot {
  items: any = [];

  refresh() {
    this.items = [];
    let len = ~~(Math.random() * 100) + 5;
    let i = 0;
    while (len--) {
      this.items.push({value: Math.random(), index: i++});
    }
    const tic = Date.now();
    setTimeout(() => {
      console.info(Date.now() - tic);
    });
  }

  getItemSize(item: any) {
    return item.index % 2 ? 25 : 50;
  }

  clear() {
    this.items = [];
  }

  constructor() {
    // this.refresh();
  }
}

@NgModule({
  bootstrap: [Boot],
  declarations: [Boot],
  imports: [VsForModule]
})
class BootModule {

}

platformBrowserDynamic().bootstrapModule(BootModule);
