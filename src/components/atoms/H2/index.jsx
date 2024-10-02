import './H2.css';

const H2 = ({ children, className }) => {
   return <h2 className={`secondary-title ${className}`}>{children}</h2>;
};

export { H2 };
