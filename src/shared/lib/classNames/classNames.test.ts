import { classNames } from "shared/lib/classNames/classNames"

describe('classnames', () => {
  test('test with only first param', () => {
    expect(classNames('someClasses')).toBe('someClasses')
  });

  test('test with additional class', () => {
    const expected = 'someClasses class1 class2'
    expect(classNames('someClasses', {}, ['class1', 'class2'])).toBe(expected)
  });

  test('test with mods', () => {
    const expected = 'someClasses class1 class2 hovered scrollable'
    expect(classNames('someClasses', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected)
  });

  test('test with mods false', () => {
    const expected = 'someClasses class1 class2 hovered'
    expect(classNames('someClasses', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
  });

  test('test with mods undefined', () => {
    const expected = 'someClasses class1 class2 hovered'
    expect(classNames('someClasses', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected)
  });
})