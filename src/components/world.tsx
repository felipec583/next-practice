interface BolProp {
  val: boolean;
}

export default function World({ val }: BolProp) {
  return <div>{val ? <p>a</p> : <p>bobi</p>}</div>;
}
