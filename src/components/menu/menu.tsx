import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/actions";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MoodIcon from "@mui/icons-material/Mood";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
			},
		},
	},
}));

const CustomizedMenu = () => {
	const navigate = useNavigate();
	const { id } = useAppSelector((state) => state.userReducer);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event: React.MouseEvent<HTMLElement>) => {
		const toLocation = event.currentTarget.textContent?.toLowerCase().split(" ").join("");
		if (toLocation) {
			navigate(`/${toLocation}`);
		}
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="customized-button"
				aria-controls={open ? "customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				variant="contained"
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
			>
				Меню
			</Button>

			<StyledMenu
				id="customized-menu"
				MenuListProps={{
					"aria-labelledby": "customized-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{!Boolean(id) ? (
					<div>
						<MenuItem onClick={handleClose} disableRipple>
							<LoginIcon />
							Login
						</MenuItem>
						<MenuItem onClick={handleClose} disableRipple>
							<MoodIcon />
							Register
						</MenuItem>
					</div>
				) : (
					<div>
						<MenuItem onClick={handleClose} disableRipple>
							<BlurCircularIcon />
							Entered
						</MenuItem>
						<MenuItem onClick={handleClose} disableRipple>
							<ManageAccountsIcon />
							Change password
						</MenuItem>
					</div>
				)}
			</StyledMenu>
		</div>
	);
};

export default CustomizedMenu;
