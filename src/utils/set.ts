function setsAreEqual<T = any>(a: Set<T>, b: Set<T>) {
  if (a.size !== b.size) {
    return false;
  }

  return Array.from(a).every((element) => {
    return b.has(element);
  });
}

export { setsAreEqual };
