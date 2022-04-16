import { WarningText, Warning } from "./warning-styled";

export const WarningComponent: React.FC<{ text: string }> = ({ text }) => {
	return (
		<Warning as="div" display={text}>
			<WarningText className="symbol">!</WarningText>
			<WarningText>{text}</WarningText>
		</Warning>
	);
};

