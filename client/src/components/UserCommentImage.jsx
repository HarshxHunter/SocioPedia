import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const UserCommentImage = ({ image, size = "40px" }) => {
  const URL = useSelector((state) => state.URL);
  
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="avtr"
        src={`${image}`}
      />
    </Box>
  );
};

export default UserCommentImage;