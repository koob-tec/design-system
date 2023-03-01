import { ButtonStyled } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'tertiary';
}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<ButtonStyled {...props}>{children}</ButtonStyled>
	);
}