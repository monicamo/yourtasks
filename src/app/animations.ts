import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const showStateTrigger = trigger('showState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('1800ms ease-out', keyframes([
      style({ offset: 0, opacity: 0, width: 0 }),
      style({ offset: 0.8, opacity: 0.5, width: '*', backgroundColor: 'lightgreen' }),
      style({ offset: 1, opacity: 1, width: '*', backgroundColor: 'lightblue' })
    ])),
  ]),
  transition(':leave', [
    animate('1300ms cubic-bezier(.13,1.79,.81,-1.2)',  style({ opacity: 0, width: 0 }))
  ])
]);

export const formButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    animate(200, style({
      backgroundColor: '#63b77C'
    })),
    animate(100, style({
      transform: 'scale(1.1)'
    })),
    animate(200, style({
      transform: 'scale(1)'
    })),
  ])
])


// https://cubic-bezier.com/#.28,.84,.91,0
// https://easings.net/
