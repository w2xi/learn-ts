// 泛型

function useState<T>(state: T) {
  let currSatate = state;
  const mutateState = (newVal: T) => {
    currSatate = newVal;
  }

  return [currSatate, mutateState];
}

const [value, fn] = useState(1);