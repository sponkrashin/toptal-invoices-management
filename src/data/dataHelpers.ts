export function revalidationObjectFactory(): {
  addFunction: (fn: Function) => void;
  removeFunction: (fn: Function) => void;
  revalidate: () => void;
} {
  const revalidateFunctions: Function[] = [];

  const addFunction = (fn: Function): number => {
    if (revalidateFunctions.indexOf(fn) !== -1) {
      throw new Error('Duplicate revalidation function');
    }

    return revalidateFunctions.push(fn);
  };

  const removeFunction = (fn: Function) => {
    const index = revalidateFunctions.indexOf(fn);
    if (index === -1) {
      throw new Error('Revalidation function not found');
    }

    revalidateFunctions.splice(index, 1);
  };

  const revalidate = () => revalidateFunctions.forEach((fn) => fn());

  return {
    addFunction,
    removeFunction,
    revalidate,
  };
}
