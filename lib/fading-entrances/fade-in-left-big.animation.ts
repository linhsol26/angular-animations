import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const fadeInLeftBig = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: 'visible', opacity: 0, transform: 'translate3d(-2000px, 0, 0)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeInLeftBigAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInLeftBig', [
    transition(
      '0 <=> 1',
      [
        useAnimation(fadeInLeftBig, {
          params: {
            duration: '{{duration}}',
            delay: '{{delay}}'
          }
        })
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function fadeInLeftBigOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInLeftBigOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        useAnimation(fadeInLeftBig, {
          params: {
            duration: '{{duration}}',
            delay: '{{delay}}'
          }
        })
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
