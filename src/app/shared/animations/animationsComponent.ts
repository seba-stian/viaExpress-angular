import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-out', style({ opacity: 1 }))]),
    transition(':leave', [style({ opacity: 1 }), animate('0.5s ease-out', style({ opacity: 0 }))]),
]);
export const getLeftAnimation = trigger('getLeftAnimation', [
    transition('* => *', [
    query(':enter', [style({ opacity: 0 })], {
        optional: true,
    }),
    query(':leave', [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))], { optional: true }),
    query(':enter', [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))], { optional: true }),
    ]),
]);
export const getDownAnimation = trigger('getDownAnimation', [
    transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-200%)' }),
    animate('0.7s ease-out', style({ opacity: 1, transform: 'translateY(0%)' })),
    ]),
]);

export const listAnimation = trigger('listanimation', [
    transition('* => *', [
    query(':enter', [style({ opacity: 0 }), stagger(100, [animate('0.3s', style({ opacity: 1 }))])], {
        optional: true,
       }),
  ]),
]);