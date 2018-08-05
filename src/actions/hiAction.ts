export const INCREMENT_ENTHUSIASM = 'HI_INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'HI_DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export interface IIncrementEnthusiasm {
    type: INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: DECREMENT_ENTHUSIASM
    }
}
