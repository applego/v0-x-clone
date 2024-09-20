import "@testing-library/jest-dom";
import React from "react";
import { describe, it, expect, jest } from "@jest/globals";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { TwitterCloneComponent } from "./twitter-clone";

// モックモジュールを作成して、Lucideアイコンをモック
jest.mock("lucide-react", () => ({
  Home: () => <div data-testid="home-icon" />,
  Search: () => <div data-testid="search-icon" />,
  Bell: () => <div data-testid="bell-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  User: () => <div data-testid="user-icon" />,
  MoreHorizontal: () => <div data-testid="more-icon" />,
  MessageCircle: () => <div data-testid="message-icon" />,
  Repeat2: () => <div data-testid="repeat-icon" />,
  Heart: () => <div data-testid="heart-icon" />,
  Share: () => <div data-testid="share-icon" />,
}));

describe("TwitterCloneComponent", () => {
  it("renders the header", () => {
    render(<TwitterCloneComponent />);
    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
  });

  it("renders the sidebar with navigation buttons", () => {
    render(<TwitterCloneComponent />);
    const sidebar = screen.getByRole("navigation");
    expect(
      within(sidebar).getByRole("button", { name: "Home" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "Explore" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "Notifications" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "Messages" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "Profile" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "More" })
    ).toBeInTheDocument();
    expect(
      within(sidebar).getByRole("button", { name: "Tweet" })
    ).toBeInTheDocument();
  });

  it("renders the tweet composer", () => {
    render(<TwitterCloneComponent />);
    const tweetComposer = screen.getByRole("form");
    expect(
      within(tweetComposer).getByPlaceholderText("What's happening?")
    ).toBeInTheDocument();
    expect(
      within(tweetComposer).getByRole("button", { name: "Tweet" })
    ).toBeInTheDocument();
  });

  it("renders initial tweets", () => {
    render(<TwitterCloneComponent />);
    expect(
      screen.getByText("Just setting up my Twitter clone!")
    ).toBeInTheDocument();
    expect(
      screen.getByText("React and Next.js are awesome!")
    ).toBeInTheDocument();
  });
});
