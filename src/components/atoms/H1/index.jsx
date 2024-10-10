import './H1.css';

const H1 = ({ children, className }) => {
   return <h1 className={`main-title ${className}`}>{children}</h1>;
};

export { H1 };
