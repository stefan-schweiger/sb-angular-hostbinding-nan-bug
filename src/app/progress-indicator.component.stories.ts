import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ProgressIndicatorComponent } from './progress-indicator.component';

export default {
  title: 'Misc/Progress',
  component: ProgressIndicatorComponent,
  decorators: [
    moduleMetadata({

    }),
  ],
} as Meta;

export const Base: Story<ProgressIndicatorComponent> = (args) => ({
  props: args,
  template: `
    <app-progress-indicator></app-progress-indicator>`,
});

Base.args = {

};
