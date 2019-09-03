import { trigger, state, style, transition, animate, query, group } from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                })
            ],{optional: true}),
            query(':enter', [
                animate('500ms 1.5s linear', 
                    style({ opacity: 1 })
                ),
            ],{optional: true}),
            query(':leave', [
                animate('500ms 1.5s linear', 
                    style({ opacity: 0 })
                ),
            ],{optional: true}),
        ]),        
    ]);