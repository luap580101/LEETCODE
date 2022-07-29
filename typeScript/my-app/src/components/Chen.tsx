import React, { useState } from "react";

// type TitleProps = {
//     name: string
// }

interface TitleProps {
  name: string;
}
interface TitleProps {
  desc?: string;
}

const Title: React.FC<TitleProps> = ({ name, desc }) => {
  return <p>{name}</p>;
};

const Chen: React.FC = () => {
  const [title, setTitle] = useState<number | string>("");
  return (
    <div>
      <Title name="999" />
    </div>
  );
};

export default Chen;
