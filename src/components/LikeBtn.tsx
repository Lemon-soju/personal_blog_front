import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import React from "react";

interface LikeBtnProps {
  handleLike: React.MouseEventHandler<HTMLButtonElement>;
  isLike: boolean;
}

const LikeBtn: React.FC<LikeBtnProps> = ({
  handleLike,
  isLike = false,
}: LikeBtnProps) => {
  return (
    <IconButton onClick={handleLike} size="small">
      {isLike ? (
        <FavoriteIcon fontSize="small" color="inherit" />
      ) : (
        <FavoriteBorderIcon fontSize="small" color="inherit" />
      )}
    </IconButton>
  );
};

export default LikeBtn;
