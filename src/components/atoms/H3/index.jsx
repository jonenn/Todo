import './H3.css';

const H3 = ({ children, className }) => {
   return <h3 className={`tertiary-title ${className}`}>{children}</h3>;
};

export { H3 };
