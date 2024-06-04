import React, { useEffect } from 'react';

interface AlertProps {
	descripcion: string;
	type: string;
	show: boolean;
	onClose: () => void;
  }


function Alert({ type, descripcion, onClose, show }: AlertProps) {
	useEffect(() => {
		if (show) {
		  const timer = setTimeout(onClose, 4000);
		  return () => clearTimeout(timer);
		}
	  }, [show, onClose]);
	
	  if (!show) return null;
  return (
	<div className={type} alert-dismissible="true" role="alert">
		{descripcion}
		<button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
	</div>
  )
}

export default Alert

