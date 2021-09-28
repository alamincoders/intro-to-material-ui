import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";

const News = (props) => {
  const { title, description, urlToImage, publishedAt } = props.data;
  return (
    <div>
      <Card>
        <CardHeader avatar={<Avatar aria-label="recipe"></Avatar>} title={title} subheader={publishedAt} />
        <CardMedia component="img" image={urlToImage} alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default News;
