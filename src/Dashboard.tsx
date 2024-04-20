import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const DashBoard: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === '/Login' ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);

  return (
  <div> {show && children} </div>
);
};

export default DashBoard;
