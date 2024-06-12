import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./GeneralInfo.css";

interface Props {}

const GeneralInfo: React.FC<Props> = () => {
	return (
		<div className='general-container'>
			<div className=''>
				<h3>
					Hola, soy <span>Uriel</span>
				</h3>
				<p>Mobile/Web Developer</p>
				<button className='cv-button'>
					Descargar CV <ArrowDownwardIcon />
				</button>
			</div>
			<div className='image-container'>
				<img src='assets/me.png' />
				<img id='triangle' src='assets/triangle.png' />
				<img id='square' src='assets/square.png' />
				<img id='pentagon' src='assets/pentagon.png' />
			</div>
		</div>
	);
};

export default GeneralInfo;
