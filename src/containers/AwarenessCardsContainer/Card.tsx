import React from "react";
import "./AwarenessCards.css";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  createTheme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";

type CardDetails = {
  title: string;
  body: string;
  note: string;
  url: string;
  li: boolean;
  list: string[];
};
type CardProps = {
  cardProps: CardDetails;
};

function InfoCard(props: CardProps) {
  const theme = createTheme({
    typography: {
      fontFamily: "poppins",
    },
    overrides: {
      MuiTypography: {
        root: {
          height: "51%",
        },
        body2: {
          color: "black",
          textTransform: "uppercase",
          letterSpacing: "4px",
          fontWeight: "bold",
          fontSize: "large",
          textAlign: "left",
        },
        subtitle1: {
          textAlign: "left",
          fontSize: "small",
        },
        caption: {
          marginTop: "1rem",
          textAlign: "left",
          fontSize: "xx-small",
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Card className="root">
        <CardHeader
          title={props.cardProps.title}
          avatar={
            <Avatar aria-label="recipe">
              <img
                src={process.env.PUBLIC_URL + props.cardProps.url}
                className="media"
                alt=""
              />
            </Avatar>
          }
        />
        {!props.cardProps.li && (
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              {props.cardProps.body}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {props.cardProps.note}
            </Typography>
          </CardContent>
        )}
        {props.cardProps.li && (
          <CardContent>
            <ul>
              {props.cardProps.list.map((item) => {
                return (
                  <li>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      component="p"
                    >
                      {item}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        )}
      </Card>
    </ThemeProvider>
  );
}
export default InfoCard;
