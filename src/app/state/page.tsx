"use client";

import { useState, MouseEvent } from "react";

import {
  Button,
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
  const [count, setCount] = useState(0);
  const theme = useTheme();

  const handelIncrement = (e: MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
    console.log(`${count} button was clicked!`);
    console.dir(e);
  };

  const handelReset = () => {
    setCount(0);
    console.log(`Reset button was clicked!`);
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
      {/* <Button variant="contained" color="secondary" onClick={handelIncrement}>
        Increment
      </Button>
      <Button variant="outlined" color="error" onClick={handelReset}>
        Reset
      </Button>
      <Counter count={count} /> */}
    </main>
  );
}

function Counter({ count }: { count: number }) {
  return <p>{count}</p>;
}
