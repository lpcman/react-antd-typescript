export interface IHi {
  languageName: string;
  enthusiasmLevel: number;
}

export interface IHiStore {
  hi: IHi
}

export const initSateHi: IHi = {
  enthusiasmLevel: 2,
  languageName: 'React',
};
