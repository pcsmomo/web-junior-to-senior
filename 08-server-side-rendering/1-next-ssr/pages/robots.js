import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = () => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">Home</Link>
      <div>Robots data</div>
    </div>
  );
};

export default Robots;
