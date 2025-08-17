// type CardProps = {
//   text: string;
//   count?: number;
// };

// export function Card({ text, count }: CardProps) {
//   return <div>{text}</div>;
// }

////////////////////

// type CardProps = {
//   children: React.ReactNode;
// };

// export function Card({ children }: CardProps) {
//   return <div>{children}</div>;
// }

/////////////////////////

type CardProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export function Card({ setCount }: CardProps) {
  return (
    <div>
      <button onClick={() => setCount((count: number) => count + 1)}>
        Click Me!
      </button>
    </div>
  );
}
