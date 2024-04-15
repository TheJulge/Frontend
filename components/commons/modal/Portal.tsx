import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}
const Portal = ({ children }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.id = 'modal-root';
    document.body.appendChild(el);
    setContainer(el);

    return () => {
      if (el) {
        document.body.removeChild(el);
      }
    };
  }, []);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(children, container);
};

export default Portal;
