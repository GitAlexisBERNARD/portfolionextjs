import type { MonComposantProps } from "@/app/types";
  
  const MonComposant: React.FC<MonComposantProps> = ({ message }) => {
    return <div>{message}</div>;
  };
  
  export default MonComposant;
  