export interface IHello {
  languageName: string;
  enthusiasmLevel: number;
}

export interface IHelloStore {
  hello: IHello
}

export const storeHello: IHello = {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
};
