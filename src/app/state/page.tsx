"use client";

import { useState, useReducer, MouseEvent } from "react";

import {
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
  // const [, forceUpdate] = useReducer((x) => x + 1, 0); // used JUST in this example to force a re-render. DO NOT USE!
  const [count, setCount] = useState(0);
  const theme = useTheme();

  let c = 0;
  console.log(`Rendered! Count is: ${count}`);

  const handelIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    const incCount = count + 1;
    setCount(incCount);
    console.log(`Button was clicked! Count is: ${incCount}`);
    // console.dir(e);
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
  };

  const handelReset = () => {
    console.log(`Reset button was clicked! Count was: ${c}`);
    setCount(0);
    // forceUpdate(); // used JUST in this example to force a re-render. DO NOT USE!
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
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
          <Counter count={count} />
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
    </main>
  );
}

function Counter({ count }: { count: number }) {
  return <p>{count}</p>;
}
