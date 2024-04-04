type Mods = Record<string, string| boolean>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [
    cls, 
    ...additional,
    ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([classMod, _]) =>  classMod)
  ]
  
  .join( ' ') 
}