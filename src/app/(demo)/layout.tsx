"use client";

import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import MemoryIcon from "@mui/icons-material/Memory";

import Link from "next/link";

import Logo from "@/components/logo";

interface MessagesLayoutProps {
  children: React.ReactNode;
}

export default function MessagesLayout({
  children, // will be a page or nested layout
}: MessagesLayoutProps) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <AppBar position="static" sx={{ bgcolor: "primary.dark" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Tooltip title="Home">
              <Link href="/" style={{ display: "inline-block" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Logo variant="full" width={35} height={35} />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    First Next.js Example
                  </Typography>
                </Box>
              </Link>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title="State Demo">
              <Link href="/state">
                <IconButton color="inherit" aria-label="State Demo">
                  <MemoryIcon />
                </IconButton>
              </Link>
            </Tooltip>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "white", mx: 1 }}
            />

            <Tooltip title="View Messages">
              <Link href="/messages/view">
                <IconButton color="inherit" aria-label="View Messages">
                  <EmailIcon />
                </IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Send Message">
              <Link href="/messages/send">
                <IconButton color="inherit" aria-label="Send Message">
                  <SendIcon />
                </IconButton>
              </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {children}
    </section>
  );
}
