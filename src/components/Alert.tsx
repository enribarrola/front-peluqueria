import React from 'react';

interface AlertProps {
	type: string;
	descripcion: string;
}

function Alert({ type, descripcion }: AlertProps) {
  return (
	<div className={type} role="alert">
		{descripcion}
	</div>
  )
}

export default Alert

