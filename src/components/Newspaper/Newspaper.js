import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import News from "../News/News";

const Newspaper = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=c580ca7060f54a4da6bd55300c699c39")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {news.map((data) => (
          <Grid item xs={2} sm={4} md={4}>
            <News data={data}></News>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Newspaper;
