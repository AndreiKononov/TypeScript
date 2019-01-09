export function sealed(p: string) { //фабричная функция, возвращающая декоратор класса, который не переопределяет
  // конструктор
  return function (target: Function): void {
    console.log(`Sealing the constructor ${p}`);
    console.log(target.prototype);
    Object.seal(target);
    Object.seal(target.prototype);
  }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction { // обычная функция-декоратор,
  // которая переопределяет конструктор класса
  let newConstructor: Function = function () {
    console.log('Creating new instance');
    console.log(target);
  };
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction>newConstructor;
}

export function writable(isWritable: boolean) {
  return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
    console.log(`Decorating method: ${methodName}`);
    descriptor.writable = isWritable;
  }
}