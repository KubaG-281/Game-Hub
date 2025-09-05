import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <>
      <h5 className="text-secondary fw-bold">{term}</h5>
      <dd>{children}</dd>
    </>
  );
};

export default DefinitionItem;
