"use client";

import { useState, useReducer, MouseEvent } from "react";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  useTheme,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function Page() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0); // used JUST in this example to force a re-render. DO NOT USE!
  const theme = useTheme();

  let c = 0;
  console.log(`Rendered! Count is: ${c}`);

  const handelIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    c = c + 1;
    console.log(`Button was clicked! Count is: ${c}`);
    // console.dir(e); // what does the event look like?
    // console.log(e.currentTarget); // what does the currentTarget look like?
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
  };

  const handelReset = () => {
    console.log(`Reset button was clicked! Count was: ${c}`);
    c = 0;
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Incrementor example"
          subheader="TCSS 460"
          subheaderTypographyProps={{
            color: theme.palette.primary.contrastText,
          }}
          sx={{
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        />
        <CardContent>
          The count currently is:
          <Counter count={c} />
        </CardContent>
        <CardActions>
          <IconButton aria-label="Increment Action" onClick={handelIncrement}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="Reset Action" onClick={handelReset}>
            <RestartAltIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

function Counter({ count }: { count: number }) {
  return <p>{count}</p>;
}
