import {
  animate,
  group,
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
    group([
      animate(200, style({
        backgroundColor: '#63b77C'
      })),
      animate(100, style({
        transform: 'scale(1.1)'
      })),
    ]),
    animate(200, style({
      transform: 'scale(1)'
    })),
  ]),
  transition('valid => invalid', [
    group([
      animate(200, style({
        backgroundColor: '#6C5757D'
      })),
      animate(100, style({
        transform: 'scale(1.1)'
      })),
    ]),
    animate(200, style({
      transform: 'scale(1)'
    })),
  ])
])

export const flyInOutTrigger =
  trigger('flyInOut', [
    transition(':enter', [
      style({
        width: '100%',
        transform: 'translateX(-100%)',
        opacity: 0
      }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: '*'
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition(':leave', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(100%)',
          width: '*'
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])


// https://cubic-bezier.com/#.28,.84,.91,0
// https://easings.net/

/*
O passo-a-passo:

A animação possui dois estados, ':enter' e ':leave', que são acionados quando o elemento é adicionado ou removido do DOM, respectivamente.

Para o estado ':enter', primeiro é definido um estilo inicial utilizando o método 'style', onde o elemento é configurado com uma largura de 100%, deslocado para a esquerda em 100% usando a propriedade 'transform' e com opacidade 0.

Em seguida, é definido um grupo de animações utilizando o método 'group', onde duas animações serão executadas simultaneamente.

A primeira animação utiliza o método 'animate' e define uma duração de 0.3s, um atraso de 0.1s e uma função de timing 'ease'. Essa animação aplica um estilo ao elemento que o move de sua posição original (-100%) para a posição final (0) e ajusta sua largura para '*' que significa tamanho automático.

A segunda animação também utiliza o método 'animate' e define uma duração de 0.3s e uma função de timing 'ease'. Essa animação aplica um estilo ao elemento que define sua opacidade para 1, fazendo com que ele apareça.

Para o estado ':leave', é definido um grupo de animações semelhante, mas as animações movem o elemento para a direita em 100% usando a propriedade 'transform', e definem sua opacidade para 0, fazendo com que ele desapareça.
*/
