import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  template: '#{{ progress }}#{{ progress2 }}#',
})
export class ProgressIndicatorComponent {
  @HostBinding('attr.aria-valuenow')
  @Input()
  public progress?: number;

  @Input()
  public progress2?: number;
}
