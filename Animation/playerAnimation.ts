export const PLayerAnimation = [
    trigger('Content', [
        transition(':enter', [
            style({ opacity: 0.8, transform: 'translateY(40px)' }), //apply default styles before animation starts
            animate(
                '500ms   ease-in-out',
                style({ opacity: 1, transform: 'translateY(0)' })
            ),
        ]),

    ]),
    trigger('showCountries', [
        transition(':enter', [
            style({ opacity: 0, transform: 'scale(0.9)' }), //apply default styles before animation starts
            animate(
                '750ms 200ms ease-in-out',
                style({ opacity: 1, transform: 'scale(1)' })
            ),
        ]),
        transition(':leave', [
            style({ opacity: 1, transform: 'scale(1)' }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0, transform: 'scale(0.5)' })
            ),
        ]),
    ]),
    trigger('enterRight', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(40px)' }), //apply default styles before animation starts
            animate(
                '750ms  0ms ease-in-out',
                style({ opacity: 1, transform: 'translateX(0)' })
            ),
        ]),
        transition(':leave', [
            style({ opacity: 1, transform: '(1)' }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0, transform: 'scale(0.5) transalteY(-20px)' })
            ),
        ]),
    ]),
    trigger('tabs', [
        transition(':enter', [
            style({ opacity: 0.7, transform: 'translateY(5px) scale(0.97)' }), //apply default styles before animation starts
            animate(
                '600ms  0ms ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) scale(1)' })
            ),
        ]),
        transition(':leave', [
            style({ opacity: 1 }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0 })
            ),
        ]),
    ])
    ,
    trigger('InfoAnimation', [
        transition(':enter', [
            style({ opacity: 0.7, transform: 'translateY(5px) scale(0.97)' }), //apply default styles before animation starts
            animate(
                '600ms  0ms ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) scale(1)' })
            ),
        ]),
        transition(':leave', [
            style({ opacity: 1 }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0 })
            ),
        ]),
    ])
    ,
    trigger('nav', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(5px) scale(0.97)' }), //apply default styles before animation starts
            animate(
                '600ms  0ms ease-in-out',
                style({ opacity: 1, transform: 'translateY(0) scale(1)' })
            ),
        ]),
        transition(':leave', [
            style({ opacity: 1 }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0 })
            ),
        ]),
    ]),
    trigger('fadeIn', [
        transition(':enter', [

            style({ opacity: 0, transform: 'translateY(5px) scale(0.98)' }), //apply default styles before animation starts
            animate(
                `600ms  {{delay}}ms ease-in-out`,
                style({ opacity: 1, transform: 'translateY(0) scale(1)' })
            ),
        ], { params: { delay: '200' } }),
        transition(':leave', [
            style({ opacity: 1 }), //apply default styles before animation starts
            animate(
                '600ms ease-in-out',
                style({ opacity: 0 })
            ),
        ]),
    ]),


]