export const slideInAnimation =
    trigger('routeAnimations', [
        transition(':enter', [
            style({ opacity: 0 }), //apply default styles before animation starts
            animate(
                '500ms   ease-in-out',
                style({ opacity: '1' })
            ),
        ]),
        transition(':leave', [
            style({ transform: 'transalteY(0)' }), //apply default styles before animation starts
            animate(
                '1000ms ease-in-out',
                style({ transform: ' transalteY(-100%)' })
            ),
        ]),
    ]);