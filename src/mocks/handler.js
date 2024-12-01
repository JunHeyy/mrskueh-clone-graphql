import { ApolloLink, Observable } from '@apollo/client';
import { MENU, BANNER, CONFIG, OPENINGHOURS } from '../apollo/graphql/constants/request-constants'

export const mockLink = new ApolloLink((operation) => {
    return new Observable((observer) => {
        const { operationName } = operation;

        switch (operationName) {
            case 'GetMenu':
                observer.next({ data: { getMenuOptimised: MENU.data.getMenuOptimised } });
                break;
            case 'GetBanner':
                observer.next({ data: { activeLandingPageBanner: BANNER.data.activeLandingPageBanner } });
                break;
            case 'GetConfig':
                observer.next({ data: { config: CONFIG.data.config } });
                break;
            case 'GetOpeningHours':
                observer.next({ data: { getTimeslots: OPENINGHOURS.data.getTimeslots } });
                break;
            default:
                observer.next({ data: {} });
        }

        observer.complete();
        return () => { };
    });
});