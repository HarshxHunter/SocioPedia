import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { Box, Typography, Divider, useTheme} from "@mui/material";

const HelpPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const theme = useTheme();
    const dark = theme.palette.neutral.dark;
    const primaryLight = theme.palette.primary.light;

    const fullName = `${user.firstName} ${user.lastName}`;
    const year = new Date().getFullYear();

    return (
        <Box
            padding="1rem 3%"
        >
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold" 
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="primary"
                    onClick={() => navigate("/home")}
                    sx={{
                        "&:hover": {
                            color: primaryLight,
                            cursor: "pointer",
                        },
                    }}
                >
                    Sociopedia
                </Typography>
            </FlexBetween>    
            <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
            >
                <p>Hello {fullName}, Welcome to Sociopedia this is Social Media platform for SoicoPaths.<br /><br /><br /><br />
                <h2>Hi, how can we help?</h2>
                <h3>How to explore Sociopedia</h3>
                <ul>
                    <li>Create New Account through our Registration page or Login In if already have a account.</li>
                    <li>Post Your Thoughts or Pictures by creating and posting a new Post through Post widget.</li>
                    <li>You can see posts from all people having account in Sociopedia</li>
                    <li>Search Users and view thier profiles.</li>
                    <li>Go to a Person's Profile Page by clicking on their Name and Know them More.</li>
                    <li>Add or Remove a person as a friend by clicking on the AddRemoveFriend Icon beside a person's Name.</li>
                    <li>Like and Unlike Post And Read Comments.</li>
                    <li>Post your own comments.</li>
                    <li>Toggle between Dark and Light Mode.</li>
                    <li>Make sure to Logout before Leaving the Site.</li>
                </ul> 
                <br />
                </p>
            </Typography>
            <Divider />
            <Typography fontSize="1rem">Want to know how We Built Sociopedia</Typography>
            <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <img src="../assets/icon3.png" alt="github" />
                        <Box>
                            <a href="https://github.com/HarshxHunter/SocioPedia" target="_blank">GitHub Repository</a>
                        </Box>
                    </FlexBetween>
            </FlexBetween> 
            
            <Divider />
            
            <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <Typography fontWeight="bold" fontSize="1rem">Contact Us:</Typography>
                        <Box>
                            <img src="../assets/gmail.png" alt="email" />
                        </Box>
                        <Typography>kairaharsh793@gmail.com</Typography>
                        <Box>
                            <img src="../assets/yeswhatsapp.png" alt="email" />
                        </Box>
                        <Typography>70429XXXXX</Typography>
                    </FlexBetween>
            </FlexBetween> 
            <Box position="fixed" left="43rem">
                <p><br /></p>
                <Typography>Copyright ⓒ {year}</Typography>  
            </Box>  
        </Box>
    )
};

export default HelpPage;