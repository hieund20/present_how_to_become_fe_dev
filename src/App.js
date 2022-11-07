import logo from "./logo.svg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./App.css";
import { useEffect, useState } from "react";
import { Question } from "./data/question";

function App() {
  const [data, setData] = useState([]);
  const [questionId, setQuestionId] = useState(1);

  const onNextSlide = () => {
    if (questionId === data.length) return;
    setQuestionId(questionId + 1);
  };

  const onPrevSlide = () => {
    if (questionId === 1) return;
    setQuestionId(questionId - 1);
  };

  useEffect(() => {
    setData(Question);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontSize: 18, marginTop: 16 }}
        >
          HOW TO BECOME A FRONT-END DEVELOPER
        </Typography>
      </header>
      <body>
        <Container maxWidth="xl" style={{ paddingTop: 90, paddingBottom: 100 }}>
          {data.map((item, index) => (
            <>
              {questionId === item.id && (
                <>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: 20, marginBottom: 32, color: "white" }}
                  >
                    {item.question}
                  </Typography>
                  <Grid
                    sx={{ flexGrow: 1, alignItems: "center" }}
                    container
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <Grid container justifyContent="center" spacing={2}>
                        <IconButton
                          onClick={() => onPrevSlide()}
                          style={{ color: "white" }}
                        >
                          <ArrowBackIosIcon />
                        </IconButton>
                        {item.option.map((el, index) => (
                          <Grid key={index} item style={{ width: "25%" }}>
                            <Card
                              sx={{
                                maxWidth: 400,
                                minHeight: 300,
                                height: 300,
                              }}
                            >
                              <CardActionArea>
                                <CardMedia
                                  component="img"
                                  height="220"
                                  image={el.image}
                                  alt="green iguana"
                                />
                                <CardContent>
                                  <Typography
                                    variant="body2"
                                    color="black"
                                    style={{ fontSize: 14, fontWeight: "bold" }}
                                  >
                                    {el.content}
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>
                        ))}
                        <IconButton
                          onClick={() => onNextSlide()}
                          style={{ marginLeft: 16, color: "white" }}
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          ))}
        </Container>
      </body>
    </div>
  );
}

export default App;
