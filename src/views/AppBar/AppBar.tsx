import LanguageIcon from "@mui/icons-material/Language";
import "./AppBar.css";

interface Props {
	language: string;
}

const AppBar: React.FC<Props> = ({language}) => {
	return (
		<div className='appbar'>
			<h2 id='logo'>Ü</h2>
			<ul>
				<li>sobre mí</li>
				<li>mi trabajo</li>
				<li>recomendaciones</li>
				<li>herramientas</li>
				<li>contacto</li>
			</ul>
			<LanguageIcon fontSize='large' />
		</div>
	);
};

export default AppBar;
